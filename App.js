import React from 'react';
import {  View ,StyleSheet,StatusBar} from 'react-native';
import { Provider,Title,IconButton } from 'react-native-paper';
import { NavigationContainer  } from '@react-navigation/native';
import {createStackNavigator, TransitionPresets} from '@react-navigation/stack';

import Whatsapp from './WhatsappClone/App'
import NewGroupScreen from './WhatsappClone/NewGroupScreen';
//import Nativebase from './components/NativeBase'
//import TextInput from './components/TextInput'
//import List from './components/List';
//import Flexbox from './components/Flexbox'
//import StateFile from "./components/StateFile"
//import Hello from './components/Hello';
const Stack = createStackNavigator();

 function App(){
    return(
      <Provider>
     <View style={styles.container}>
       <StatusBar barStyle= 'light-content'/>
       
       <NavigationContainer>
          <Stack.Navigator
         initialRouteName="WhatsappScreen"
         screenOptions={{
           ...TransitionPresets.SlideFromRightIOS,
           headerStyle: {
             backgroundColor:"#128C7E",
           },
           headerTintColor:"#fff",
         }}
         >
          <Stack.Screen
           name="WhatsappScreen"
           component={Whatsapp}
           options={{
             headerShown:false
           }} 
           />
           <Stack.Screen name="NewGroup"
            component={NewGroupScreen}
             options={{
               headerTitle: () =>(
                 <View>
                   <Title style={{marginTop:-5, color:"#fff"}}>New Group </Title>
                   <Title style={{marginTop:-5, color:"#fff"}}>Add Participants </Title>
                 </View>
               ),
               headerRight: () =>{
                 <IconButton icon="magnify" color="#fff"/>
               }
             }}
            />
         </Stack.Navigator>
       </NavigationContainer>
     </View>
     </Provider>
    );
  }

export default App;


const styles = StyleSheet.create({
  container:{
    flex:1
   
   
  }
})