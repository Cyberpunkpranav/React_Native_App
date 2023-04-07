import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import axios from 'axios'
import login from '../../styles/LoginStyle.js'
import { Text, View, SafeAreaView, TextInput, Pressable, Button } from 'react-native';
import { bootstrap } from '../../constants/Bootstrap.js'

function Login({ navigation }) {
    const [username, setusername] = useState()
    const [password, setpassword] = useState()

    async function Login() {
        console.log(username, password)
        try {
            await axios.post(`http://192.168.1.8:3001/login`, {
                username: username,
                password: password
            }).then((response) => {
                alert(response.data.message)
            })
        } catch (e) {
            alert(e.message)
        }

    }


    return (
        <SafeAreaView style={[login.container, bootstrap.bg_white]}>
            <StatusBar style="auto" />
            <Text style={bootstrap.fs_4_5}>Material Motors</Text>
            <TextInput
                style={[login.input, bootstrap.bg_palepurple]}
                placeholder="Email"
                onChangeText={(text) => { setusername(text) }} />
            <TextInput
                style={[login.input, bootstrap.bg_palepurple]}
                placeholder="Password"
                secureTextEntry={true}
                onChangeText={(text) => { setpassword(text) }}
            />
            <Pressable style={bootstrap.btn_darkpurple} onPress={Login} >
                <Text style={[bootstrap.text_white, bootstrap.text_bold]} >Sign in</Text>
            </Pressable>
            <View style={{ width: 400, flexDirection: 'row', justifyContent: 'flex-end' }}>
                <Text style={{ flex: '2', textAlign: 'right' }}>New User ?   </Text>
                <Pressable style={{ flex: '3' }} onPress={() => navigation.navigate('Signup')} >
                    <Text style={[bootstrap.text_xanthous, bootstrap.text_semibold]} >Create a New Account</Text>
                </Pressable>

            </View>

        </SafeAreaView>
    );
}
export { Login }