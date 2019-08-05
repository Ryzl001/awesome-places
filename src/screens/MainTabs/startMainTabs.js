import { Navigation } from "react-native-navigation";
import Icon from "react-native-vector-icons/Ionicons";

import share from "../../assets/share.png";
import map from "../../assets/map.png";
import menu from "../../assets/menu.png";

const startTabs = () => {
  // Promise.all([
  //     Icon.getImageSource("md-map", 30),
  //     Icon.getImageSource("ios-share-alt", 30)
  // ]).then(sources => {
  Navigation.startTabBasedApp({
    appStyle: {
      // navBarButtonColor: "#000eee",
      // navBarBackgroundColor: "#eee000"
    },
    tabs: [
      {
        screen: "awesome-places.FindPlaceScreen",
        label: "Find Place",
        title: "Find Place",
        icon: map,
        navigatorButtons: {
          rightButtons: [
            {
              // buttonColor: "blue",
              icon: menu,
              // component: "awesome-places.CustomButton",
              // passProps: {
              //   iconName: "ios-trash"
              // },
              // title: "Menu",
              id: "sideDrawerToggle"
              // buttonColor: "blue",
              // buttonFontSize: 14
            }
          ]
        }
      },
      {
        screen: "awesome-places.SharePlaceScreen",
        label: "Share Place",
        title: "Share Place",
        icon: share,
        navigatorButtons: {
          rightButtons: [
            {
              icon: menu,
              // component: "awesome-places.CustomButton",
              // passProps: {
              //   iconName: "ios-trash"
              // },
              title: "Menu",
              id: "sideDrawerToggle"
              // buttonColor: "blue",
              // buttonFontSize: 14
            }
          ]
        }
      }
    ],
    drawer: {
      left: {
        screen: "awesome-places.SideDrawer"
      }
    }
    // appStyle: {
    //   // tabBarButtonColor: "#ffff00",
    //   navBarComponentAlignment: "fill",
    //   navBarTextFontSize: 18
    // }
  });
  // });
};

export default startTabs;
