import React from "react";
import { Text,View,StyleSheet } from "react-native";
import { LinearGradient } from 'expo-linear-gradient';
import FontAwesome5Icon from "react-native-vector-icons/FontAwesome5";
import Button from "../button/button.component";

const ChangePaswwordPopUp=({text1,text2,text3,onPress})=>{
    return(
        <LinearGradient colors={["rgba(0,0,0,0.5)","rgba(0,0,0,0.5)"]} style={styles.background}>
            <View style={styles.div}>
                <FontAwesome5Icon name="lock" size={45} style={{color:'#37B76C'}}/>
                <Text style={{fontSize:23,fontWeight:'600',marginTop:8}}>{text1}</Text>
                <Text style={{letterSpacing:1.2,color:'grey',marginTop:10}}>{text2}</Text>
                <Text style={{letterSpacing:1.2,color:'grey'}}>{text3}</Text>
                <Button buttonText={"OK"} pressEvent={onPress}/>
            </View>
        </LinearGradient>
    )
}

const styles = StyleSheet.create({
    background:{
        position:'absolute',
        top:0,
        left:0,
        right:0,
        bottom:0,
        zIndex:2,
    },
    div:{
        width:'100%',
        height:270,
        backgroundColor:'white',
        position:'absolute',
        bottom:0,
        paddingTop:25,
        paddingLeft:25,
        borderTopLeftRadius:25,
        borderTopRightRadius:25,
        zIndex:3,
    }
})

export default ChangePaswwordPopUp;