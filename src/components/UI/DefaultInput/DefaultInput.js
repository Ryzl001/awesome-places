import React from "react";
import { TextInput, StyleSheet } from "react-native";

const DefaultInput = props => (
  <TextInput
    // placeholder={props}
    underlineColorAndroid="transparent"
    // dzięki temu przypisujemy wszystkie propsy przesłane do tego componentu
    {...props}
    // style pod ...props nie zostaną zastapione przez te dodatkowe
    // dodatkowe żeby działały muszą być dodane po przecinku w tablicy
    style={[styles.input, props.style]}
  />
);

const styles = StyleSheet.create({
  input: {
    width: "100%",
    borderWidth: 1,
    borderColor: "#eee",
    padding: 5,
    margin: 8
  }
});

export default DefaultInput;
