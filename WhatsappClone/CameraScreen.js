import React,{useCallback} from 'react';
import {View,Text} from 'react-native';
import { useFocusEffect } from "@react-navigation/native";
function CameraScreen ({changeScreen}){
  useFocusEffect(
    useCallback(()=>{
      changeScreen(null)
    },[])
  )
    return(
        <View>
          <Text>Wellcome to Camera Scree</Text>
        </View>
    )
}
export default CameraScreen;