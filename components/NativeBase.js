import React ,{Component} from 'react';
import {View,Text,TextInput,StyleSheet} from 'react-native';


class Nativebase extends Component{
   render(){
       return(
          <View style={styles.container}>
              <Text style={styles.heading}>Sign In</Text>
              <Text style={styles.text}>Username</Text>
              <TextInput
              placeholder="Username"
              autoCapitalize="none"
              placeholderTextColor="#023e7d"
              
              style={styles.input}
              />
               <Text style={styles.text}>Username</Text>
               <TextInput
              placeholder="Password"
              autoCapitalize="none"
              placeholderTextColor="#023e7d"
              style={styles.input}
              />
              <Text style={styles.text}>Agree to Term</Text>
              
              
          </View>
       );
   }
}
export default Nativebase;
const styles = StyleSheet.create({
     container:{
       
        
         
     },
     heading:{
      fontSize:40,
      fontWeight:"700",
      marginBottom:19,
      color:"#4d194d"
     },
     input:{
         width:320,
         height:40,
         borderColor:"#023e7d",
         borderWidth:1,
         marginTop:3,
         padding:10,
         marginBottom:20,
         backgroundColor:"#cad2c5",
         fontSize:17
     },
     text:{
         fontWeight:"bold",
         fontSize:18,
         color:"#b9375e"
        
     }
});