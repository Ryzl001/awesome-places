import React, { Component } from "react";
import { View, Text, Button, StyleSheet, TextInput } from "react-native";

import startMainTabs from "../MainTabs/startMainTabs";
import DefaultInput from "../../components/UI/DefaultInput/DefaultInput";
import HeadingText from "../../components/UI/HeadingText/HeadingText";

class AuthScreen extends Component {
  loginHandler = () => {
    startMainTabs();
  };

  render() {
    return (
      <View style={styles.container}>
        <HeadingText>Please Log In</HeadingText>
        <Button title="Switch to Login" />
        <View style={styles.inputContainer}>
          <DefaultInput placeholder="Your E-mail Address" style={styles.input} />
          <DefaultInput placeholder="Password" style={styles.input} />
          {/* możemy wstawiać kolejne style jako element tabelii */}
          {/* <DefaultInput placeholder="Password" style={[styles.input, { borderColor: "red" }]} /> */}
          <DefaultInput placeholder="Confirm Password" style={styles.input} />
        </View>
        <Button title="Submit" onPress={this.loginHandler} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    // flex 1 rozciąga element na cały dostępny obszar
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
    // borderColor: "red",
    // borderWidth: 1
  },
  inputContainer: {
    width: "80%"
  },
  input: {
    backgroundColor: "#eee",
    borderColor: "#bbb"
  }
});

export default AuthScreen;
