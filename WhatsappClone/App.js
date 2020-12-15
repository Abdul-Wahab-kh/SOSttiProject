import React from 'react';
import { View, Text } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";

import ChatRoom from './ChatRoom';
import TabNavigator from './TabNavigatorScreen';

  
const TabStack = createStackNavigator();

function App (){
    return(
        <View style={{flex:1}}>
            <TabStack.Navigator
            initialRouteName="Main"
            >
                <TabStack.Screen
                name="Main"
                component = {TabNavigator}
                options={{
                    headerShown:false
                }}
                />
                 <TabStack.Screen
                name="ChatRoom"
                component = {ChatRoom}
                options={({route})=>({
                    title:route.params.name,
                    headerTintColor:"#fff",
                    headerStyle:{
                        backgroundColor:"#128C7E"
                    }
                })}
                
                />
            </TabStack.Navigator>
        </View>
    )
}
export default App;

   