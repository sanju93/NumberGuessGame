import { StatusBar } from "expo-status-bar";
import { StyleSheet, ImageBackground, SafeAreaView } from "react-native";
import StartGameScreen from "./Screens/StartGameScreen";
import GameScreen from "./Screens/GameScreen";
import { LinearGradient } from "expo-linear-gradient";
import { useState } from "react";

export default function App() {
  const [pickedNumber, setPickedNumber] = useState(null);

  function handledPickedNumber(number) {
    setPickedNumber(number);
  }
  let screen = <StartGameScreen handlePickedNumber={handledPickedNumber} />;

  if (pickedNumber) {
    screen = <GameScreen />;
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
