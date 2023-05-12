// import { Provider } from 'redux';
// import { Loginstore } from '../constants/Redux/store/store.js';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Signup } from '../components/Signup/Signup.js'
import { Login } from '../components/Login/Login.js'
import {Profile} from '../components/Profile/profile.js'
import 'react-native-gesture-handler';
import AsyncStorage from '@react-native-async-storage/async-storage';


// import 'expo-router/_entry'
const Stack = createStackNavigator();


export default function Routes() {
    let username = AsyncStorage.getItem('@username')
    let password = AsyncStorage.getItem('@password')
    return (
        // <Provider store={Loginstore}>
        <NavigationContainer>
            <Stack.Navigator>
                {
                    username && password ? 
                    <Stack.Screen name="Profile" component={Profile} options={{ headerShown: false }} />
                    :
                    <Stack.Screen name="Login" component={Login} options={{ headerShown: false }} />
                }
        
                <Stack.Screen name="Signup" component={Signup} options={{ headerShown: false }} />
              
            </Stack.Navigator>
        </NavigationContainer>
        // </Provider>


    )
}




