import React, { Component } from 'react';
import {View,Text, TextInput,TouchableOpacity,StyleSheet} from 'react-native';

class InputText extends Component{
    state={
        email:'',
        password:''
    }
        handleEmail =(text) =>{
            this.setState({email:text})
        }
        handlePassword =(text) =>{
            this.setState({password:text})
        }
        login = (email,pass) =>{
          alert('Email:' + email +  'Password:' + pass);
        }
    render(){
        return(
            <View >
                <TextInput
                 underlineColorAndroid="transparent"
                 placeholder="email"
                 autoCapitalize="none"
                 placeholderTextColor="#9a73ef"
                 onChangeText={this.handleEmail}
                />
                <TextInput
                underlineColorAndroid="transparent"
                placeholder="Password"
                placeholderTextColor=" #9a73ef"
                autoCapitalize="none"
                secureTextEntry
                onChangeText={this.handlePassword}
                />
                <TouchableOpacity onPress={()=>this.login(this.state.email,this.state.password)}>
                    <Text>
                        Submit
                    </Text>
                </TouchableOpacity>
            </View>
        )
    }
}
export default InputText;