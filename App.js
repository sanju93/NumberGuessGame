import { StatusBar } from "expo-status-bar";
import { StyleSheet, ImageBackground, SafeAreaView } from "react-native";
import StartGameScreen from "./Screens/StartGameScreen";
import GameScreen from "./Screens/GameScreen";
import { LinearGradient } from "expo-linear-gradient";
import { useEffect, useState } from "react";
import GameOverScreen from "./Screens/GameOverScreen";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";

SplashScreen.preventAutoHideAsync();

export default function App() {
  const [pickedNumber, setPickedNumber] = useState(null);
  const [gameOverScreen, setGameOverScreen] = useState(false);
  const [gameRounds, setGameRounds] = useState(0);
  const [loaded] = useFonts({
    "roboto-regular": require("./assets/fonts/roboto/Roboto-Regular.ttf"),
    "roboto-bold": require("./assets/fonts/roboto/Roboto-Bold.ttf"),
  });

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }
  function handledPickedNumber(number) {
    setPickedNumber(number);
  }

  function handleGameOverScreen(numberOfRounds) {
    setGameOverScreen(true);
    setGameRounds(numberOfRounds);
  }

  function onRestartNewGame() {
    setPickedNumber(null);
    setGameRounds(0);
    setGameOverScreen(false);
  }
  let screen = <StartGameScreen handlePickedNumber={handledPickedNumber} />;

  if (pickedNumber) {
    screen = (
      <GameScreen guessNumber={pickedNumber} gameOver={handleGameOverScreen} />
    );
  }

  if (gameOverScreen && pickedNumber) {
    screen = (
      <GameOverScreen
        gameRounds={gameRounds}
        currentNumber={pickedNumber}
        onRestartGame={onRestartNewGame}
      />
    );
  }

  return (
    <LinearGradient colors={["#720636", "yellow"]} style={styles.appContainer}>
      <StatusBar style="light" />
      <ImageBackground
        style={styles.appContainer}
        source={require("./assets/images/background.png")}
        resizeMode="cover"
        imageStyle={styles.backgroundImage}
      >
        <SafeAreaView style={styles.appContainer}>{screen}</SafeAreaView>
      </ImageBackground>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
  },

  backgroundImage: {
    opacity: 0.15,
  },
});
