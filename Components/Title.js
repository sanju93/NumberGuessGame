import { Text, StyleSheet } from "react-native";
function Title({ children }) {
  return <Text style={styles.title}>{children}</Text>;
}

const styles = StyleSheet.create({
  title: {
    fontSize: 24,
    color: "white",
    fontFamily: "roboto-bold",
    textAlign: "center",
    borderWidth: 2,
    borderColor: "white",
    padding: 5,
  },
});

export default Title;
