import React from "react"
import { Text,TouchableOpacity,StyleSheet } from "react-native"
import { LinearGradient } from 'expo-linear-gradient';

const Button = ({buttonText,pressEvent=()=>null})=>{
    return(
        <TouchableOpacity onPress={pressEvent}>
            <LinearGradient colors={["#51bb5b","#2eb672"]} style={styles.button}>
                <Text style={styles.buttonText}>{buttonText}</Text>
            </LinearGradient>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    button:{
        marginTop:15,
        justifyContent:'center',
        alignItems:'center',
        height:65,
        width:340,
        borderRadius:20
    },
    buttonText:{
        color:"#fff",
        fontSize:20,
        fontWeight:'500',
    },
    
});

export default Button;