import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import axios from 'axios'
import { Text, View, SafeAreaView, TextInput, Pressable, Button, ActivityIndicator } from 'react-native';
import { safearea, bootstrap } from '../../constants/Bootstrap.js'
import AsyncStorage from '@react-native-async-storage/async-storage';
// /async-storage

function Login({ navigation }) {
    const [load, setload] = useState(false)
    const [username, setusername] = useState()
    const [password, setpassword] = useState()
    console.log(process.env.GOOGLE_MAPS)

    async function Login() {
        setload(true)
        console.log(username, password)
        try {
            await axios.post(`http://192.168.0.102:3001/login`, {
                username: username,
                password: password
            }).then((response) => {
                setload(false)
                alert(response.data.message)
                if (response.data.status == true) {
                    AsyncStorage.setItem('@username', JSON.stringify(username))
                    AsyncStorage.setItem('@password', JSON.stringify(password))
                    navigation.navigate('Profile')
                }
            })
        } catch (e) {
            setload(false)
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
                {
                    load ?
                        <ActivityIndicator size="small" style={bootstrap.btn_darkpurple} />
                        :
                        <Pressable style={bootstrap.btn_darkpurple} onPress={Login} >
                            <Text style={[bootstrap.text_white, bootstrap.text_bold]} >Sign in</Text>
                        </Pressable>

                }

                <View style={{ flexDirection: 'row', justifyContent: 'center', marginLeft: 40, marginTop: 10 }} >

                    <Text style={{ flex: 1, textAlign: 'right' }} >New User ?   </Text>
                    <Pressable style={{ flex: 2 }} onPress={() => navigation.navigate('Signup')} >
                        <Text style={[bootstrap.text_xanthous, bootstrap.text_semibold]} >Create a New Account</Text>
                    </Pressable>

                </View>
            </View>
        </SafeAreaView>
    );
}
export { Login }