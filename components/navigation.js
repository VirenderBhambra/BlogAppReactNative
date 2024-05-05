import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import Home from "../pages/Home";
import Blog from "../pages/Blog";
import About from "../pages/About";
const Drawer = createDrawerNavigator();
export default function Navigation() {
  return (
    <NavigationContainer>
      <Drawer.Navigator screenOptions={{
        drawerContentStyle:{
            borderColor:'red',
            backgroundColor:'#242435',
        },
        drawerActiveTintColor:'green',
        drawerInactiveTintColor:'white',
      }}
      >
        <Drawer.Screen
          name="Home"
          component={Home}
          options={{
            headerTintColor: "royalblue",     
          }}
        />
        <Drawer.Screen name="Blog" component={Blog} />
        <Drawer.Screen name="About" component={About} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
