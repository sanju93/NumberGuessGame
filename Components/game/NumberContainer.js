import { Text, View, StyleSheet } from "react-native";

function NumberContainer({ children }) {
  return (
    <View style={styles.numberContainer}>
      <Text style={styles.numberText}>{children}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  numberContainer: {
    justifyContent: "center",
    alignItems: "center",
    borderColor: "#ddb52f",
    borderWidth: 2,
    padding: 22,
    margin: 22,
  },
  numberText: {
    color: "#ddb52f",
    fontSize: 36,
    fontFamily: "roboto-bold",
  },
});

export default NumberContainer;
