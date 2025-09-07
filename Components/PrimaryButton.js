import { View, Text, StyleSheet, Pressable } from "react-native";

function PrimaryButton({ children, onPress }) {
  return (
    <View>
      <Pressable
        android_ripple={{ color: "#640233" }}
        style={({ pressed }) =>
          pressed
            ? [styles.buttonContainer, styles.pressed]
            : styles.buttonContainer
        }
        onPress={onPress}
      >
        <Text style={styles.buttonText}>{children}</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  buttonContainer: {
    backgroundColor: "#510b2eff",
    flexDirection: "row",
    justifyContent: "center",
    borderRadius: 10,
    padding: 10,
    margin: 4,
  },
  buttonText: {
    color: "white",
  },
  pressed: {
    opacity: 0.75,
  },
});
export default PrimaryButton;
