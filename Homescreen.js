
import React, { Fragment } from 'react';
import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    Text,
    StatusBar,
    Image,
    AsyncStorage,
    TouchableOpacity,ImageBackground
} from 'react-native';


import SplashScreen from 'react-native-splash-screen';
import {Imgs} from './Imgs'

export class Button extends React.Component{
    constructor(props){
        super(props);
    }

     componentDidMount(){
     AsyncStorage.getItem('token').then((token) => {
        var  userToken=token
          console.log("tokenmain",userToken)
    //        if(userToken != null){
    //            this.props.navigation.navigate('Mainscreen')
            
          })
 }
render(){

    const {name,color,size,colortxt,colorborder} = this.props
    return(

        <TouchableOpacity style={{flex:1, justifyContent:'center',alignItems:'center',borderRadius:30, margin:20,borderWidth:2, backgroundColor:color,borderColor:colorborder}}   onPress={() => this.props.UniqueFunction()}>
        <Text style={{ fontSize: 20,fontWeight:'bold',color:colortxt, }}>
            {name}
        </Text>
    </TouchableOpacity>

    )
}
}

export default class App extends React.Component {
    componentDidMount() {

        SplashScreen.hide();
    }
    // static navigationOptions = {
    //     title: 'Welcome',
    //   };

    render() {
        return (
            <View style={{ flex: 1}}>
                <View
                style={{flex:0.6,justifyContent:'center',alignItems:'center'}}
                >
                   <ImageBackground source={Imgs.Homegif} style = {{width: 315, height: 383}} />


                </View>
                
              
                
                <View style={{flex:0.3}}>
                    <View style={{flex:1}}>
                     
                        <Button
                    UniqueFunction={() => this.props.navigation.navigate('Login')}
                        color="red"
                        size='1'
                        colortxt='white'

                        name="Login"/>
                        <Button
                        UniqueFunction={() => this.props.navigation.navigate('Signup')}
                             color="red" 
                             size='0.5'
                             colortxt="white"
                           
                        name="Signup"/>

                

                    </View>
                    
               
                </View>

                </View>

           
        );
    }
}
const styles = StyleSheet.create({
//   buttonview: {
//     flex:0.2,justifyContent:'center',alignItems:'center',borderRadius:30,
//     margin:20,backgroundColor:colors
//   },
  buttonview2: {
    flex:0.2,justifyContent:'center',alignItems:'center',borderRadius:30,
    margin:20,backgroundColor:'pink'
  },
})