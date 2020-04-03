import React from "react";
import { Platform } from "react-native";
import { createStackNavigator } from "react-navigation-stack";
import { createBottomTabNavigator } from "react-navigation-tabs";
import Icon from "react-native-vector-icons/Feather";
import HomeScreen from "../screens/HomeScreen";
import LinksScreen from "../screens/LinksScreen";
import SettingsScreen from "../screens/SettingsScreen";
import SearchScreen from "../screens/SearchScreen";
import HeartScreen from "../screens/HeartScreen";
import { createDrawerNavigator } from "react-navigation-drawer";
import CustomDrawerContentComponent from "../components/DrawerNavigator/DrawNavigator";
import CameraComponent from "../components/HomeScreenComponents/Camera";
import SendScreen from "../components/SendScreen";
import Archieve from "../components/DrawerNavigatorComponents/Archive";
import Saved from "../components/DrawerNavigatorComponents/Saved";
import CloseFriend from "../components/DrawerNavigatorComponents/CloseFriend";
import Discover from "../components/DrawerNavigatorComponents/DiscoverPeople";

import IGTV from "../components/HomeScreenComponents/IGTVScreen";
import CommentsScreen from "../components/HomeScreenComponents/CommentsScreen";
const config = Platform.select({
  web: { headerMode: "screen" },
  default: {}
});

const HomeStack = createStackNavigator(
  {
    Home: HomeScreen,
    CameraScreen: CameraComponent,
    IGTVScreen: IGTV,
    Send: SendScreen,
    Comment: CommentsScreen
  },
  config
);

HomeStack.navigationOptions = {
  tabBarLabel: "Home",
  tabBarIcon: ({ focused }) => (
    <Icon name="home" focused={focused} style={{ fontSize: 30 }} />
  )
};

HomeStack.path = "";

const HeartStack = createStackNavigator(
  {
    Heart: HeartScreen
  },
  config
);

HeartStack.navigationOptions = {
  tabBarLabel: "Activity",
  tabBarIcon: ({ focused }) => (
    <Icon name="heart" focused={focused} style={{ fontSize: 30 }} />
  )
};

HeartStack.path = "";

const SearchStack = createStackNavigator(
  {
    Home: SearchScreen
  },
  config
);

SearchStack.navigationOptions = {
  tabBarLabel: "Search",
  tabBarIcon: ({ focused }) => (
    <Icon name="search" focused={focused} style={{ fontSize: 30 }} />
  )
};

SearchStack.path = "";

const LinksStack = createStackNavigator(
  {
    Links: LinksScreen,
    Saved: Saved,
    CloseFriend: CloseFriend,
    Archieve: Archieve,
    Discover: Discover
  },
  config
);

LinksStack.navigationOptions = {
  tabBarLabel: "Profile",
  tabBarIcon: ({ focused }) => <Icon name="user" style={{ fontSize: 30 }} />
};

LinksStack.path = "";

const SettingsStack = createStackNavigator(
  {
    Settings: SettingsScreen
  },
  config
);
SettingsStack.navigationOptions = {
  tabBarLabel: "Add",
  tabBarIcon: ({ focused }) => (
    <Icon name="plus-circle" style={{ fontSize: 30 }} />
  )
};
SettingsStack.path = "";
const tabNavigator = createBottomTabNavigator(
  {
    HomeStack,
    SearchStack,
    SettingsStack,
    HeartStack,
    LinksStack
  },
  {
    tabBarOptions: {
      tabStyle: {
        alignItems: "center",
        justifyContent: "center"
      },
      style: {
        backgroundColor: "white",
        height: 55
      },
      statusBarStyle: "black"
    }
  }
);
tabNavigator.path = "";

const DashboardStackNavigator = createStackNavigator(
  {
    DashboardTabNavigator: tabNavigator
  },
  {
    defaultNavigationOptions: ({ navigation }) => {
      return {
        header: null
      };
    }
  }
);

const AppDrawerNavigator = createDrawerNavigator(
  {
    Dashboard: DashboardStackNavigator
    // SearchScreen: SearchScreen
  },
  {
    drawerWidth: 200,
    drawerPosition: "right",
    drawerType: "slide",
    contentComponent: CustomDrawerContentComponent,
    contentOptions: {
      activeTintColor: "black",
      itemsContainerStyle: {
        marginVertical: 0
      },
      iconContainerStyle: {
        opacity: 1
      }
    }
  }
);

export default AppDrawerNavigator;
