import {
  Text,
  SafeAreaView,
  View,
  StyleSheet,
  Platform,
} from "react-native";
import BlogList from "../../components/blogList";

export default function BlogListPage() {

  return (
    <SafeAreaView style={styles.container}>
      <BlogList type ="all"/>
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
});
