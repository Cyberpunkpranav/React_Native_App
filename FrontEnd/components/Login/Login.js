import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import axios from 'axios'
import login from '../../styles/LoginStyle.js'

import { Text, View, SafeAreaView, TextInput, Pressable, Button } from 'react-native';

function Login({ navigation }) {
    const [username, setusername] = useState()
    const [password, setpassword] = useState()
    async function Login() {
        console.log('clicked')
        console.log(username, password)
        // try {
        await axios.post(`http://192.168.1.8:3001/login`,{
            username: username,
            password: password
    }).then((response) => {

            alert(response.data.message)
            console.log(response.data.message)
        })
        // } catch (e) {
        //     alert(e)
        // }

    }


    return (
        <SafeAreaView style={login.container}>
            <StatusBar style="auto" />
            <Text>Material Motors</Text>
            <Text>Sign In</Text>
            <TextInput
                style={login.input}
                placeholder="Email"
                onChangeText={(text) => { setusername(text) }} />
            <TextInput
                style={login.input}
                placeholder="Password"
                secureTextEntry={true}
                onChangeText={(text) => { setpassword(text) }}
            />
            <Pressable style={login.button}
                onPress={Login}
            >
                <Text style={login.text1} >Sign in</Text>
            </Pressable>
            <View>
                <Text>New User?</Text>
                <Pressable onPress={() => navigation.navigate('Signup')} >
                    <Text>Create a New Account</Text>
                </Pressable>

            </View>

        </SafeAreaView>
    );
}
export { Login }