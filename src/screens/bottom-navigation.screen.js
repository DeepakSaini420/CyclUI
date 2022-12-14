import React from "react";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import SettingNavigator from "./setting.navigation";
import RedeemScreen from "./redeem.screen";
import FontAwsome5 from 'react-native-vector-icons/FontAwesome5'
import Home from "./home.screen";
import OrderHistory from "./order-history.screen";

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
                }else if(route.name === "Order History"){
                    iconName = "history"
                }

                return <FontAwsome5 name={iconName} size={32} color={color} style={{padding:6}} />
            },
            tabBarActiveTintColor: '#37B76C',
            tabBarInactiveTintColor: 'gray',
            tabBarStyle:{
                height:65,
            },
            tabBarLabelStyle:{
                fontSize:14
            },
            lazy:true
        })}
        >
            <Tab.Screen name="Home" component={Home} />
            <Tab.Screen name="Redeem"  component={RedeemScreen} options={{
                headerShown:false
            }}/>
            <Tab.Screen name="Order History" component={OrderHistory} options={{
                headerShown:false
            }}/>
            <Tab.Screen name="More" component={SettingNavigator} options={{
                headerShown:false
            }}/>
        </Tab.Navigator>
    )
}

export default BottomNavigation;