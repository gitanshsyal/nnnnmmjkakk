
// import React, {Fragment} from 'react';
// import {
//   SafeAreaView,
//   StyleSheet,
//   ScrollView,
//   View,
//   Text,
//   StatusBar,
// } from 'react-native';

// import {
//   Header,
//   LearnMoreLinks,
//   Colors,
//   DebugInstructions,
//   ReloadInstructions,
// } from 'react-native/Libraries/NewAppScreen';



// export default class App extends React.Component{
 
//     static navigationOptions = {
//         title: 'Signup',
//       };
//     render(){
//       return(
//   <View>
  
//   </View>
//       );
//     }
//   }

/////////////////////////////////////////////////////////

import React, { Component } from 'react';
 
import { StyleSheet, Text, View,ImageBackground,TouchableOpacity ,Alert} from 'react-native';
import {Customheader} from './Mainscreen'
export default class Order extends Component{
 constructor(props){
   super(props);
   this.state={
     data:''
   }
 }
  render() {
   
   
    return (
    
      <View style={styles.container}>
        

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
   
  }
});