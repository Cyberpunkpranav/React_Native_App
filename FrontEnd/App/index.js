
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Signup } from '../components/Signup/Signup.js'
import { Login } from '../components/Login/Login.js'
import 'react-native-gesture-handler';
// import 'expo-router/_entry'
const Stack = createStackNavigator();
export default function Routes() {
    return (
        <NavigationContainer>
            <Stack.Navigator>
                <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
                <Stack.Screen name="Signup" component={Signup} options={{ headerShown: false }} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}




