import { Text, SafeAreaView , View , StyleSheet, Platform} from 'react-native'

export default function About(){
    return (
        <SafeAreaView style = {styles.container}>
            <Text>About me</Text>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#fff",
      padding:10,
    },
  });