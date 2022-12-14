import React from 'react';
import {View ,Image,Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { OrderHistoryProvider } from './src/context/order-history.context';
import LoginSignUp from './src/screens/Login-SignUp';
import ResetPassword from './src/screens/reset-password.screen';
import Reset from './src/screens/reset.screen';
import BottomNavigation from './src/screens/bottom-navigation.screen';
import RecyleScreen from './src/screens/recyle.screen';


const stack = createNativeStackNavigator();

export default function App() {
  return (
    <OrderHistoryProvider>
      <NavigationContainer>
        <stack.Navigator screenOptions={{
          cardStyle: { backgroundColor: '#6ED4C8' }
        }}>
          <stack.Screen name="login-signup" component={LoginSignUp} options={{
            headerShown: false
          }} />
          <stack.Screen name="Reset-password" component={ResetPassword} options={{
            headerShown: false
          }} />
          <stack.Screen name='password-reset' component={Reset} options={{
            headerShown: false
          }}/>
          <stack.Screen name="tab-navigator" component={BottomNavigation} options={{
            headerShown: false
          }}/>
          <stack.Screen name='recyle' component={RecyleScreen} options={{
            headerTitle:()=>{
              return (
                <View style={{flexDirection:'row',justifyContent:'center',alignItems:'center'}}>
                  <Image source={require('./src/assests/AppIcons/android/mipmap-hdpi/transparent.png')} style={{borderWidth:3,borderRadius:50,borderColor:'#37B76C',width:38,height:38}}/>
                  <Text style={{marginLeft:7,color:'#37B76C',fontWeight:'500',fontSize:25}}>Cycl</Text>
                </View>
              )
            },
            headerTitleAlign:'center',
            headerBackVisible:false
          }} />
        </stack.Navigator>
      </NavigationContainer>
    </OrderHistoryProvider>

  );
}
