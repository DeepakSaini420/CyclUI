import React from "react";
import { View,TextInput,StyleSheet } from "react-native";
import FontAwesome5  from "react-native-vector-icons/FontAwesome5";
import Zocial from "react-native-vector-icons/Zocial"

const Input = ({ fontName,placeHolder })=>{

    return(
        <View style={styles.inputContainer}>
            {
                fontName === 'email' ? <Zocial name={fontName} size={20} style={styles.icon} /> : <FontAwesome5 name={fontName} size={20} style={styles.icon}/>
            }
            <TextInput
            style={styles.Input}
            placeholder={placeHolder}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    inputContainer:{
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        margin:10,
        marginBottom:15
    },
    icon:{
        position:'relative',
        color:"#37B76C",
        left:40,
        top:5,
        zIndex:1,
    },
    Input:{
        height:55,
        width:340,
        marginRight:25,
        paddingLeft:55,
        marginTop:10,
        borderRadius:15,
        color:'black',
        backgroundColor:"#e7f6ee"
    }
})

export default Input