import React, { Component } from 'react';
 
import { StyleSheet, Text, View,ImageBackground,TouchableOpacity ,Alert,Image} from 'react-native';
let item1='';
let add=0;
export default class detail extends Component{
 constructor(props){
   super(props);
   this.state={
       data:'',
       add:0

   }
 
 }
 componentDidMount(){
 item1= this.props.navigation.getParam("item1")
console.log("item1",item1)
this.setState({data:item1})

 }
 plus(){
     add++
this.setState({add:add})
     console.log("add",add)
 }
 minus(){
   if(add >0 ){
         add--
         this.setState({add:add})
         console.log("add",add)
   }
 }
  render() {
    console.log("add",add)
   console.log("mainitem",this.state.data)
   const{data}=this.state
    return (
    <View
    style={styles.container}
    >
        <View
        style={styles.name}
        >
            <Text
            style={styles.name1}
            >{data.name}
                </Text>
        </View>
        <View
        style={styles.image}
        >
            <Image
            
            source={{uri:data.image}}
style={styles.image1}
            />
        </View>
        <View
        style={styles.description}
        >
            <Text
            style={styles.description1}
            >{data.description}</Text>
        </View>
        <View
        style={styles.text}
        >
            <Text
            style={styles.description1}
            >Color:{data.color}</Text>
        </View>
        <View
        style={styles.text}
        >
            <Text
            style={styles.description1}
            >Price:{data.price}</Text>
        </View>

       <View
       style={{flex:0.1,flexDirection:'row',justifyContent:'center',alignItems:'center'}}
       >
           <View
           style={{height:50,backgroundColor:'red',width:150,borderRadius:16,flexDirection:'row'}}
           >
               <TouchableOpacity
                onPress={() => this.plus()}
               style={{flex:0.3,justifyContent:'center',alignItems:'center'}}
               >
                   <Text
                   style={{color:'white',fontSize:20}}
                   >+</Text>
               </TouchableOpacity>
               <View
               style={{flex:0.4,justifyContent:'center',alignItems:'center'}}
               >
               <Text
                style={{color:'white',fontSize:20}}
               > {this.state.add}</Text>
              </View>
               <TouchableOpacity
                 onPress={() => this.minus()}
               style={{flex:0.3,justifyContent:'center',alignItems:'center'}}
               >
                   <Text
                   style={{color:'white',fontSize:20}}
                   >-</Text>
               </TouchableOpacity>
           </View>
       </View>
            <TouchableOpacity
           
            onPress={() => this.plus()}
            style={{flex:0.1,backgroundColor:'red'}}
            ></TouchableOpacity>
          <TouchableOpacity
           
           onPress={() => this.minus()}
           style={{flex:0.1,backgroundColor:'green'}}
           ></TouchableOpacity>

    </View>
     
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
   
  },
  name:{
      flex:0.20,justifyContent:'center',alignItems:'center'
  },
  name1:{
      fontSize:25,fontWeight:'bold',textAlign:'center'
  },
  image:{
      flex:0.2,justifyContent:'center',alignItems:'center'
  },
  image1:{
     height:100,width:100
  },
  description:{
      flex:0.2,justifyContent:'center',alignItems:'center'
  },
  description1:{
      textAlign:'center',fontSize:17
  },
  text:{
      flex:0.04,alignItems:'center'
  }
});