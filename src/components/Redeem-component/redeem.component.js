import React,{ useContext } from "react";
import { orderContext } from "../../context/order-history.context";
import { View,Text,Image,StyleSheet,TextInput, TouchableOpacity } from "react-native";

const RedeemComponent = ({item})=>{
    const {addOrder} = useContext(orderContext)
    const { imgUrl,title,subTitle,buttonText } = item;

    const handelTap = ()=>{
        addOrder(item);
    }

    return(
        <View style={styles.RedeemContainer}>
            <View>
                <Image source={{
                    uri:imgUrl
                }} style={styles.img} />
            </View>
            <View style={styles.textContainer}>
                <Text style={styles.text_1}>{title}</Text>
                <Text style={styles.text_2}>{subTitle}</Text>
                <View style={styles.inputContainer}>
                    <TextInput style={styles.textInput} />
                    <TouchableOpacity style={styles.button} onPress={handelTap}>
                        <Text style={styles.button_text}>{buttonText}</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    RedeemContainer:{
        height:345,
        borderRadius:12,
        marginTop:25,
    },
    img: {
        width:'100%',
        height: 200,
        borderTopRightRadius:12,
        borderTopLeftRadius:12,
    },
    textContainer:{
        paddingTop:15,
        paddingBottom:8,
        paddingLeft:8,
        paddingRight:8,
    },
    text_1:{
        fontSize:18,
        fontWeight:'500'
    },
    text_2:{
        marginTop:8,
        fontSize:16,
        color:'grey'
    },
    textInput:{
        width:'65%',
        height:45,
        borderRadius:12,
        paddingLeft:8,
        backgroundColor:'#e7f6ee'
    },
    inputContainer:{
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        marginTop:25
    },
    button:{
        backgroundColor:'#37B76C',
        width:'30%',
        height:45,
        justifyContent:'center',
        alignItems:'center',
        borderRadius:12
    },
    button_text:{
        color:"white",
        fontSize:16,
        fontWeight:'400',
    }
})

export default RedeemComponent