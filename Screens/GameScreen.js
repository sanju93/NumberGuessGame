import { Text, View, StyleSheet, Alert, FlatList } from "react-native";
import Title from "../Components/Title";
import { useEffect, useState } from "react";
import NumberContainer from "../Components/game/NumberContainer";
import PrimaryButton from "../Components/PrimaryButton";
import Card from "../Components/Card";
import { Ionicons, AntDesign } from "@expo/vector-icons";
import GuessLogItem from "../Components/guessLogItem";

function generateRandomNumbers(min, max, exclude) {
  const randm = Math.floor(Math.random() * (max - min)) + min;

  if (randm === exclude) {
    return generateRandomNumbers(min, max, exclude);
  } else {
    return randm;
  }
}
let minBoundary = 1;
let maxBoundary = 100;
function GameScreen({ guessNumber, gameOver }) {
  const initialGuess = generateRandomNumbers(1, 100, guessNumber);
  const [currentGuess, setCurrentGuess] = useState(initialGuess);
  const [gameRounds, setGameRounds] = useState([initialGuess]);

  useEffect(() => {
    if (currentGuess === guessNumber) {
      gameOver(gameRounds.length);
    }
  }, [currentGuess]);

  useEffect(() => {
    minBoundary = 1;
    maxBoundary = 100;
  }, []);

  function nextGuessHandler(type) {
    if (
      (type === "lower" && currentGuess < guessNumber) ||
      (type === "upper" && currentGuess > guessNumber)
    ) {
      Alert.alert("Don't Lie!", "You Know that this is wrong...", [
        { text: "Sorry!", style: "cancel" },
      ]);
      return;
    }

    if (type === "lower") {
      maxBoundary = currentGuess;
    } else {
      minBoundary = currentGuess + 1;
    }

    const generateNumber = generateRandomNumbers(
      minBoundary,
      maxBoundary,
      currentGuess
    );

    setCurrentGuess(generateNumber);
    setGameRounds((prevRounds) => [generateNumber, ...prevRounds]);
  }

  return (
    <>
      <View style={styles.gameContainer}>
        <View>
          <Title>Opponent's Guess</Title>
        </View>
        <View>
          <NumberContainer>{currentGuess}</NumberContainer>
        </View>
        <Card>
          <Text style={styles.titleInstruction}>Higher or Lower?</Text>
          <View style={styles.actionButtonContainer}>
            <View style={styles.actionButton}>
              <PrimaryButton onPress={() => nextGuessHandler("lower")}>
                <AntDesign name="minus" size={24} color={"white"} />
              </PrimaryButton>
            </View>
            <View style={styles.actionButton}>
              <PrimaryButton onPress={() => nextGuessHandler("upper")}>
                <Ionicons name="add" size={24} color={"white"} />
              </PrimaryButton>
            </View>
          </View>
        </Card>
        <View style={styles.roundContainer}>
          <FlatList
            data={gameRounds}
            renderItem={(item) => (
              <GuessLogItem
                roundNumber={gameRounds.length - item.index}
                guess={guessNumber}
              />
            )}
            keyExtractor={(item) => item}
          />
        </View>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  gameContainer: {
    flex: 1,
    padding: 10,
    marginTop: 80,
  },
  titleInstruction: {
    color: "#ddb52f",
    fontSize: 22,
  },
  actionButtonContainer: {
    flexDirection: "row",
    marginTop: 22,
  },
  actionButton: {
    flex: 1,
  },
  roundContainer: {
    flex: 2,
    paddingLeft: 15,
    paddingRight: 15,
    paddingBottom: 30,
  },
});

export default GameScreen;
