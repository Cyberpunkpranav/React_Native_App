import { Text, View, SafeAreaView, TextInput, Pressable, Button,Image } from 'react-native';
import {safearea, bootstrap } from '../../constants/Bootstrap.js'
import React from 'react'

const Profile = () => {
  return (
    <SafeAreaView style={[safearea.AndroidSafeArea,bootstrap.container, bootstrap.bg_white]}>
    <View>
      <Image style={bootstrap.img_small} source={{uri: 'assets:/images/user.png'}}/>
      <Text>profile</Text>
    </View>
    </SafeAreaView>
  )
}

export {Profile}
