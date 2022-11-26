import React from "react";
import { View,Text,Image } from "react-native";
import { createStackNavigator } from '@react-navigation/stack'
import ProfileScreen from "./profile.screen";
import Settings from "./settings.screen";

const SettingsStack = createStackNavigator();

const SettingNavigator = ()=>{
    return(
        <SettingsStack.Navigator>
            <SettingsStack.Screen name="settings" component={Settings}  options={{
                headerLeft: ()=>{
                    return(
                        <View style={{flexDirection:'row',justifyContent:'center',alignItems:'center',padding:12}}>
                            <Image source={require('../assests/AppIcons/android/mipmap-hdpi/transparent.png')} style={{borderWidth:3,borderRadius:50,borderColor:'#37B76C',width:38,height:38}}/>
                            <Text style={{marginLeft:7,color:'#37B76C',fontWeight:'500',fontSize:19}}>Cycl</Text>
                        </View>
                    )
                },
                headerTitleAlign:'center',
            }}/>
            <SettingsStack.Screen name="profile" component={ProfileScreen} options={{
                headerTitleAlign:'center'
            }}/>
        </SettingsStack.Navigator>
    )
}

export default SettingNavigator