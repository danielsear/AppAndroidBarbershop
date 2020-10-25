import React from "react";
import { createNavigatorFactory } from "@react-navigation/native";
import Preload from "../screens/Preload";
import SigIn from "../screens/SignIn";
import SigUp from "../screens/SignUp";
import MainTab from "./MainTab";

const Stack = createNavigatorFactory();

export default () => (
  <Stack.Navigator>
    initialRouteName = "Preload" screenOptions=
    {{
      headerShow: false,
    }}
    <Stack.Screen name="Preload" component={Preload} />
    <Stack.Screen name="SigIn" component={SigIn} />
    <Stack.Screen name="SigUp" component={SigUp} />
    <Stack.Screen name="MainTab" component={MainTab} />
  </Stack.Navigator>
);
