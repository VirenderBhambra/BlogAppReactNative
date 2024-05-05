import { Text, SafeAreaView , View , StyleSheet, Platform} from 'react-native'

export default function Home(){
    return (
        <SafeAreaView style = {styles.container}>
            <Text>Home</Text>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#484848",
      padding:10,
    },
  });