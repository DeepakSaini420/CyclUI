import React,{useState} from "react"
import { SafeAreaView,StyleSheet,Platform,StatusBar,Text, View,Image } from "react-native"
import { useFonts } from "expo-font"
import Input from "../components/input/input.component"
import Button from "../components/button/button.component"

const LoginSignUp = ({ navigation })=>{
    const [isSignUp,setIsSignUp] = useState(true);

    let [fontLoaded] = useFonts({
        'source_sans_pro':require('../assests/fonts/source_sans_pro/SourceSansPro-SemiBold.ttf')
    });

    if(!fontLoaded){
        return(
            <Text>Loding...</Text>
        )
    }else{
        return(
            <SafeAreaView style={styles.container}>
                <View style={styles.imgContainer}>
                    <Image source={require('../assests/AppIcons/android/mipmap-hdpi/transparent.png')} style={styles.img}/>
                    <Text style={styles.logoText}>Cycl</Text>
                </View>
                <View style={styles.formContainer}>
                    <View style={styles.textContainer}>
                        {
                            isSignUp ? <Text style={styles.LoginSignupText}>Sign Up</Text> : <Text style={styles.LoginSignupText}>Login</Text> 
                        }
                        <View style={styles.borderText}></View>
                    </View>
                    {
                        isSignUp?(
                            <View style={styles.inputContainer}>
                                <Input fontName={"user-alt"} placeHolder={"Name"}/>
                                <Input fontName={"phone-alt"} placeHolder={"Phone"}/>
                                <Input fontName={"email"} placeHolder={"Email"}/>
                                <Input fontName={"lock"} placeHolder={"Password"}/>
                            </View>
                        ):(
                            <View style={styles.inputContainer}>
                                <Input fontName={"user-alt"} placeHolder={"Name"}/>
                                <Input fontName={"lock"} placeHolder={"Password"}/>
                                <Text style={{position:'relative',marginRight:235,color:'#37B76C',textDecorationColor:'#37B76C',textDecorationLine:'underline'}} onPress={()=> navigation.navigate('Reset-password')}>Forgot Password?</Text>
                            </View>
                        )
                    }
                    <View>
                        {
                            isSignUp ? <Button buttonText={"Signup"} pressEvent={()=>{setIsSignUp(false)}}/> : <Button buttonText={'Login'} pressEvent={()=>{navigation.navigate('tab-navigator')}}/>
                        }
                    </View>
                    <View style={styles.signIn}>
                        {
                            isSignUp?<Text>or sign in with</Text>:<Text>or sign up with</Text>
                        }
                        <View style={styles.iconContainer}>
                            <Image source={require('../assests/AppIcons/android/facebook.png')} style={styles.logoImg}/>
                            <Image source={require('../assests/AppIcons/android/google.png')} style={styles.logoImg}/>
                        </View>
                    </View>
                    <View style={styles.switch}>
                        {
                            isSignUp ? <Text>If you have an account.<Text style={styles.switchText} onPress={()=> {setIsSignUp(!isSignUp)}}>Login Now</Text></Text> : <Text>If you don't have an account.<Text style={styles.switchText} onPress={()=> setIsSignUp(!isSignUp)}>Register Now</Text></Text>
                        }
                    </View>
                </View>
            </SafeAreaView>
        )
    }
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        marginTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
        backgroundColor:'white',
        fontFamily:'source_sans_pro'
    },
    imgContainer:{
        flex:0.4,
        justifyContent:"center",
        alignItems:'center',
        flexDirection:'row',
        marginTop:15,
        marginBottom:12
    },
    inputContainer:{
        height:380,
        justifyContent:'center',
        alignItems:'center',
    },
    img:{
        borderWidth:5,
        borderRadius:50,
        borderColor:'#37B76C',
        width:58,
        height:58
    },
    logoText:{
        color:"#37B76C",
        fontFamily:'source_sans_pro',
        fontWeight:'bold',
        fontSize:36,
        marginLeft:18,
        zIndex:2,
    },
    formContainer:{
        paddingLeft:25,
        marginTop:0
    },
    LoginSignupText:{
        fontSize:34,
        fontWeight:'bold',
    },
    borderText:{
        width:125,
        height:8,
        backgroundColor:"#37B76C",
        borderRadius:5,
        marginTop:8
    },
    iconContainer:{
        marginTop:22,
        width:120,
        flexDirection:'row',
        justifyContent:'space-between',
        alignItems:'center',
        position:'relative',
        top:12
    },
    logoImg:{
        borderWidth:5,
        borderRadius:50,
        width:35,
        height:35
    },
    signIn:{
        position:'relative',
        top:35,
        width:340,
        justifyContent:'center',
        alignItems:'center'
    },
    switch:{
        justifyContent:'center',
        alignItems:'center',
        position:'relative',
        top:85
    },
    switchText:{
        color:'#37B76C',
        textDecorationColor:'#37B76C',
        textDecorationLine:'underline'
    }
})

export default LoginSignUp;