import React from "react";
import {
  Text,
  SafeAreaView,
  View,
  StyleSheet,
  Platform,
  Image,
} from "react-native";
import { FontAwesome6 } from "@expo/vector-icons";
import { FontAwesome5 } from "@expo/vector-icons";
import BlogDetail from "../components/blogList";

export default function Home() {
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Text style={styles.centerText}>
          <FontAwesome6 name="bolt-lightning" size={24} color="royalblue" />
          AWAKE
        </Text>
        <Text style={styles.centerSubText}>
          Discover <Text style={styles.blueText}>new</Text> stories and ideas...
        </Text>
        <Text style={styles.centerSubText}>
          Share with <Text style={styles.blueText}>everyone</Text>...
          <FontAwesome5
            name="smile"
            size={24}
            color="black"
            backgroundColor="yellow"
          />
        </Text>
      </View>
      <View style={styles.imageContainer}>
        <Image source={require("../images/img.jpg")} style={styles.image} />
      </View>

      <Text style={styles.leftSubText}>Recent Blogs</Text>
      <BlogDetail type="ften" />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    padding: 10,
  },
  centerText: {
    textAlign: "center",
    fontSize: 32,
    fontWeight: "bold",
    color: "#484848",
    fontFamily: Platform.OS === "ios" ? "Avenir" : "sans-serif-medium",
  },
  leftSubText: {
    fontSize: 20,
    color: "#484848",
    fontFamily: Platform.OS === "ios" ? "Avenir" : "sans-serif-medium",
    marginTop: 10,
    fontWeight: "bold",
  },
  centerSubText: {
    textAlign: "center",
    fontSize: 20,
    color: "#484848",
    fontFamily: Platform.OS === "ios" ? "Avenir" : "sans-serif-medium",
    marginTop: 10,
  },
  blueText: {
    color: "royalblue",
  },
  image: {
    width: "100%",
    height: 200,
    resizeMode: "cover",
    borderRadius: 10,
    marginBottom: 10,
  },
  imageContainer: {
    alignItems: "center",
    justifyContent: "center",
    marginTop: 20,
  },
});
