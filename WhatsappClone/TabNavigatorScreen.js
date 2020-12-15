import React, {  useState } from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs'
import CallScreen from './CallScreen';
import ChatScreen from './ChatScreen';
import StatusScreen from './StatusScreen';
import { StyleSheet, View } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import CameraScreen from './CameraScreen';
import Appbar from "./Appbar";
import { FAB } from 'react-native-paper';
const Tab = createMaterialTopTabNavigator();

function TabNavigator ({navigation}){
    const [activeScreen, setActiveScreen] = useState('Chat');

    
   const changeScreen = (name) =>{
       setActiveScreen(name)
   }
        
    return(
     <View style={{flex:1}}>
       <Appbar customNavigation={navigation}/>
       <Tab.Navigator
       tabBarPosition="top"
       initialRouteName="Chat"
       tabBarOptions={{
               style:{
                backgroundColor:"#128C7E",  
               },
               showIcon: true,
               inactiveTintColor:"#ffffff66",
               activeTintColor:"#fff",
           }}
           >
           <Tab.Screen name="Camera" 
           options={{tabBarLabel:({color})=>
           <Icon size={24} name="Camera" color={color} />
        }}>
            {()=><CameraScreen changeScreen={changeScreen}/>}
        </Tab.Screen>
            <Tab.Screen name="Chat">
                {()=><ChatScreen changeScreen={changeScreen}/>}
                </Tab.Screen> 
            <Tab.Screen name="Status">
            {()=><StatusScreen changeScreen={changeScreen}/>}
            </Tab.Screen>
            <Tab.Screen name="Call" >
            {()=><CallScreen changeScreen={changeScreen}/>}
            </Tab.Screen>
       </Tab.Navigator>
             {activeScreen === "Chat"?
             <FAB
                 icon="comment-text-outline"
                 color = "#fff"
                 style={styles.fab}
                 />
                 : activeScreen === "Status"?
                 <FAB
                 icon="camera"
                 color = "#fff"
                 style={styles.fab}
                 />
                 :activeScreen === "Call"?
                 <FAB
                      icon="comment-text-outline"
                      color = "#fff"
                      style={styles.fab}
                 />
                 :null
            }
    
    </View>
     );
    }
    
    export default TabNavigator;
    const styles = StyleSheet.create({
        fab:{
            position:"absolute",
            right:0,
            bottom:0,
            margin: 20,
            backgroundColor:"#25d366"
        }
    })