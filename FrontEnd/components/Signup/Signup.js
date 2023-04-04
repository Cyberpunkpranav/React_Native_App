import { Text, View, SafeAreaView, TextInput, Pressable, Button } from 'react-native';
import React, { Component, useEffect, useRef, useState } from 'react'
import signup from '../../styles/SignupStyle'

function Signup() {
    const confirmpassRef = useRef(null)
    const [firstname, setfirstname] = useState()
    const [lastname, setlastname] = useState()
    const [emailid, setemailid] = useState()
    const [phone, setphone] = useState()
    const [password, setpassword] = useState()
    const [confirmpassword, setconfirmpassword] = useState()

    function checkingpasscode() {
        if (confirmpassword === password) {
            confirmpassRef.current.setNativeProps({
                style: {
                    borderWidth: 2,
                    borderColor: 'green',
                },
            });
        } else {
            confirmpassRef.current.setNativeProps({
                style: {
                    borderWidth: 2,
                    borderColor: 'red',
                },
            });

        }
    }
    async function signupfunc() {
        try {
            await axios.post('http://192.168.1.8:3001/signup', {
                firstname:firstname,
                lastname:lastname,
                emailid:emailid,
                phone:phone,
                password:password
            }).then((response)=>{
                alert(response.data.message)
            })
        } catch (e) {
            alert(e)
        }
    }
    useEffect(() => {
        checkingpasscode()
    }, [password, confirmpassword])

    return (
        <SafeAreaView style={signup.container}>
            <Text>Signup</Text>
            <TextInput style={signup.input} onChange={(text) => { setfirstname(text) }} placeholder='Firstname' />
            <TextInput style={signup.input} onChange={(text) => { setlastname(text) }} placeholder='Lastname' />
            <TextInput style={signup.input} onChange={(text) => { setemailid(text) }} placeholder='Email ID' />
            <TextInput style={signup.input} onChange={(text) => { setphone(text) }} placeholder='Phone No.' />
            <TextInput style={signup.input} onChange={(text) => { setpassword(text) }} secureTextEntry={true} placeholder='Password' />
            <TextInput ref={confirmpassRef} style={signup.input} onChange={(text) => { setconfirmpassword(text) }} placeholder='Confirm Password' />
            <Pressable style={signup.button} onPress={signupfunc}>
                <Text style={signup.text1}>Create Account </Text>
            </Pressable>
        </SafeAreaView>
    )

}

export { Signup }