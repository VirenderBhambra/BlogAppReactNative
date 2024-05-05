import { Text, SafeAreaView , View , StyleSheet, Platform} from 'react-native'

export default function Home(){
    return (
        <SafeAreaView style = {styles.container}>
            <Text>Blog</Text>
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