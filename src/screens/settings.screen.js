import React from "react";
import { SafeAreaView,StyleSheet,StatusBar,Text,View, Platform } from 'react-native'
import SettingComponent from "../components/setting-component/setting.component";

const Settings = ({ navigation })=>{
    const pressEvent = ()=>{
        navigation.navigate({name:'profile'})
    }
    return(
        <SafeAreaView style={styles.container}>
            <SettingComponent text={'Profile'} navigate={navigation} pressEvent={pressEvent}/>
            <SettingComponent text={'Theme'}/>
            <SettingComponent text={`FAQ'S`} name={'question-circle'}/>
            <SettingComponent text={'Terms and Conditions'} name={'book-open'} />
            <SettingComponent text={'Privacy Policy'} name={'lock'}/>
            <SettingComponent text={'Logout'}/>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#fff',
        padding: Platform.OS === 'android' ? StatusBar.currentHeight:0
    }
})

export default Settings