import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import axios from 'axios'
import login from '../../styles/LoginStyle.js'
import { Text, View, SafeAreaView, TextInput, Pressable, Button, TouchableOpacity } from 'react-native';
import { safearea, bootstrap } from '../../constants/Bootstrap.js'


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
        <SafeAreaView style={[safearea.AndroidSafeArea, bootstrap.container, bootstrap.bg_white]}>
            <StatusBar style="auto" />
            <View style={{ paddingTop: 250, alignItems: 'center' }}>
                <Text style={bootstrap.fs_4_5}>Material Motors</Text>
                <TextInput
                    style={[bootstrap.input, bootstrap.bg_palepurple]}
                    placeholder="Email"
                    onChangeText={(text) => { setusername(text) }} />
                <TextInput
                    style={[bootstrap.input, bootstrap.bg_palepurple]}
                    placeholder="Password"
                    secureTextEntry={true}
                    onChangeText={(text) => { setpassword(text) }}
                />
                <TouchableOpacity style={bootstrap.btn_darkpurple} onPress={Login} >
                    <Text style={[bootstrap.text_white, bootstrap.text_bold]} >Sign in</Text>
                </TouchableOpacity>
                <View style={{ flexDirection: 'row', justifyContent: 'center', marginLeft: 40, marginTop: 10 }} >

                    <Text style={{ flex: 1, textAlign: 'right' }} >New User ?   </Text>
                    <TouchableOpacity style={{ flex: 2 }} onPress={() => navigation.navigate('Signup')} >
                        <Text style={[bootstrap.text_xanthous, bootstrap.text_semibold]} >Create a New Account</Text>
                    </TouchableOpacity>

                </View>
            </View>
        </SafeAreaView>
    );
}
export { Login }