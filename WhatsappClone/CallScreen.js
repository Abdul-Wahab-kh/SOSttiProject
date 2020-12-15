import React, { useCallback } from 'react';
import {ScrollView,View,Text} from 'react-native';
import { Avatar, Divider, List } from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons'
import { useFocusEffect } from "@react-navigation/native";
function CallScreen() {
    useFocusEffect(
        useCallback(()=>{
          changeScreen('call')
        })
      );
 
        calls=[
            {
                name:"John Doe",
                timestamp:"1606816000",
                times:2,
                call:'missed',
                callType:'audio'
            },
            {
                name:"Adnan",
                timestamp:"16068150",
                times:8,
                call:'dialed',
                callType:'audio'
            },
            {
                name:"sajid khan",
                timestamp:"1606814000",
                times:1,
                call:'recieved',
                callType:'video'
            }
        ]

        return(
            <ScrollView>
               {calls.map((data,index)=>(
                <View key={index}>
                 <List.Item
                 title={data.name}
                 description={()=>(
                     <View style={{flex:1,flexDirection:"row"}}>
                        {
                            data.call === 'missed' ?(
                                <Icon name="call-missed" color='#f00'/>
                            ):data.call === 'recieved' ?(
                                <Icon name="call-recieved" color='#25d366'/>
                            ) : (
                              <Icon name="made-call" color="#25d366"/>
                            )}
                           { data.times > 1 ? <Text>{'('+data.times+')'}</Text>:null}
                           <Text>{new Date(data.timestamp).toLocaleDateString()}</Text>
                     </View>
                 )}
                 left={() => <Avatar.Image source={{uri:`http://ui-avatars.com/api/?name=${data.name}`}}/>}
                 right={() =>
                data.callType === 'audio' ?(
                   <Icon name='phone'  color="#25D366" size={28}/>
                ) : (
                    <Icon name='video'  color="#25D366" size={28}/>
                )
              

                }
                 />
                 <Divider/>
                </View>
        ))}
            </ScrollView>
        )
    }
  

export default CallScreen;