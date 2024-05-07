import {
    Text,
    SafeAreaView,
    View,
    StyleSheet,
    Platform,
    FlatList,
    Pressable,
  } from "react-native";
import BlogDetail from "../../components/blogDetail";
import ShareButton from "../../components/shareButton";

export default function BlogDetailPage({route}) {
    const {slug} = route.params;
    const content = `https://blog-application-next-js-ten.vercel.app/blog/s/${slug}`
  return (
    <View style={styles.container}>
        <ShareButton content={content}/>
    <BlogDetail slug = {slug} />
    </View>
    
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F3D0D7",
    padding: 20,
  },
});
