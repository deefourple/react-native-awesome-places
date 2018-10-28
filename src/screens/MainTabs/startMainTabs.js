import { Navigation } from 'react-native-navigation';


const startTabs = () => {
  Navigation.startTabBasedApp({
    tabs: [
      {
        screen: 'awesome-places.FindPlaceScreen',
        label: 'Find Place',
        title: 'Find Place',
        navigatorButtons: {
          leftButtons: [
            {
              title: "Menu",
              id: "sideDrawerToggle"
            }
          ]
        }
      },
      {
        screen: 'awesome-places.SharePlaceScreen',
        label: 'Share Place',
        title: 'Share Place',
        navigatorButtons: {
          leftButtons: [
            {
              title: "Menu",
              id: "sideDrawerToggle"
            }
          ]
        }
      },
    ],
    drawer: {
      left: {
        screen: 'awesome-places.SideDrawer'
      }
    },
  });
};

export default startTabs;
