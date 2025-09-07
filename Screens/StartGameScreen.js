import { View, TextInput, StyleSheet, Alert } from "react-native";
import PrimaryButton from "../Components/PrimaryButton";
import { useState } from "react";

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
    <View style={styles.inputContainer}>
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
    </View>
  );
}

const styles = StyleSheet.create({
  inputContainer: {
    backgroundColor: "#720636",
    marginTop: 100,
    marginLeft: 20,
    marginRight: 20,
    padding: 15,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 5,
    shadowColor: "black",
    shadowOpacity: 1,
    shadowRadius: 10,
    shadowOffset: { width: 10, height: 10 },
    elevation: 5,
  },
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
