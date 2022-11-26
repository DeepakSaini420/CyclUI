import React, { useState } from "react"
import FontAwesom from 'react-native-vector-icons/FontAwesome' 
import { View,Text,SafeAreaView,StyleSheet,StatusBar, Platform,TouchableOpacity } from 'react-native'
import Input from "../components/input/input.component"
import Button from "../components/button/button.component"
import ChangePaswwordPopUp from "../components/change-password-popup/change-password-pop-up.component"

const ResetPassword = ({ navigation })=>{
    const [emailSuccess,setEmailSuccess] = useState(false)

    const handelPress= ()=>{
        setEmailSuccess(true);
    }

    const onPressOk = ()=>{
        setEmailSuccess(false);
        navigation.navigate('password-reset')
    }

    return(
        <SafeAreaView style={styles.container}>
            <TouchableOpacity style={styles.backContainer} onPress={()=> navigation.navigate('login-signup')}>
                <FontAwesom name="angle-left" size={35} style={{color:'#37B76C'}} />
            </TouchableOpacity>
            <View style={{marginTop:35}}>
                <Text style={{fontSize:23,fontWeight:'600'}}>Reset Your Password</Text>
                <Text style={{marginTop:7,fontSize:13,color:'grey'}}>We'll send an request password link to your email.</Text>
            </View>
            <View style={{paddingRight:20}}>
                <Input placeHolder={"Email"} fontName="email" />
            </View>
            <Button buttonText={"Reset Password"} pressEvent={handelPress}/>
            <View style={{justifyContent:'center',alignItems:'center',marginTop:65,width:340}}>
                <Text>If you don't have an account.</Text>
                <Text style={styles.switchText} onPress={()=> navigation.navigate('login-signup')}>Register Now</Text>
            </View>
            {
                emailSuccess ? <ChangePaswwordPopUp text1={"Reset Link Sent"} text2={"We've sent reset password link to your"} text3={"registered email"} onPress={onPressOk}/> :'' 
            }
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        marginTop:Platform.OS === 'android' ? StatusBar.currentHeight : 0,
        backgroundColor:'white',
        paddingLeft:25
    },
    backContainer:{
        justifyContent:'center',
        alignItems:'center',
        borderRadius:5,
        width:55,
        height:55,
        borderColor:'black',
        borderWidth:1,
        marginTop:32
    },
    switchText:{
        color:'#37B76C',
        textDecorationColor:'#37B76C',
        textDecorationLine:'underline'
    }
})

export default ResetPassword