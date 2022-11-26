import React from "react";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { Text } from "react-native";
import SettingNavigator from "./setting.navigation";
import RedeemScreen from "./redeem.screen";
import FontAwsome5 from 'react-native-vector-icons/FontAwesome5'
import Home from "./home.screen";

const Tab = createBottomTabNavigator();

const BottomNavigation = ()=>{
    return(
        <Tab.Navigator screenOptions={({ route }) => ({
            tabBarIcon:({ focused,color }) =>{
                let iconName;
                if(route.name === "Home"){
                    iconName="home"
                }else if(route.name === "More"){
                    iconName = 'hamburger'
                }else if(route.name === "Redeem"){
                    iconName = "gift"
                }

                return <FontAwsome5 name={iconName} size={25} color={color} />
            },
            tabBarActiveTintColor: '#37B76C',
            tabBarInactiveTintColor: 'gray',
            tabBarStyle:{
                height:65,
                paddingBottom:8,
            },
            tabBarLabelStyle:{
                fontSize:14
            },
        })}
        >
            <Tab.Screen name="Home" component={Home} />
            <Tab.Screen name="Redeem"  component={RedeemScreen} options={{
                headerShown:false
            }}/>
            <Tab.Screen name="More" component={SettingNavigator} options={{
                headerShown:false
            }}/>
        </Tab.Navigator>
    )
}

export default BottomNavigation;