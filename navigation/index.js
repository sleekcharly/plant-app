import React from "react";
import { Image } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import Welcome from "../screens/Welcome";
import Login from "../screens/Login";
import Signup from "../screens/Signup";
import Forgot from "../screens/Forgot";
import Explore from "../screens/Explore";
import Browse from "../screens/Browse";
import Product from "../screens/Product";
import Settings from "../screens/Settings";

import { theme } from "../constants";

import { Button } from "../components";
import * as Icon from "@expo/vector-icons";

function WelcomeScreen({ navigation }) {
  return <Welcome navigation={navigation} />;
}

function LoginScreen({ navigation }) {
  return <Login navigation={navigation} />;
}

function SignupScreen({ navigation }) {
  return <Signup navigation={navigation} />;
}

function ForgotScreen({ navigation }) {
  return <Forgot navigation={navigation} />;
}

function ExploreScreen({ navigation }) {
  return <Explore navigation={navigation} />;
}

function BrowseScreen({ navigation }) {
  return <Browse navigation={navigation} />;
}

function ProductScreen({ navigation }) {
  return <Product navigation={navigation} />;
}

function SettingsScreen({ navigation }) {
  return <Settings navigation={navigation} />;
}

const Stack = createStackNavigator();

function MyStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          height: theme.sizes.base * 4,
          backgroundColor: theme.colors.white,
          borderBottomColor: "transparent",
          elevation: 0, // for android
        },
        headerBackImage: () => (
          <Image source={require("../assets/icons/back.png")} />
        ),
        headerBackTitle: null,
        headerLeftContainerStyle: {
          alignItems: "center",
          marginLeft: theme.sizes.base * 2,
          paddingRight: theme.sizes.base,
        },
        headerRightContainerStyle: {
          alignItems: "center",
          paddingRight: theme.sizes.base,
        },
      }}
    >
      <Stack.Screen
        options={{ title: "" }}
        name="Welcome"
        component={WelcomeScreen}
      />
      <Stack.Screen
        name="Login"
        component={LoginScreen}
        options={{ title: "" }}
      />
      <Stack.Screen
        name="Signup"
        component={SignupScreen}
        options={{ title: "" }}
      />
      <Stack.Screen
        name="Forgot"
        component={ForgotScreen}
        options={{ title: "" }}
      />
      <Stack.Screen
        name="Browse"
        component={BrowseScreen}
        options={{ title: "" }}
      />
      <Stack.Screen
        name="Settings"
        component={SettingsScreen}
        options={{ title: "" }}
      />
      <Stack.Screen
        name="Explore"
        component={ExploreScreen}
        options={{ title: "" }}
      />
      <Stack.Screen
        name="Product"
        component={ProductScreen}
        options={{
          title: "",
          headerRight: () => (
            <Button onPress={() => {}}>
              <Icon.Entypo
                name="dots-three-horizontal"
                color={theme.colors.gray}
              />
            </Button>
          ),
        }}
      />
    </Stack.Navigator>
  );
}

export default function Navigation() {
  return (
    <NavigationContainer>
      <MyStack />
    </NavigationContainer>
  );
}
