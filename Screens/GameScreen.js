import { Text, View, StyleSheet } from "react-native";
import Title from "../Components/Title";
import { useState } from "react";
import NumberContainer from "../Components/game/NumberContainer";

function generateRandomNumbers(min, max, exclude) {
  const randm = Math.floor(Math.random() * max - min) + min;

  if (randm === exclude) {
    return generateRandomNumbers(min, max, exclude);
  } else {
    return randm;
  }
}

function GameScreen({ guessNumber }) {
  const initialGuess = generateRandomNumbers(1, 100, guessNumber);
  const [currentGuess, setCurrentGuess] = useState(initialGuess);

  return (
    <>
      <View style={styles.gameContainer}>
        <View>
          <Title>Opponent's Guess</Title>
        </View>
        <View>
          <NumberContainer>{currentGuess}</NumberContainer>
        </View>
        <Text>Game Screen</Text>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  gameContainer: {
    flex: 1,
    padding: 15,
    marginTop: 50,
  },
});

export default GameScreen;
