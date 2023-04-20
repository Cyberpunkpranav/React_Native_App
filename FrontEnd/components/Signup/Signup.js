import { Text, View, SafeAreaView, TextInput, Pressable, Button } from 'react-native';
import React, { Component, useEffect, useRef, useState } from 'react'
import signup from '../../styles/SignupStyle'
import { safearea, bootstrap } from '../../constants/Bootstrap';
import axios from 'axios'
function Signup({ navigation }) {
    const confirmpassRef = useRef(null)
    const [firstname, setfirstname] = useState()
    const [lastname, setlastname] = useState()
    const [emailid, setemailid] = useState()
    const [phone, setphone] = useState()
    const [password, setpassword] = useState()
    const [confirmpassword, setconfirmpassword] = useState()
    const [load, setload] = useState(false)

    async function signupfunc() {
        setload(true)
        try {
            console.log(firstname, lastname, emailid, phone, password)
            await axios.post('http://192.168.0.102:3001/signup', {
                firstname: firstname,
                lastname: lastname,
                email_id: emailid,
                phone: phone,
                password: password
            }).then((response) => {

                alert(response.data.message)

            })
        } catch (e) {
            setload(false)
            alert(e.message)
        }
    }

    function CheckPasswords() {
        if (confirmpassword !== undefined && password === confirmpassword) {
            confirmpassRef.current.setNativeProps({
                style: {
                    borderColor: 'green',
                },
            });
        } else if (confirmpassword !== undefined && confirmpassword.length > 0 && password !== confirmpassword) {
            confirmpassRef.current.setNativeProps({
                style: {
                    borderColor: 'red',
                },
            });
        } else {
            confirmpassRef.current.setNativeProps({
                style: {
                    borderColor: 'transparent',
                },
            });
        }
    }
    useEffect(() => {
        CheckPasswords()
    }, [confirmpassword])

    return (
        <SafeAreaView style={[safearea.AndroidSafeArea, bootstrap.container, bootstrap.bg_white]}>

            <View style={{ marginTop: 200, alignItems: 'center' }}>
                <Text style={bootstrap.fs_4_5}>Material Motors</Text>
                <View style={{ flexDirection: 'row' }}>
                    <TextInput style={[{ flex: 1, margin: 5 }, bootstrap.input, bootstrap.bg_palepurple]} onChangeText={(text) => { setfirstname(text) }} placeholder='Firstname' />
                    <TextInput style={[{ flex: 1, margin: 5 }, bootstrap.input, bootstrap.bg_palepurple]} onChangeText={(text) => { setlastname(text) }} placeholder='Lastname' />
                </View>
                <TextInput style={[bootstrap.input, bootstrap.bg_palepurple, { width: 375 }]} onChangeText={(text)=> { setemailid(text) }} placeholder='Email ID' /> 
                <TextInput style={[bootstrap.input, bootstrap.bg_palepurple, { width: 375 }]} onChangeText={(text) => { setphone(text) }} placeholder='Phone No.' /> <View style={{ flexDirection: 'row' }}>
                    <TextInput style={[{ flex: 1, margin: 5 }, bootstrap.input, bootstrap.bg_palepurple]} onChangeText={(text) => { setpassword(text) }} secureTextEntry={true} placeholder='Password' />
                    <TextInput ref={confirmpassRef} style={[{ flex: 1, margin: 5 }, bootstrap.input, bootstrap.bg_palepurple]} onChangeText={(text) => { setconfirmpassword(text) }} placeholder='Confirm Password' />
                </View>
                <Pressable style={bootstrap.btn_darkpurple} onPress={signupfunc}>
                    <Text style={[bootstrap.text_white, bootstrap.text_semibold]}>Create Account </Text>
                </Pressable>
            </View>
        </SafeAreaView>
    )

}

export { Signup }