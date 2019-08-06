import React, { Component } from "react";
import { View, Text, Button, StyleSheet, ImageBackground } from "react-native";

import startMainTabs from "../MainTabs/startMainTabs";
import DefaultInput from "../../components/UI/DefaultInput/DefaultInput";
import HeadingText from "../../components/UI/HeadingText/HeadingText";
import MainText from "../../components/UI/MainText/MainText";
import ButtonWithBackground from "../../components/UI/ButtonWithBackground/ButtonWithBackground";

import backgroundImage from "../../assets/background.jpg";

class AuthScreen extends Component {
  loginHandler = () => {
    startMainTabs();
  };

  render() {
    return (
      <ImageBackground source={backgroundImage} style={styles.backgroundImage}>
        <View style={styles.container}>
          <MainText>
            <HeadingText>Please Log In</HeadingText>
          </MainText>
          <ButtonWithBackground
            backgroundColor="#3a89ed"
            color="white"
            onPress={() => alert("Hello")}
          >
            Switch to Login
          </ButtonWithBackground>
          <View style={styles.inputContainer}>
            <DefaultInput placeholder="Your E-mail Address" style={styles.input} />
            <DefaultInput placeholder="Password" style={styles.input} />
            {/* możemy wstawiać kolejne style jako element tabelii */}
            {/* <DefaultInput placeholder="Password" style={[styles.input, { borderColor: "red" }]} /> */}
            <DefaultInput placeholder="Confirm Password" style={styles.input} />
          </View>
          <ButtonWithBackground
            backgroundColor="#3a89ed"
            color="white"
            onPress={this.loginHandler}
          >
            Submit
          </ButtonWithBackground>
        </View>
      </ImageBackground>
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
  },
  backgroundImage: {
    width: "100%",
    flex: 1
  }
});

export default AuthScreen;
