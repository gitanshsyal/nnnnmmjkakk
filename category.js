
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

import { StyleSheet, Text, View, ImageBackground,ActivityIndicator, FlatList, Image, TouchableOpacity, Modal } from 'react-native';
import { Imgs } from './Imgs';
let category_name = '', category_id = '';
import { BASEURL } from '..';
import { CheckBox } from 'react-native-elements'

export default class category extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name: '',
      categorylist: '',
      loading: true,
      modalVisible: false,
      modallist:'',
      ischecked:false,
      data:
       [
        {
          id: 0, name: 'Svmsung', url: Imgs.slider5,
          items: [
            {
              id: 1, name: 'Samsung s7'
            },
            {
              id: 2, name: 'Samsung s8'
            },
            {
              id: 3, name: 'Samsung s9'
            },
            {
              id: 4, name: 'Samsung s10'
            }
          ]
          ,
        }, {

          id: 1, name: 'Nokia', url: Imgs.slider5,
          items: [
            {
              id: 1, name: 'Nokia s7'
            },
            {
              id: 2, name: 'Nokia s8'
            },
            {
              id: 3, name: 'Nokia s9'
            },
            {
              id: 4, name: 'Nokia s10'
            }
          ]
          ,
        },
        {
          id: 2, name: 'Mi', url: Imgs.slider5,
          items: [
            {
              id: 1, name: 'Samsung s7'
            },
            {
              id: 2, name: 'Samsung s8'
            },
            {
              id: 3, name: 'Samsung s9'
            },
            {
              id: 4, name: 'Samsung s10'
            }
          ]
          ,
        },
        {
          id: 3, name: 'Lava', url: Imgs.slider5,
          items: [
            {
              id: 1, name: 'Samsung s7'
            },
            {
              id: 2, name: 'Samsung s8'
            },
            {
              id: 3, name: 'Samsung s9'
            },
            {
              id: 4, name: 'Samsung s10'
            }
          ]
          ,
        },
        {
          id: 4, name: 'Appo', images: require('../src/images/slider1.jpg'),
          items: [
            {
              id: 1, name: 'Samsung s7'
            },
            {
              id: 2, name: 'Samsung s8'
            },
            {
              id: 3, name: 'Samsung s9'
            },
            {
              id: 4, name: 'Samsung s10'
            }
          ]
          ,
        },
      ],
    }

  }
  setModalVisible(visible) {
    this.setState({ modalVisible: visible });
  }
  detail(item){
    console.log("detail",item)

    
    this.props.navigation.navigate('detail',{item1:item})
  }
  componentDidMount() {
    category_id = this.props.navigation.getParam("id")
    category_name = this.props.navigation.getParam("name")
    console.log('category_id', category_id)
    console.log('category_name', category_name)
    this.setState({ name: category_name })
    console.log("api is", BASEURL + 'viewitem')
    fetch(BASEURL + 'viewitem', {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
        //  'Authorization': 'Bearer '+userToken
      },
      body: JSON.stringify({
        category_id: category_id



      }),
    }).then((response) => response.json())
      .then((responseJson) => {
      
        console.log("reponsedata", responseJson.data)
     
        this.setState({ categorylist: responseJson.data, loading: false, })
        this.setState({modallist: responseJson.data})
        
      //   for(let i=0;i<this.state.modallist.data.length;i++){
      //   console.log("this",this.state.modallist[i].id)
      //   var object =this.state.modallist[i] ;
      //   object["ischecked"] = false
      //   // object["aa"]= "bsbdaasbdjksbij"
      //   this.state.modallist[i] = object
      //  // this.state.modallist[i].ischecked==false
      //  console.log("this",this.state.modallist)
      //   }
      //   //this.setState({modallist:modallist})
      //   console.log("flatdata", this.state.categorylist)
      // 
    }
      )
      .catch((error) => {
         console.error(error);
      }
      )

  }
  rendermodal(item){
    console.log("modalitem",item)
    return(
      <View
      style={{flex:1}}
      >
              <CheckBox
        title={item.item.name}

        checked={item.item.ischecked}
        onPress={() => this.GetFlatListItem(item)}
      />

      </View>
    )
  }
  renderitem(item) {
     console.log("list of item", item)
    // const list = item.item.name
    // console.log("list of image", item.item.image)
    // const image = item.item.image
   // console.log("item", item.item.items)
    return (
      <View 
      key={item.index}
      style={{ flex: 1 }}>
        <View style={{ height: 100, width: '100%', backgroundColor: '#EDEAE0', margin: 4, borderRadius: 18, elevation: 5 }}>

          {/* {
 image==null?
 <Image source={Imgs.profileicon}  
 style={{width: 60, height: 60}} />
 :
 <Image source={{uri:image}}  
 style={{width: 60, height: 60}} />
} */}
          <View
            style={{ flex: 1, flexDirection: 'row' }}
          >
            <View
              style={{ flex: 0.2, justifyContent: 'center', alignItems: 'center' }}
            >
              <Image
                 source={{uri:item.item.image}}  
                style={{ width: 60, height: 60, backgroundColor: 'red', borderRadius: 30,padding:10 }} />
            </View>
            <View
              style={{ flex: 0.6, justifyContent: 'center', alignItems: 'center' }}
            >
              <Text style={{ fontSize: 22, fontWeight: 'bold' }}>
               {item.item.name}
              </Text>
            </View>
          </View>



        </View>


        <View style={{ flex: 1}}>
       {item.item.item !=null ?item.item.item.map(i=>
          <TouchableOpacity
          key={i.id}
          style={{flex:1,backgroundColor:'#FFFFF0',margin:5,padding:10,borderRadius:15,elevation:5,flexDirection:'row'}}
          onPress={() => this.detail(i)}
        >
          <View style={{flex:0.2}}>
          <Image
          source={{uri:i.image}}  
          style={{ width: 60, height: 60, backgroundColor: 'blue', borderRadius: 30 }} />
          </View>

          <View style={{flex:0.5}}>
          <Text
            style={{fontSize:18,fontWeight:'bold', color: 'black' }}
          >{i.name}</Text>
          <Text>
          {i.color}
          </Text>
          <Text>
        {i.created_at}
          </Text>
          </View>
          <View style={{flex:0.3}}>
            <Text style={{fontSize:15,fontWeight:'bold',textAlign:'right'}}>
              {i.price}
            </Text>

          </View>
            
         
        </TouchableOpacity>
       )
      :null
      }
           
           
           
        </View>

      </View>

    )
  }
  render() {
    if(this.state.loading){
      return( 
        <View style={styles.loader}> 
          <ActivityIndicator size="large" color="#0c9"/>
        </View>
    )}
    console.log("name", category_name)
    return (
      <View style={styles.container}>
        <Modal
          animationType="slide"
          transparent={false}

          visible={this.state.modalVisible}
          onRequestClose={() => {
            Alert.alert('Modal has been closed.');
          }}>
          <View style={{ flex: 1, backgroundColor: '#EDEAE0', margin: 10, borderRadius: 20, marginTop: 26 }}>
            <View
              style={{ flex: 0.1, flexDirection: 'row' }}
            >
              <View
                style={{ flex: 0.8, justifyContent: 'center', alignItems: 'center' }}
              >
                <Text
                  style={{ fontSize: 29, fontWeight: 'bold' }}
                >{category_name}</Text>
              </View>

              <TouchableOpacity
                style={{ flex: 0.2, justifyContent: 'center', alignItems: 'center' }}
                onPress={() => {
                  this.setModalVisible(!this.state.modalVisible);
                }}>
                <Text style={{backgroundColor:'black',padding:8,borderRadius:100, fontSize: 18, fontWeight: 'bold',color:'white' }}>X</Text>
              </TouchableOpacity>
              
            </View>
{this.state.categorylist != null ? <View
  style={{ flex: 0.9 }}
>

  <FlatList style={{ margin: 5 }}


    data={this.state.categorylist}
    keyExtractor={(item, index) => index}
    renderItem={(item) => this.rendermodal(item)}
  />

</View> : <Text>Sorry no data</Text>
}



          </View>
        </Modal>
        <View
          style={{ flex: 0.1, justifyContent: 'center', alignItems: 'center', flexDirection: 'row' }}
        >
          <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', flexDirection: 'row' }}>
            <View style={{ flex: 0.8, justifyContent: 'center', alignItems: 'center' }}>
              <Text
                style={{ fontSize: 30, fontWeight: 'bold' }}
              >{category_name}</Text>
            </View>

            <TouchableOpacity
              onPress={() => { this.setModalVisible(true) }}
              style={{ flex: 0.2 }}>
              <Image source={Imgs.logo} style={{ height: 50, width: 50 }} />
            </TouchableOpacity>


          </View>



        </View>
        {this.state.categorylist != null ? <View
          style={{ flex: 0.9 }}
        >

          <FlatList style={{ margin: 5 }}


            data={this.state.categorylist}
            keyExtractor={(item, index) => item.index}
            renderItem={(item) => this.renderitem(item)}
          />

        </View> : <Text>Sorry no data</Text>
        }

      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,

  },
  loader:{
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#fff"
   },
});