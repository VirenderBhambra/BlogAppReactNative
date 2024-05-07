import React, { useEffect, useState } from "react";
import {
  Text,
  SafeAreaView,
  View,
  StyleSheet,
  Platform,
  FlatList,
  Pressable,
} from "react-native";
import axios from "axios";
import HTML from "react-native-render-html";
import { useNavigation } from '@react-navigation/native';

export default function BlogList({ type }) {
  const [blogs, setBlogs] = useState(null);
  const [refreshing, setRefreshing] = useState(false);
  const navigation = useNavigation();

  async function fetchData() {
    try {
      setRefreshing(true); // Set refreshing state to true when fetching data

      const response = await axios.get(`https://blog-application-express-server.onrender.com/blog/${type}`);
      setBlogs(response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setRefreshing(false); // Set refreshing state to false after data is fetched
    }
  }

  function handlePress(slug) {
    type ==="ften" ?navigation.navigate('Blogs', { screen: 'BlogDetail' ,params: {slug}}):
    navigation.navigate("BlogDetail", { slug });
  }

  useEffect(() => {
    fetchData();
  }, []);

  const Item = React.memo(({ id, title, description, author, slug }) => {
    return (
      <Pressable onPress={() => handlePress(slug)}>
        <View style={[styles.blog, { backgroundColor: '#F3D0D7' }]}>
          <HTML source={{ html: title }} contentWidth={500} />
          <HTML source={{ html: description }} contentWidth={500} />
          <Text>...</Text>
          <Text style={{ fontSize: 20 }}>
            <Text style={styles.leftSubText}>Author :</Text>
            {author}
          </Text>
        </View>
      </Pressable>
    );
  });

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.blogView}>
        <FlatList
          data={blogs}
          renderItem={({ item }) => (
            <Item
              id={item._id}
              title={item.title}
              description={item.description}
              author={item.author}
              slug={item.slug}
            />
          )}
          refreshing={refreshing}
          onRefresh={fetchData}
          keyExtractor={(item) => item._id}
          getItemLayout={(data, index) => ({
            length: 120, // Specify the height of each item
            offset: 120 * index,
            index,
          })}
        />
      </View>
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
    color: "#black",
    fontFamily: Platform.OS === "ios" ? "Avenir" : "sans-serif-medium",
  },
  leftSubText: {
    fontSize: 20,
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
  blogView: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    padding: 5,
    flex: 1,
  },
  blog: {
    borderWidth: 1,
    elevation: 4,
    borderRadius: 10,
    padding: 10,
    width: "100%",
    marginBottom: 10,
  },
});
