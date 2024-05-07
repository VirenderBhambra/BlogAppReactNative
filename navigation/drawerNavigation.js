import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createDrawerNavigator } from "@react-navigation/drawer";
import Home from "../pages/Home";
import About from "../pages/About";
import { Entypo , FontAwesome5 } from "@expo/vector-icons";
import BlogStack from "../navigation/stackNavigator";
import BlogDetail from "../components/blogList";
const Drawer = createDrawerNavigator();

export default function Navigation() {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        screenOptions={{
          drawerContentStyle: {
            borderColor: "red",
            backgroundColor: "#242435",
          },
          drawerActiveTintColor: "green",
          drawerInactiveTintColor: "white",
        }}
      >
        <Drawer.Screen
          name="Home"
          component={Home}
          options={{
            drawerLabel: "Home",
            drawerIcon: ({ focused, color, size }) => (
              <Entypo
                name={focused ? "home" : "home"}
                color={color}
                size={size}
              />
            ),
            headerTintColor: "royalblue",
            
          }}
        />
        <Drawer.Screen
          name="Blogs"
          component={BlogStack}
          options={{
            drawerIcon: ({ focused, color, size }) => (
              <FontAwesome5
                name={focused ? "blogger-b" : "blogger-b"}
                color={color}
                size={size}
              />
            ),
            headerTintColor: "royalblue",
          }}
        />
        <Drawer.Screen
          name="About"
          component={About}
          options={{
            drawerLabel: "About",
            drawerIcon: ({ focused, color, size }) => (
              <FontAwesome5
                name={focused ? "info-circle" : "info-circle"}
                color={color}
                size={size}
              />
            ),
            headerTintColor: "white",
            headerStyle: {
              backgroundColor: "black", 
            },
          }}
        />
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
