import React from "react";
import { createNavigatorFactory } from "@react-navigation/native";

const Stack = createNavigatorFactory();

export default () => (
  <Stack.Navigator>
    <Stack.Screen name="Preload" component={Preload} />
    <Stack.Screen name="SigIn" component={SigIn} />
    <Stack.Screen name="SigUp" component={SigUp} />
  </Stack.Navigator>
);
