import React,{useCallback} from 'react';
import { useFocusEffect } from '@react-navigation/native';
import {View,ScrollView,Text} from 'react-native';
import { Avatar, Badge, Divider, List } from 'react-native-paper';
  
     const   ListItem = [
        {
        name:"John Doe",
        unreadmsg:7
        },
        {
         name:"Adnan",
         unreadmsg:4
        },
        {
          name:"Sajjad",
          unreadmsg:9
         },
           {
            name:"Ahmed",
            unreadmsg:null
         },
         {
         name:"Sajid",
         unreadmsg:null
         },
         {
          name:"SaeedAli",
          unreadmsg:null
          },
          {
            name:"Sarwar Khan",
            unreadmsg:9
           },
             {
              name:"Ahmed Gul",
              unreadmsg:null
           },
           {
           name:"Sabir",
           unreadmsg:null
           },
           {
            name:"SaeedAhmed",
            unreadmsg:null
            }
        ]
   
    
 function ChatScreen ({changeScreen, navigation}){
   useFocusEffect(
     useCallback(()=>{
       changeScreen('chat')
     })
   );
        return(
            <ScrollView>
               {
                  ListItem.map((data,index)=> 
                        key={index}>
                        <List.Item
                        title={data.name}
                        description="last message"
                        left={()=><Avatar.Image source={{uri:`https://ui-avatars.com/api/?name=${data.name}`}} />}
                    
                       right={()=>
                       <View>
                           <Text>{new Date().toLocaleDateString()}</Text>
                           {data.unreadmsg!==null?
                           <Badge size={20} style={{backgroundColor:"#25d366",margin:10,color:"#fff"}}>{data.unreadmsg}</Badge>
                            :null}
                       </View>}
                          onpress={() => navigation.navigate("ChatRoom",{
                            name: data.name
                          })}
                         
                           />
                   ) }  
                        
                </ScrollView> 
        )

}
export default ChatScreen;