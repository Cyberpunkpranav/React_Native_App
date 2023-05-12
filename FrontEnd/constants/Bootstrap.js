import { Platform, StatusBar } from 'react-native'
import { StyleSheet } from 'react-native-auto-stylesheet';

// powder blue #a1c6ea
// lemon chiffon #F4F0BB
// periwinkle #c3bef7
// dark purple #2f243a
// xanthous #fac05e
// gunmetal #293132
// white #ffffff
// lavender '#BD87D4
// Mindaro #D5E68D
// Pigment Green #47A025
// White #FBFCFF
//seasalt #F9F8F8
//black olive #36382E
// Color Schema 
const powderblue = '#a1c6ea'
const gunmetal = '#293132'
const xanthous = '#fac05e'
const darkpurple = '#2f243a'
const earthyellow = '#eaba6b'
const periwinkle = '#c3bef7'
const white = '#ffffff'
const palepurple = '#EEE1F4'
const seasalt = '#F9F8F8'
// Color Schema
const safearea = StyleSheet.create({
    AndroidSafeArea: {
        flex: 1,
        backgroundColor: "white",
        paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,

    }
});
export { safearea }

const bootstrap = StyleSheet.create({
    map:{
     width:'100%',
     height:'50%',
     borderStyle:'solid',
     borderWidth:2,
    },
    img_small:{
        width:20,
        height:20,
    },
        img_medium:{
        width:30,
        height:30,
    },
    img_large:{
        width:50,
        height:50,
    },
    container: {
        height:100,
        width:100
    },
    container_fluid: {
        flex: 1,
        justifyContent: 'flex-start',
    },
    justify_content_spacearound:{
        justifyContent:'space-around'
    },  
    justify_content_between:{
        justifyContent:'space-between'
    }, 
    row:{
        flex: 1,
        flexDirection:'row',
        direction:'ltr',
        minWidth:375
        // min-width:'100%'

    },
    input: {
        width: 200,
        height: 50,
        padding: 10,
        color: 'white',
        borderWidth: 1,
        marginTop: 10,
        borderRadius: 10,
    },
    bg_powderblue: {
        backgroundColor: powderblue,
        color: darkpurple,
        borderColor: powderblue
    },
    bg_earthyellow: {
        backgroundColor: earthyellow,
        color: gunmetal,
        borderColor: earthyellow
    },
    bg_periwinkle: {
        backgroundColor: periwinkle,
        color: darkpurple,
        borderColor: periwinkle
    },
    bg_darkpurple: {
        backgroundColor: darkpurple,
        color: white,
        borderColor: darkpurple
    },
    bg_xanthous: {
        backgroundColor: xanthous,
        color: gunmetal,
        borderColor: xanthous
    },
    bg_gunmetal: {
        backgroundColor: gunmetal,
        color: white,
        borderColor: gunmetal
    },
    bg_white: {
        backgroundColor: white,
        color: gunmetal,
        borderColor: white
    },
    bg_seasalt: {
        backgroundColor: seasalt,
        color: gunmetal,
        borderColor: seasalt
    },
    bg_palepurple: {
        backgroundColor: palepurple,
        color: darkpurple,
        borderColor: palepurple
    },
    text_white: {
        color: white
    },
    text_darkpurple: {
        color: darkpurple
    },
    text_palepurple: {
        color: palepurple,
    },
    text_xanthous: {
        color: xanthous,
    },
    text_gunmetal: {
        color: gunmetal
    },
    text_bold: {
        fontWeight: '500'
    },
    text_semibold: {
        fontWeight: '400'
    },
    text_semilight: {
        fontWeight: '300'
    },
    text_light: {
        fontWeight: '100'
    },
    fs_1: {
        fontSize: 100
    },
    fs_1_5: {
        fontSize: 85
    },
    fs_2: {
        fontSize: 75
    },
    fs_2_5: {
        fontSize: 65
    },
    fs_3: {
        fontSize: 25
    },
    fs_3_5: {
        fontSize: 22
    },
    fs_4: {
        fontSize: 18
    },
    fs_4_5: {
        fontSize: 16
    },
    fs_5: {
        fontSize: 12
    },
    fs_6: {
        fontSize: 8
    },
    btn_darkpurple: {
        backgroundColor: darkpurple,
        color: palepurple,
        width: 'auto',
        height: 35,
        paddingTop: 5,
        paddingBottom: 5,
        paddingHorizontal: 10,
        borderColor: darkpurple,
        borderWidth: 1,
        marginTop: 10,
        marginBottom: 10,
        borderRadius: 10,
        alignItems: 'center',
    },
    btn_xanthous: {
        backgroundColor: xanthous,
        borderColor: xanthous,
        color: gunmetal,
        width: 'auto',
        height: 35,
        paddingTop: 5,
        paddingBottom: 5,
        paddingHorizontal: 10,
        borderWidth: 1,
        marginTop: 10,
        marginBottom: 10,
        borderRadius: 10,
        alignItems: 'center',
    },
    btn_earthyellow: {
        backgroundColor: earthyellow,
        borderColor: earthyellow,
        color: gunmetal,
        width: 'auto',
        height: 35,
        paddingTop: 5,
        paddingBottom: 5,
        paddingHorizontal: 10,
        borderWidth: 1,
        marginTop: 10,
        marginBottom: 10,
        borderRadius: 10,
        alignItems: 'center',
    }
})

export { bootstrap }