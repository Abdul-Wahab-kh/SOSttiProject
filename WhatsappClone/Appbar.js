import React, { Component } from "react";
import {Appbar, Menu} from 'react-native-paper';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

 class AppBar extends Component{

constructor(props){
    super(props);

    this.state ={
    isOpen:false
    }
}
   render(){
       return(
           <>
        <Appbar.Header style={{backgroundColor:"#128C7E",elevation:0,}}>
        <Appbar.Content title="Whatsapp"/>
        <Appbar.Action icon='magnify'/>
    
        <Menu
            visible={this.state.isOpen}
            statusBarHeight={10}
            style={{width:200}}
            contentStyle={{paddingVertical:0}}
            anchor={<Appbar.Action
           icon="dots-vertical"
            color="#fff"
            onPress={() => this.setState({isOpen:true})}
            />
        }
        onDismiss={() => this.setState({isOpen: false})}
        >
            <Menu.Item
              title="New group Screen"
              onPress={() => {
                  this.props.customNavigation.navigate('NewGroup');
                  this.setState({isOpen: false})

              } }
            />
            <Menu.Item title="New broadcast" onPress={() => {}}/>
            <Menu.Item title="Whatsapp Web" onPress={() => {}}/>
            <Menu.Item title="Started message" onPress={() => {}}/>
            <Menu.Item title="settings" onPress={() => {}}/>
        </Menu>
        
    </Appbar.Header>
    </>
    )
  }
}
export default AppBar;