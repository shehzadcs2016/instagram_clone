// import React from "react";
import { createAppContainer, createSwitchNavigator } from "react-navigation";
import MainTabNavigator from "./MainTabNavigator";
import drawer from "../components/DrawerNavigator/DrawNavigator";
export default createAppContainer(
  createSwitchNavigator({
    // You could add another route here for authentication.
    // Read more at https://reactnavigation.org/docs/en/auth-flow.html
    Main: MainTabNavigator
    // drawer: drawer
    // Root: RootStack
  })
);
