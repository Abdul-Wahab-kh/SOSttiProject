import React, { Component } from 'react';
import {View,Text,TouchableOpacity,StyleSheet} from 'react-native';

class List extends Component{
    state = {
        nameList:[
            {
                id:0,
                name:"Ms Office ",
                fees:2000
            },
            {
                id:1,
                name:"Photoshop",
                fees:5000
            },
            {
                id:2,
                name:"Web Designing",
                fees:10000
            },
            {
                id:3,
                name:"Web Development",
                fees:20000
            }
        ]
    }
    alertid = (item) =>{
      alert(item.fees)
    }
    render(){
        return(
            <View>
              {
                  this.state.nameList.map((item)=>(
                     <TouchableOpacity
                       key={item.id}
                       onPress={()=>this.alertid(item)}
                       style={styles.container}
                     >
                         <Text style={styles.text}>
                             {item.name}
                         </Text>
                     </TouchableOpacity>
                  ))
              }
            </View>
        )
    }
}
export default List;
const styles = StyleSheet.create({
    container:{
      padding:20,
      margin:5,
      backgroundColor:"blue"
    },
    text:{
        color:"#fff",
        fontWeight:"bold",
        fontSize:22
    }
})