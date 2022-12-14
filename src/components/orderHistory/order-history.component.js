import React from "react";
import { Text,StyleSheet,View,Image } from "react-native";

const OrderHistoryComponent = ({imgUrl,title,subTitle})=>{
    return(
        <View style={styles.orderContainer}>
            <View style={styles.textContainer}>
                <Text style={styles.text}>{title}</Text>
            </View>
            <View style={styles.logoContainer}>
                <Image source={{uri:imgUrl}} style={styles.img}/>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    orderContainer:{
        width:350,
        backgroundColor:'#fff',
        height:85,
        flexDirection:'row',
        justifyContent:'space-around',
        alignItems:'center',
        borderRadius:8,
        padding:5,
        marginTop:25,
        marginBottom:15,
        marginLeft:5,
        elevation: 6,
    },
    logoContainer:{
        position:'relative',
        width:105,
        height:'100%',
    },
    textContainer:{
        width:'50%'
    },
    img:{
        position:'absolute',
        width:'100%',
        height:'100%',
        borderRadius:5
    },
    text:{
        color:'gray',
        fontWeight:'600',
    }
});

export default OrderHistoryComponent