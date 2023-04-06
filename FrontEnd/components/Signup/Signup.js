import { Text, View, SafeAreaView, TextInput, Pressable, Button } from 'react-native';
import React, { Component, useEffect, useRef, useState } from 'react'
import signup from '../../styles/SignupStyle'
import axios from 'axios'
function Signup() {
    const confirmpassRef = useRef(null)
    const [firstname, setfirstname] = useState()
    const [lastname, setlastname] = useState()
    const [emailid, setemailid] = useState()
    const [phone, setphone] = useState()
    const [password, setpassword] = useState()
    const [confirmpassword, setconfirmpassword] = useState()


    async function signupfunc() {
        try {
            console.log(firstname, lastname, emailid, phone, password)
            await axios.post('http://192.168.0.104:3001/signup', {
                firstname: firstname,
                lastname: lastname,
                email_id: emailid,
                phone: phone,
                password: password
            }).then((response) => {
                console.log(response)
                alert(response.data.message)
            })
        } catch (e) {
            alert(e)
        }
    }

    function CheckPasswords() {
        if ( confirmpassword !== undefined && password === confirmpassword) {
            confirmpassRef.current.setNativeProps({
                style: {
                  borderColor: 'green',
                },
              });
        } else if(password !== confirmpassword) {
            confirmpassRef.current.setNativeProps({
                style: {
                  borderColor: 'red',
                },
              });
        }else{
            confirmpassRef.current.setNativeProps({
                style: {
                  borderColor: 'black',
                },
              });
        }
    }
    useEffect(() => {
        CheckPasswords()
    }, [confirmpassword])

    return (
        <SafeAreaView style={signup.container}>
            <Text>Signup</Text>


            <TextInput style={signup.input} onChangeText={(text) => { setfirstname(text) }} placeholder='Firstname' />
            <TextInput style={signup.input} onChangeText={(text) => { setlastname(text) }} placeholder='Lastname' />
            <TextInput style={signup.input} onChangeText={(text) => { setemailid(text) }} placeholder='Email ID' />
            <TextInput style={signup.input} onChangeText={(text) => { setphone(text) }} placeholder='Phone No.' />
            <TextInput style={signup.input} onChangeText={(text) => { setpassword(text) }} secureTextEntry={true} placeholder='Password' />
            <TextInput ref={confirmpassRef} style={signup.input} onChangeText={(text) => { setconfirmpassword(text) }} placeholder='Confirm Password' />

            <Pressable style={signup.button} onPress={signupfunc}>
                <Text style={signup.text1}>Create Account </Text>
            </Pressable>
        </SafeAreaView>
    )

}

export { Signup }