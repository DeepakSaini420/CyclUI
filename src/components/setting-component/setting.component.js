import React from 'react'
import { View,Text,StyleSheet,TouchableOpacity } from 'react-native'
import Icon  from "react-native-vector-icons/FontAwesome5";

const SettingComponent = ({ text,name,pressEvent=()=>null })=>{
    return(
        <TouchableOpacity style={styles.container} onPress={pressEvent}>
            <View style={styles.settingContainer}>
                <Icon name={name ? name : 'user-alt'} size={19} color={'#37B76C'}/>
                <Text style={styles.text}>{text}</Text>
            </View>
            <View>
                <Icon name='angle-right' size={19}/>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container:{
        borderColor:'#cfcdca',
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        paddingTop:18,
        paddingBottom:18,
        paddingLeft:15,
        paddingRight:15,
        borderRadius:20,
        marginTop:20,
        backgroundColor:"#fff",
        elevation:5
    },
    text:{
        marginLeft:15,
        fontSize:20,
        fontWeight:'500',
    },
    settingContainer:{
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center'
    }
})

export default SettingComponent