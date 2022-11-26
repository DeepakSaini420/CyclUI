import React from "react";
import { View,StyleSheet } from 'react-native'
import Input from "../components/input/input.component";

const ProfileScreen = ()=>{
    return(
        <View style={styles.container}>
            <Input placeHolder={"Name"} fontName={"user-alt"} />
            <Input placeHolder={"Phone"} fontName={"phone-alt"} />
            <Input placeHolder={"Email"} fontName={"email"} />
            <Input placeHolder={"Amount Of Recycle"} fontName={"recycle"} />
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'white'
    }
}) 

export default ProfileScreen;