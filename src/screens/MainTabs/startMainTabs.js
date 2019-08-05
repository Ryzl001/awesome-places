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
    tabs: [
      {
        screen: "awesome-places.FindPlaceScreen",
        label: "Find Place",
        title: "Find Place",
        icon: map,
        navigatorButtons: {
          leftButtons: [
            {
              icon: menu,
              title: "Menu"
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
          leftButtons: [
            {
              icon: menu,
              title: "Menu"
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
  });
  // });
};

export default startTabs;
