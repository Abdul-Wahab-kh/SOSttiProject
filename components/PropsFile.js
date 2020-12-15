import React from 'react';
import {View,Text} from 'react-native';

const PropsFile = (props) =>{
    return(
        <View>
            <Text onPress={props.updateState}>
                {props.myState}
            </Text>
        </View>
    );
}
export default PropsFile;