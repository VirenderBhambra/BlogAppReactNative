import React, { useEffect, useState } from "react";
import { ScrollView, StyleSheet, Platform, RefreshControl } from "react-native";
import axios from "axios";
import HTML from "react-native-render-html";
import AsyncStorage from '@react-native-async-storage/async-storage';

export default function BlogDetail({ slug }) {
  const [blog, setBlog] = useState(null);
  const [refreshing, setRefreshing] = useState(false);

  async function fetchData(forced) {
    try {
      setRefreshing(true); // Set refreshing state to true when fetching data

      const cachedData = await AsyncStorage.getItem(`blog_${slug}`);
      if (cachedData && !forced) {
        const { data, timestamp } = JSON.parse(cachedData);
        const currentTime = Date.now();
        // Check if the cached data is not older than 10 min
        if (currentTime - timestamp < 10 * 1000) {
          setBlog(data);
          setRefreshing(false); // Set refreshing state to false after data is fetched
          return;
        }
      }
      const response = await axios.get(
        `https://blog-application-express-server.onrender.com/blog/s/${slug}`
      );
      const responseData = response.data;
      
      // Save data along with timestamp to cache
      await AsyncStorage.setItem(`blog_${slug}`, JSON.stringify({ data: responseData, timestamp: Date.now() }));

      setBlog(responseData);
      setRefreshing(false); // Set refreshing state to false after data is fetched
    } catch (error) {
      console.error("Error fetching data:", error);
      setRefreshing(false); // Set refreshing state to false if there's an error
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

  const handleRefresh = () => {
    fetchData(true);
  };

  return (
    <ScrollView
      style={styles.blogView}
      refreshControl={
        <RefreshControl
          refreshing={refreshing}
          onRefresh={handleRefresh}
        />
      }
    >
      {blog && (
        <>
          <HTML source={{ html: blog.title }} contentWidth={500} />
          <HTML source={{ html: blog.content }} contentWidth={500} />
          <HTML source={{ html: blog.hashtags }} contentWidth={500} />
        </>
      )}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F3D0D7",
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
  blogView: {
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
