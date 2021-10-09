import React from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import { createAppContainer } from "react-navigation";
import { createBottomTabNavigator } from "react-navigation-tabs";
import WriteStoryScreen from "./screens/WriteStoryScreen";
import ReadStoryScreen from "./screens/ReadStoryScreen";

export default class App extends React.Component {
  render() {
    return <AppContainer />;
  }
}

const TabNavigator = createBottomTabNavigator(
  {
    WriteStory: WriteStoryScreen,
    ReadStory: ReadStoryScreen,
  },
  {
    defaultNavigationOptions: ({ navigation }) => ({
      tabBarIcon: () => {
        routeName;
        //  const routeName = navigation.routeName;
        const routeName = navigation.state.routeName;
        //  const routeName = navigation.state;
        //  const routeName = state.routeName.navigation;

        if (routeName === "WriteStory") {
          return (
            <Image
              // source={require("assets/write.png")}
              // source={require("./write.png")}
              source={require("./assets/write.png")}
              // source={require("write.png")}
              style={{ width: 40, height: 40 }}
            />
          );
        } else if (routeName === "ReadStory") {
          return (
            <Image
              // source={require("./read.png")}
              // source={require("read.png")}
              // source={require("./assets")}
              source={require("./assets/read.png")}
              style={{ width: 40, height: 40 }}
            />
          );
        }
      },
    }),
  }
);

const AppContainer = createAppContainer(TabNavigator);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
