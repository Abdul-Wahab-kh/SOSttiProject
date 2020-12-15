import React, { Component } from 'react';
import {View} from 'react-native';
import PropsFile from './PropsFile';

class StateFile extends Component{
    state={
        PropState:"Video provides a powerful way to help you prove your point. When you click Online Video, you can paste in the embed code for the video you want to add. You can also type a keyword to search online for the video that best fits your document."
    }
    PropStateUpdate = () =>{
        this.setState({
            PropState:"Update......."
        });
    }
    render(){
        return(
            <View>
               <PropsFile myState={this.state.PropState} updateState={this.PropStateUpdate}/>
            </View>
        );
    }
}
export default StateFile;