import { Text, View, SafeAreaView, TextInput, Pressable, Button,Image } from 'react-native';
import {safearea, bootstrap } from '../../constants/Bootstrap.js'
import React from 'react'
import MapView from 'react-native-maps';

const Profile = () => {
  return (
    
    <SafeAreaView style={[safearea.AndroidSafeArea, bootstrap.bg_seasalt]}>
    <View style={bootstrap.container}>
      <View style={[bootstrap.row,bootstrap.justify_content_between]}>
      <Image style={[bootstrap.img_medium]} source={require('../../assets/images/user.png') }/>
      <Text style={[bootstrap.fs_5]}>Material Motors</Text>
      <Image style={[bootstrap.img_medium]} source={require('../../assets/images/notifications.png') }/>
      <Image style={bootstrap.img_medium} source={require('../../assets/images/menu.png') }/>
      </View>
      </View>
      <View style={bootstrap.container}>
      <MapView style={bootstrap.map}/>
        <View style></View>
      </View>

    </SafeAreaView>
  )
}

export {Profile}
