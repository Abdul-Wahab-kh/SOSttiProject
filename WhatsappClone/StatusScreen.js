import React, { useCallback } from 'react';
import {ScrollView, View,Text} from 'react-native';
import { Avatar, Badge, Divider, IconButton, List } from 'react-native-paper';
import useFocusEffect from '@react-navigation/native'



        
  function StatusScreen (changeScreen){
            useFocusEffect(
                useCallback(()=>{
                  changeScreen('Status')
                },[])
              ) 
        return(
            <ScrollView style={{flex:1}}>
                 <List.Item
                 title= "My Status"
                 description="Just now"
                 left = {() =>(
                    <View style={{position:"relative"}}>
                        <Avatar.Image source={{uri:"https://ui-avatars.com/api/?name= &background=ddd"}}/>
                        <Badge style={{
                            position:"absolute",
                            bottom:0,
                            right:0,
                            fontSize:14,
                            backgroundColor:"#25d366",
                            color:"#fff"
                        }}>+</Badge>
                        </View>
                         )}
                        right = {()=> <IconButton icon="dots-horizontal" color="#333"/>}
                        />
                        <Divider/>
                        <List.Section style={{marginTop:0}}>
                            <List.Subheader  style={{paddingVertical:8,backgroundColor:"ddd"}}>
                               Recent Update
                            </List.Subheader>
                        
                        <Divider/>
                        <List.Item
                        title="John Doe"
                        description={new Date().toLocaleDateString()}
                        left={() => <Avatar.Image source={{uri:'https://ui-avatars.com/api/?name=John+Doe'}}/>}
                        />
                        </List.Section>
            </ScrollView>
        )
    }
    

export default StatusScreen;