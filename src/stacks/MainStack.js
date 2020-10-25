import React from "react";
import { createNavigatorFactory } from "@react-navigation/native";
import Preload from "../screens/Preload";
import SigIn from "../screens/SigIn";
import SigUp from "../screens/SigUp";
const Stack = createNavigatorFactory();

export default () => (
  <Stack.Navigator>
    screenOptions=
    {{
      headerShow: false,
    }}
    <Stack.Screen name="Preload" component={Preload} />
    <Stack.Screen name="SigIn" component={SigIn} />
    <Stack.Screen name="SigUp" component={SigUp} />
  </Stack.Navigator>
);
