import React, { Component } from "react";
import {
  View,
  Image,
  Text,
  Button,
  StyleSheet,
  TouchableOpacity,
  Platform,
  Dimensions
} from "react-native";
import { connect } from "react-redux";

import Icon from "react-native-vector-icons/Ionicons";
import { deletePlace } from "../../store/actions/index";

class PlaceDetail extends Component {
  state = {
    viewMode: Dimensions.get("window").height > 500 ? "portrait" : "landscape"
  };
  constructor(props) {
    super(props);
    Dimensions.addEventListener("change", this.updateStyles);
  }

  componentWillUnmount() {
    Dimensions.removeEventListener("change", this.updateStyles);
  }

  updateStyles = dims => {
    this.setState({
      viewMode: dims.window.height > 500 ? "portrait" : "landscape"
    });
  };

  placeDeletedHandler = () => {
    this.props.onDeletePlace(this.props.selectedPlace.key);
    this.props.navigator.pop();
  };

  render() {
    return (
      <View
        style={
          this.state.viewMode === "portrait"
            ? styles.portraitContainer
            : styles.landscapeContainer
        }
      >
        <View>
          <Image
            source={this.props.selectedPlace.image}
            style={
              this.state.viewMode === "portrait"
                ? styles.portraitPlaceImage
                : styles.landscapePlaceImage
            }
          />
        </View>
        <View style={styles.infoContainer}>
          <Text style={styles.placeName}>{this.props.selectedPlace.name}</Text>

          <TouchableOpacity onPress={this.placeDeletedHandler}>
            <View style={styles.deleteButton}>
              <Icon
                size={30}
                name={Platform.OS === "android" ? "md-trash" : "ios-trash"}
                color="red"
              />
            </View>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  portraitContainer: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "space-around",
    margin: 5
  },
  landscapeContainer: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    margin: 5
  },
  infoContainer: {
    flex: 1,
    height: "100%",
    flexDirection: "column",
    justifyContent: "space-around"
  },
  portraitPlaceImage: {
    width: "100%",
    height: 200
  },
  landscapePlaceImage: {
    width: 300,
    height: "100%"
  },
  placeName: {
    fontWeight: "bold",
    textAlign: "center",
    fontSize: 28
  },
  deleteButton: {
    alignItems: "center"
  }
});

const mapDispatchToProps = dispatch => {
  return {
    onDeletePlace: key => dispatch(deletePlace(key))
  };
};

export default connect(
  null,
  mapDispatchToProps
)(PlaceDetail);
