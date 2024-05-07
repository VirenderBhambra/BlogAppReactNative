import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { AntDesign } from '@expo/vector-icons';

const AboutPage = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.description}>
        Welcome to my React Native Blog application! 
      </Text>
      <Text style={styles.description}>
        My mission is to create intuitive and user-friendly experiences that
        enhance productivity, creativity, and connectivity for our users.
      </Text>
      <Text style={styles.description}>
        This application is developed with React Native, a powerful framework
        for building cross-platform mobile apps using JavaScript and React.
      </Text>
      <Text style={styles.description}>
        Thank you for choosing our app. I hope you enjoy using it as much as
        I enjoyed creating it!
      </Text>
      <Text style={styles.description}>Created with <AntDesign name="heart" size={24} color="red" /> by Virender Bhambra</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#242424',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  description: {
    fontSize: 16,
    marginBottom: 10,
    textAlign: 'center',
    color: '#fff',
  },
});

export default AboutPage;
