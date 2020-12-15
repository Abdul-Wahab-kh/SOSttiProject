import React from 'react';
import {View, Text} from 'react-native';

function ChatRoom({route}){
    const {name} =route.params;
       return(
           <View>
               <Text>
                   {name}
               </Text>
           </View>
       )
}
export default ChatRoom;