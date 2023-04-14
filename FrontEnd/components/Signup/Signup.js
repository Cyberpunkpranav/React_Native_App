import { Text, View, SafeAreaView, TextInput, Pressable, Button, TouchableOpacity, Image,Alert } from 'react-native';
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


    async function signupfunc() {
        try {
            console.log(firstname, lastname, emailid, phone, password)
            await axios.post('http://192.168.3.224:3001/signup', {
                firstname: firstname,
                lastname: lastname,
                email_id: emailid,
                phone: phone,
                password: password
            }).then((response) => {

                Alert.alert('Login',response.data.message)

            })
        } catch (e) {
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

            <View style={{ marginTop: 30, alignItems: 'center', marginTop: 150 }}>
                <View style={{ flexDirection: 'row' }}>
                    <TouchableOpacity onPress={() => navigation.navigate('Login')} style={{ flexDirection: 'row', paddingRight: 20, marginTop: 2 }}>
                        <Image source={require('../../assets/images/backarrow.png')} style={{ width: 30, height: 30, alignSelf: 'center' }} />
                        <Text style={[{ alignSelf: 'center' }, bootstrap.text_xanthous]}>Login</Text>
                    </TouchableOpacity>
                    <Text style={[bootstrap.fs_4_5, { flex: 3 }]}>Material Motors</Text>
                </View>

                <View style={{ flexDirection: 'row' }}>
                    <TextInput style={[{ flex: 1, margin: 5 }, bootstrap.input, bootstrap.bg_palepurple]} onChangeText={(text) => { setfirstname(text) }} placeholder='Firstname' />
                    <TextInput style={[{ flex: 1, margin: 5 }, bootstrap.input, bootstrap.bg_palepurple]} onChangeText={(text) => { setlastname(text) }} placeholder='Lastname' />
                </View>
                <TextInput style={[bootstrap.input, bootstrap.bg_palepurple, { width: 375 }]} onChangeText={(text) => { setemailid(text) }} placeholder='Email ID' />
                <TextInput style={[bootstrap.input, bootstrap.bg_palepurple, { width: 375 }]} onChangeText={(text) => { setphone(text) }} placeholder='Phone No.' />
                <View style={{ flexDirection: 'row' }}>
                    <TextInput style={[{ flex: 1, margin: 5 }, bootstrap.input, bootstrap.bg_palepurple]} onChangeText={(text) => { setpassword(text) }} secureTextEntry={true} placeholder='Password' />
                    <TextInput ref={confirmpassRef} style={[{ flex: 1, margin: 5 }, bootstrap.input, bootstrap.bg_palepurple]} onChangeText={(text) => { setconfirmpassword(text) }} placeholder='Confirm Password' />
                </View>
                <TouchableOpacity style={bootstrap.btn_darkpurple} onPress={signupfunc}>
                    <Text style={[bootstrap.text_white, bootstrap.text_semibold]}>Create Account </Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    )

}

export { Signup }