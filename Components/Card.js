import { View, StyleSheet } from "react-native";

function Card({ children }) {
  return <View style={styles.card}>{children}</View>;
}

const styles = StyleSheet.create({
  card: {
    fontFamily: "roboto-regular",
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
});

export default Card;
