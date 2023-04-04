import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import axios from 'axios'
import index from '../styles/indexstyle'
import { profile } from '../components/Profile/profile';
import { Linking, Text, View, SafeAreaView, TextInput, Alert, Pressable } from 'react-native';

// import 'expo-router/_entry'

export default function Auth() {
    const [username, setusername] = useState()
    const [password, setpassword] = useState()
    async function Login(){
        console.log('clicked')
        console.log(username, password) 
        try{
           await axios.post(`http://localhost:3001/login`,{
                username: username,
                password :password
             }).then((response)=>{
      
                alert(response.data.message)
                console.log(response.data.message)
             })
        }catch(e){
            alert('Cannot post data')
        }
     
    }
    
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
                onPress={Login}
            >
                <Text style={index.text1} >Sign in</Text>
            </Pressable>
            <View><Text>New User?  <Text style={{ color: 'darkviolet' }}></Text></Text>

            </View>

        </SafeAreaView>
    );
}

