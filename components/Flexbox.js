import React from 'react';
import {View,StyleSheet} from 'react-native';

const Flexbox = () =>{
   return(
       <>
       <View style={styles.container}>
           <View  style={styles.box1}></View>
           <View style={styles.box2}></View>
           <View style={styles.box3}></View>
       </View>
        <View style={styles.container1}>
        <View  style={styles.box11}></View>
        <View style={styles.box12}></View>
        <View style={styles.box13}></View>
    </View>
    </>
   );
}
export default Flexbox;
const styles = StyleSheet.create({
    container:{
      flexDirection:"column",
      justifyContent:"center",
      alignItems:"center",
      backgroundColor:"grey",
      height:600
    },
    box1:{
      width:100,
      height:100,
      backgroundColor:"red"
    },
    box2:{
        width:100,
        height:100,
        backgroundColor:"blue"
      },
      box3:{
        width:100,
        height:100,
        backgroundColor:"green"
      },


    container1:{
      flexDirection:"column",
      justifyContent:"space-between",
      alignItems:"flex-end",
      backgroundColor:"black",
      height:600
    },
    box11:{
      width:100,
      height:100,
      backgroundColor:"red"
    },
    box12:{
        width:100,
        height:100,
        backgroundColor:"blue"
      },
      box13:{
        width:100,
        height:100,
        backgroundColor:"green"
      }
});