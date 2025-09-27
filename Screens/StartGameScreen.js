import { View, TextInput, StyleSheet, Alert, Text } from "react-native";
import PrimaryButton from "../Components/PrimaryButton";
import { useState } from "react";
import Card from "../Components/Card";
import Title from "../Components/Title";

function StartGameScreen({ handlePickedNumber }) {
  const [enteredNumber, setEnteredNumber] = useState("");

  function handleOnEnteredNumber(text) {
    setEnteredNumber(text);
  }

  function handleOnResetNumber() {
    setEnteredNumber("");
  }

  function handleOnInvalidNumberClick() {
    setEnteredNumber("");
  }

  function handleOnConfirmButtonClick() {
    const number = parseInt(enteredNumber);

    if (isNaN(number) || number < 0 || number > 99) {
      //showing the alert message
      Alert.alert("Invalid Number!", "Number Should be in between 0 and 100", [
        {
          text: "Okay",
          style: "cancel",
          onPress: handleOnInvalidNumberClick,
        },
      ]);
      return;
    }

    handlePickedNumber(number);
  }
  return (
    <View style={styles.rootContainer}>
      <Title>Guess My Number</Title>
      <Card>
        <Text style={styles.titleInstruction}>Enter the Number</Text>
        <TextInput
          style={styles.inputBox}
          keyboardType="number-pad"
          maxLength={2}
          autoComplete="none"
          autoCapitalize={false}
          value={enteredNumber}
          onChangeText={handleOnEnteredNumber}
        />
        <View style={styles.buttonContainer}>
          <View style={styles.button}>
            <PrimaryButton onPress={handleOnResetNumber}>Reset</PrimaryButton>
          </View>
          <View style={styles.button}>
            <PrimaryButton onPress={handleOnConfirmButtonClick}>
              Confirm
            </PrimaryButton>
          </View>
        </View>
      </Card>
    </View>
  );
}

const styles = StyleSheet.create({
  inputBox: {
    color: "#ddb52f",
    width: 50,
    fontSize: 30,
    borderBottomWidth: 5,
    borderBottomColor: "#ddb52f",
    padding: 5,
    fontWeight: "600",
    textAlign: "center",
  },
  rootContainer: {
    marginTop: 100,
    alignItems: "center",
  },
  titleInstruction: {
    color: "#ddb52f",
    fontSize: 22,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    padding: 5,
  },
  button: {
    flex: 1,
  },
});

export default StartGameScreen;
