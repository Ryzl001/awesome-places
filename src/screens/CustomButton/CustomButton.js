import react from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

import Icon from "react-native-vector-icons/Ionicons";

const CustomButton = () => {
  return (
    <TouchableOpacity
      style={[styles.button, { backgroundColor: "tomato" }]}
      onPress={() => console.log("pressed me!")}
    >
      <View style={styles.button}>
        <Text style={{ color: "white" }}>
          <Icon size={30} name="ios-trash" color="red" />
        </Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    overflow: "hidden",
    width: 34,
    height: 34,
    borderRadius: 34 / 2,
    justifyContent: "center",
    alignItems: "center"
  }
});

export default CustomButton;
