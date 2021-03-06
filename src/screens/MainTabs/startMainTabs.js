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
              id: "sideDrawerToggle",
              title: "Menu",
              icon: menu
              // buttonColor: "blue",
              // component: "awesome-places.CustomButton",
              // passProps: {
              //   iconName: "ios-trash"
              // },
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
              id: "sideDrawerToggle",
              title: "Menu",
              icon: menu
              // component: "awesome-places.CustomButton",
              // passProps: {
              //   iconName: "ios-trash"
              // },
              // buttonColor: "blue",
              // buttonFontSize: 14
            }
          ]
        }
      }
    ],
    tabsStyle: {
      tabBarBackgroundColor: "#551A8B"
    },
    drawer: {
      left: {
        screen: "awesome-places.SideDrawer"
      },
      type: "TheSideBar",
      animationType: "airbnb"
    },
    appStyle: {
      tabBarSelectedButtonColor: "#ff9900"
      // tabBarButtonColor: "#ffff00",
      // navBarComponentAlignment: "fill",
      // navBarTextFontSize: 18
    }
  });
  // });
};

export default startTabs;
