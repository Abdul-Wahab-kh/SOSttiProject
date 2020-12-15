import React, { Component } from 'react';
import {View,Text, TouchableOpacity} from 'react-native';

class Hello extends Component{
    constructor (){
        super();
        this.rollNoUpdate = this.rollNoUpdate.bind(this)
        this.nameUpdate = this.nameUpdate.bind(this)
        this.fatherNameUpdate = this.fatherNameUpdate.bind(this)
        this.classNameUpdate = this.classNameUpdate.bind(this)
        this.instituteUpdate = this.instituteUpdate.bind(this)
    }
    state = {
        rollno:'------------',
        name : "",
        fatherName: "",
        className : "",
        institue: ""

    }
    rollNoUpdate () {
        this.setState({rollno:10532})
    }
    nameUpdate () {
        this.setState({name:"Abdul Wahab"})
    }
   fatherNameUpdate () {
        this.setState({name:"Abdul Jabbar"})
    }
    classNameUpdate () {
        this.setState({name:"Web And Mobile App Development Course"})
    }
    instituteUpdate () {
        this.setState({name:"SOSTTI"})
    }
            

    render(){
        return(
           <View>
               <Text>Roll No. : {this.state.rollno}</Text>
               <TouchableOpacity onPress={this.rollNoUpdate}>
                   <Text>Update</Text>
               </TouchableOpacity>
               <Text>Name : -----------{this.state.name}</Text>
               <TouchableOpacity onPress={this.nameUpdate}>
                   <Text>Update</Text>
               </TouchableOpacity>
               <Text>Father Name  : ------------{this.state.fatherName}</Text>
               <TouchableOpacity onPress={this.fatherNameUpdate}>
                   <Text>Update</Text>
               </TouchableOpacity>
               <Text>Class : -----------{this.state.className}</Text>
               <TouchableOpacity onPress={this.classNameUpdate}>
                   <Text>Update</Text>
               </TouchableOpacity>
               <Text>Institute : ------------{this.state.institue}</Text>
               <TouchableOpacity onPress={this.instituteUpdate}>
                   <Text>Update</Text>
               </TouchableOpacity>
           </View>
        );
    }
}
export default Hello;