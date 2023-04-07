import { StyleSheet } from 'react-native'
// powder blue #a1c6ea
// earth Yellow #eaba6b
// periwinkle #c3bef7
// dark purple #2f243a
// xanthous #fac05e
// gunmetal #293132
// white #ffffff
// lavender '#BD87D4

// Color Schema
const powderblue = '#a1c6ea'
const gunmetal = '#293132'
const xanthous = '#fac05e'
const darkpurple = '#2f243a'
const earthyellow = '#eaba6b'
const periwinkle = '#c3bef7'
const white = '#ffffff'
const palepurple = '#EEE1F4'
// Color Schema

const bootstrap = StyleSheet.create({
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
    fs_1:{
    fontSize:100
    },
    fs_1_5:{
    fontSize:85
    },
    fs_2:{
    fontSize:75
    },
    fs_2_5:{
    fontSize:65
    },
    fs_3:{
    fontSize:55
    },
    fs_3_5:{
    fontSize:45
    },
    fs_4:{
    fontSize:35
    },
    fs_4_5:{
    fontSize:25
    },
    fs_5:{
    fontSize:15
    },
    fs_6:{
    fontSize:10
    },
    btn_darkpurple: {
        backgroundColor: darkpurple,
        color: palepurple,
        width: 100,
        height: 35,
        padding: 5,
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
        width: 100,
        height: 35,
        padding: 5,
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
        width: 100,
        height: 35,
        padding: 5,
        borderWidth: 1,
        marginTop: 10,
        marginBottom: 10,
        borderRadius: 10,
        alignItems: 'center',
    }
})

export { bootstrap }