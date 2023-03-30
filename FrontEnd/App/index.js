import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import index from '../styles/indexstyle'
import { profile } from '../components/Profile/profile';
import { createStackNavigator } from '@react-navigation/stack';
import { Linking, Text, View, SafeAreaView, TextInput, Alert, Pressable } from 'react-native';

// import 'expo-router/_entry'
const Stack = createStackNavigator();

function Auth() {
    const [username, setusername] = useState()
    const [password, setpassword] = useState()
    console.log(username, password)
    return (
        <SafeAreaView style={index.container}>
            <StatusBar style="auto" />
            <Text>Material Motors</Text>
            <Text>Sign In</Text>
            <TextInput
                style={index.input}
                placeholder="Email"
                onChangeText={(text) => { setusername(text) }} />
            <TextInput
                style={index.input}
                placeholder="Password"
                secureTextEntry={true}
                onChangeText={(text) => { setpassword(text) }}
            />
            <Pressable style={index.button}

            >
                <Text style={index.text1}>Sign in</Text>
            </Pressable>
            <View><Text>New User?  <Text style={{ color: 'darkviolet' }}></Text></Text>
                <Link href="">Create an Account</Link>

            </View>

        </SafeAreaView>
    );
}

