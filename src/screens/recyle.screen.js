import React, { useState } from 'react'
import { SafeAreaView,Text,View,StyleSheet,ImageBackground } from 'react-native'
import Button from '../components/button/button.component'

const RecyleScreen = () =>{
    const [ flow,setFlow ] = useState(1);
    return(
        <SafeAreaView style={styles.container}>
            <View style={styles.recycleContainer}>
                <Text style={styles.headText}>Steps to Recycle</Text>
                <View style={styles.stepsContainer}>
                    <View style={ styles.circleActive}>
                        <View style={styles.innerCircleActive}></View>
                    </View>
                    <View style={flow === 2 || flow === 3 ? styles.lineActive : styles.line}></View>
                    <View style={flow === 2 || flow===3 ? styles.circleActive : styles.circle }>
                        <View style={flow === 2 || flow===3 ? styles.innerCircleActive : styles.innerCircle}></View>
                    </View>
                    <View style={flow === 3 ? styles.lineActive : styles.line}></View>
                    <View style={flow === 3 ? styles.circleActive : styles.circle}>
                        <View style={flow === 3 ? styles.innerCircleActive : styles.innerCircle}></View>
                    </View>
                </View>
                <View style={styles.textContainer}>
                    <Text style={{position:'relative',right:5}}>Scan</Text>
                    <Text style={{marginLeft:10}}>Return</Text>
                    <Text >Recycled</Text>
                </View>
                <View style={styles.camera}>
                    <ImageBackground source={{uri:'https://images.unsplash.com/photo-1669219907498-2d3391adcc09?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=685&q=80'}} resizeMode='cover' style={styles.image} imageStyle={{borderRadius:15}}>
                        {
                            flow === 1 ? (
                                <View style={styles.barCodeContain}>
                                    <View style={styles.border1}></View>
                                    <View style={styles.border2}></View>
                                    <View style={styles.border3}></View>
                                    <View style={styles.border4}></View>
                                </View>
                            ): ''
                        }
                        <View style={styles.blurContainer}>
                            
                        </View>
                    </ImageBackground>
                </View>
                <View style={styles.button}>
                    {
                        flow === 2 ? <Button buttonText={"Cancel"} pressEvent={()=> setFlow(flow-1)}/> : <Button buttonText={"Barcode"} pressEvent={()=> setFlow(flow+1)}/>
                    }
                </View>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'white',
    },
    recycleContainer:{
        paddingTop:15,
        paddingLeft:25,
        paddingRight:25
    },
    headText:{
        fontSize:22,
        fontWeight:'700'
    },
    stepsContainer:{
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center',
        width:'95%',
        height:40,
        // borderWidth:1,
        marginTop:35
    },
    textContainer:{
        flexDirection:'row',
        justifyContent:'space-between'
    },
    circleActive:{
        width:35,
        height:35,
        borderRadius:50,
        borderWidth:2,
        justifyContent:'center',
        alignItems:'center',
        borderColor:'#37B76C'
    },
    circle:{
        width:35,
        height:35,
        borderRadius:50,
        borderWidth:2,
        justifyContent:'center',
        alignItems:'center',
        borderColor:'lightgrey'
    },
    innerCircleActive:{
        width:25,
        height:25,
        backgroundColor:'#37B76C',
        borderRadius:50
    },
    innerCircle:{
        width:25,
        height:25,
        backgroundColor:'white',
        borderRadius:50
    },
    lineActive:{
        width:"36%",
        height:2,
        backgroundColor:'#37B76C'
    },
    line:{
        width:"36%",
        height:2,
        backgroundColor:'lightgrey'
    },
    camera:{
        width:'100%',
        borderWidth:1,
        height:450,
        marginTop:45,
        borderRadius:15,
    },
    barCodeContain:{
        width:'80%',
        height:355,
        borderColor:'white',
        flexDirection:'row',
        justifyContent:'space-between',
        flexWrap:'wrap'
    },
    image:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    },
    border1:{
        width:'40%',
        height:'50%',
        borderTopWidth:3,
        borderLeftWidth:3,
        borderTopLeftRadius:12,
        borderTopColor:'white',
        borderLeftColor:'white'
    },
    border2:{
        width:'40%',
        height:'50%',
        borderTopWidth:3,
        borderRightWidth:3,
        borderTopRightRadius:12,
        borderTopColor:'white',
        borderRightColor:'white'
    },
    border3:{
        width:'40%',
        height:'50%',
        borderBottomWidth:3,
        borderLeftWidth:3,
        borderBottomLeftRadius:12,
        borderLeftColor:'white',
        borderBottomColor:'white',
        marginTop:12,
    },
    border4:{
        width:'40%',
        height:'50%',
        borderRightWidth:3,
        borderBottomWidth:3,
        borderBottomRightRadius:12,
        borderRightColor:'white',
        borderBottomColor:'white',
        marginTop:12
    },
    button:{
        marginTop:35
    },
    blurContainer:{
        backgroundColor:'',
    }
})

export default RecyleScreen