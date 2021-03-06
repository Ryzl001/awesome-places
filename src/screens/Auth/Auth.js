import React, { Component } from "react";
import { View, Text, Button, StyleSheet, ImageBackground, Dimensions } from "react-native";

import startMainTabs from "../MainTabs/startMainTabs";
import DefaultInput from "../../components/UI/DefaultInput/DefaultInput";
import HeadingText from "../../components/UI/HeadingText/HeadingText";
import MainText from "../../components/UI/MainText/MainText";
import ButtonWithBackground from "../../components/UI/ButtonWithBackground/ButtonWithBackground";

import backgroundImage from "../../assets/background.jpg";

class AuthScreen extends Component {
  state = {
    viewMode: Dimensions.get("window").height > 500 ? "portrait" : "landscape"
    // respStyles: {
    // pwContainerDirection: "column",
    // pwContainerJustifyContent: "flex-start",
    // pwWrapperWidth: "100%"
    // }
  };

  constructor(props) {
    super(props);
    Dimensions.addEventListener("change", this.updateStyles);

    // if (dims.window.height < 500) {
    //   this.setState({
    //     respStyles: {
    //       pwContainerDirection: "row",
    //       pwContainerJustifyContent: "space-between",
    //       pwWrapperWidth: "49.5%"
    //     }
    //   });
    // } else {
    //   this.setState({
    //     respStyles: {
    //       pwContainerDirection: "column",
    //       pwContainerJustifyContent: "flex-start",
    //       pwWrapperWidth: "100%"
    //       // pwContainerDirection: Dimensions.get("window").height > 500 ? "column" : "row",
    //       // pwContainerJustifyContent:
    //       //   Dimensions.get("window").height > 500 ? "flex-start" : "space-between",
    //       // pwWrapperWidth: Dimensions.get("window").height > 500 ? "100%" : "49.5%"
    //     }
    //   });
    // }

    // this.setState({
    //   respStyles: {
    //     pwContainerDirection: Dimensions.get("window").height > 500 ? "column" : "row",
    //     pwContainerJustifyContent:
    //       Dimensions.get("window").height > 500 ? "flex-start" : "space-between",
    //     pwWrapperWidth: Dimensions.get("window").height > 500 ? "100%" : "49.5%"
    //   }
    // });
    // });
  }

  componentWillUnmount() {
    Dimensions.removeEventListener("change", this.updateStyles);
  }

  updateStyles = dims => {
    this.setState({
      viewMode: dims.window.height > 500 ? "portrait" : "landscape"
    });
  };

  loginHandler = () => {
    startMainTabs();
  };

  render() {
    let headintText = null;
    // console.log(Dimensions.get("window"));
    if (this.state.viewMode === "portrait") {
      headintText = (
        <MainText>
          <HeadingText>Please Log In</HeadingText>
        </MainText>
      );
    }
    return (
      <ImageBackground source={backgroundImage} style={styles.backgroundImage}>
        <View style={styles.container}>
          {headintText}
          <ButtonWithBackground
            backgroundColor="#3a89ed"
            color="white"
            onPress={() => alert("Hello")}
          >
            Switch to Login
          </ButtonWithBackground>
          <View style={styles.inputContainer}>
            <DefaultInput placeholder="Your E-mail Address" style={styles.input} />
            <View
              style={
                this.state.viewMode === "portrait"
                  ? styles.portraitPasswordContainer
                  : styles.landscapePasswordContainer
              }
            >
              <View
                style={
                  this.state.viewMode === "portrait"
                    ? styles.portraitPasswordWrapper
                    : styles.landscapePasswordWrapper
                }
              >
                <DefaultInput placeholder="Password" style={styles.input} />
              </View>
              {/* możemy wstawiać kolejne style jako element tabelii */}
              {/* <DefaultInput placeholder="Password" style={[styles.input, { borderColor: "red" }]} /> */}
              <View
                style={
                  this.state.viewMode === "portrait"
                    ? styles.portraitPasswordWrapper
                    : styles.landscapePasswordWrapper
                }
              >
                <DefaultInput placeholder="Confirm Password" style={styles.input} />
              </View>
            </View>
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
  },
  landscapePasswordContainer: {
    flexDirection: "row",
    justifyContent: "space-between"
  },
  portraitPasswordContainer: {
    flexDirection: "column",
    justifyContent: "flex-start"
  },
  landscapePasswordWrapper: {
    width: "49.5%"
  },
  portraitPasswordWrapper: {
    width: "100%"
  }
});

export default AuthScreen;
