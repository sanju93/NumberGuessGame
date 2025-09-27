import { Text, View, Image, StyleSheet } from "react-native";
import Title from "../Components/Title";
import PrimaryButton from "../Components/PrimaryButton";

function GameOver({ gameRounds, currentNumber, onRestartGame }) {
  return (
    <View style={styles.rootContainer}>
      <Title>Game Over!</Title>
      <View style={styles.imageContainer}>
        <Image
          style={styles.image}
          source={require("../assets/images/success.png")}
        />
      </View>

      <Text style={styles.textContainer}>
        Your Phone needed<Text style={styles.highlight}> {gameRounds} </Text>
        rounds to guess the number
        <Text style={styles.highlight}> {currentNumber} </Text>
      </Text>
      <PrimaryButton onPress={onRestartGame}> Start New Game</PrimaryButton>
    </View>
  );
}

const styles = StyleSheet.create({
  rootContainer: {
    justifyContent: "center",
    alignItems: "center",
    flex: 1,
    marginTop: 50,
  },
  imageContainer: {
    height: 300,
    width: 300,
    borderRadius: 150,
    borderWidth: 2,
    borderColor: "black",
    margin: 36,
    overflow: "hidden",
  },
  image: {
    height: "100%",
    width: "100%",
  },
  textContainer: {
    fontFamily: "roboto-regular",
    fontSize: 16,
    textAlign: "center",
    marginBottom: 12,
  },
  highlight: {
    fontFamily: "roboto-bold",
    color: "#720636",
  },
});

export default GameOver;
