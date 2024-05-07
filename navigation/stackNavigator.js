import 'react-native-gesture-handler';
import BlogListPage from '../pages/blog/blogListPage';
import BlogDetailPage from '../pages/blog/blogDetailPage';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

export default function BlogStack() {
    return (
      <Stack.Navigator>
        <Stack.Screen name="BlogList" component={BlogListPage}  options={{ headerShown: false }}/>
        <Stack.Screen name="BlogDetail" component={BlogDetailPage} options={{ headerShown: false }}/>
      </Stack.Navigator>
    );
  };