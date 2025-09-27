import { View, Text, StyleSheet } from "react-native";
function GuessLogItem({ roundNumber, guess }) {
  return (
    <View style={styles.listItem}>
      <Text style={styles.itemText}>#{roundNumber}</Text>
      <Text style={styles.itemText}>Opponent's Guess: {guess}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  listItem: {
    borderColor: "#ddb52f",
    borderWidth: 1,
    flexDirection: "row",
    backgroundColor: "yellow",
    borderRadius: 15,
    justifyContent: "space-between",
    marginTop: 10,
    padding: 20,
  },
  itemText: {
    fontFamily: "roboto-regular",
  },
});

export default GuessLogItem;
