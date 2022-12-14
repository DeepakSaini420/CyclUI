import React,{ useContext } from "react";
import { orderContext } from "../context/order-history.context";
import OrderHistoryComponent from "../components/orderHistory/order-history.component";
import { Text,SafeAreaView,StyleSheet,Platform, StatusBar,ScrollView } from "react-native";

const OrderHistory = ()=>{
    const { orderHistory } = useContext(orderContext);
    console.log(orderHistory)
    return(
        <SafeAreaView style={styles.container}>
            <ScrollView style={styles.ScrollView}>
                {
                    orderHistory.map(({imgUrl,title,subTitle},idx) => <OrderHistoryComponent imgUrl={imgUrl} title={title} subTitle={subTitle} key={idx}/>)
                }
            </ScrollView>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container:{
        marginTop:Platform.OS === 'android' ? StatusBar.currentHeight : 0,
        flex:1,
        backgroundColor:'#ffffff',
        paddingLeft:20
        // alignItems:'center'
    },
    ScrollView:{
        // borderWidth:1
    }
})

export default OrderHistory