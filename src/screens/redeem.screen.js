import React from "react";
import { StyleSheet,Platform,SafeAreaView,StatusBar,FlatList } from "react-native";
import RedeemComponent from "../components/Redeem-component/redeem.component";

const {redeemList} = require('../utils/dummy-data')

const RedeemScreen = ()=>{
    return(
        <SafeAreaView style={styles.container}>
            <FlatList 
                data={redeemList}
                renderItem={({item})=><RedeemComponent item={item} />}
                keyExtractor={item => item.id}
                showsVerticalScrollIndicator={false}
            />
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#fff',
        paddingLeft:25,
        paddingRight:25,
        marginTop:Platform.OS === 'android' ? StatusBar.currentHeight : 0
    }
})

export default RedeemScreen