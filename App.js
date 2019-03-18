import React, {Component} from 'react';
import { StyleSheet,Text, View, TextInput, ScrollView} from 'react-native';
import Header from 'components/Header'

const restaurants = [ {name:'React cafe' , address:'1232 ANYWHERE'},
                      {name:'fancy restaurant' , address:'1232 main st'},
                      {name:'fancy restaurant' , address:'1232 main st'},
                      {name:'fancy restaurant' , address:'1232 main st'},
                      {name:'fancy restaurant' , address:'1232 main st'},
                      {name:'fancy restaurant' , address:'1232 main st'},
                      {name:'fancy restaurant' , address:'1232 main st'},
                      {name:'fancy restaurant' , address:'1232 main st'},
                      {name:'fancy restaurant' , address:'1232 main st'},
                      {name:'fancy restaurant' , address:'1232 main st'},
                      {name:'fancy restaurant' , address:'1232 main st'},
                      {name:'fancy restaurant' , address:'1232 main st'},
                      {name:'fancy restaurant' , address:'1232 main st'},
                      {name:'fancy restaurant' , address:'1232 main st'},
                      {name:'fancy restaurant' , address:'1232 main st'},
                      {name:'fancy restaurant' , address:'1232 main st'},
                      {name:'fancy restaurant' , address:'1232 main st'},
                      {name:'fancy restaurant' , address:'1232 main st'},
                      {name:'fancy restaurant' , address:'1232 main st'},
                      {name:'fancy restaurant' , address:'1232 main st'},
                      {name:'fancy restaurant' , address:'1232 main st'},
                      {name:'fancy restaurant' , address:'1232 main st'},
                      {name:'fancy restaurant' , address:'1232 main st'},
                      {name:'fancy restaurant' , address:'1232 main st'},
                      {name:'fancy restaurant' , address:'1232 main st'},
                      {name:'fancy restaurant' , address:'1232 main st'},
                      {name:'fancy restaurant' , address:'1232 main st'},
                      {name:'fancy restaurant' , address:'1232 main st'},
                      {name:'fancy restaurant' , address:'1232 main st'},
                      {name:'fancy restaurant' , address:'1232 main st'},
                      {name:'fancy restaurant' , address:'1232 main st'},
                      {name:'fancy restaurant' , address:'1232 main st'},
                      {name:'fancy restaurant' , address:'1232 main st'},
                      {name:'fancy restaurant' , address:'1232 main st'},
                      {name:'Taco place' , address:'550 mavel'}
                    ]


export default class App extends Component {
  state={
    search:null
  }
  render() {
    return (
      <View style={{backgroundColor:"orange",flex:1}}>
      <Header/>
        <TextInput style={styles.input} placeholder="Live search" onChangeText={text=>{this.setState({search:text})}} value={this.state.search}/>
        <ScrollView contentContainerStyle={{
          paddingTop:30
        }}>
        {
          restaurants.filter(place=>{
            return !this.state.search || place.name.toLowerCase().indexOf(this.state.search.toLowerCase()) > -1
          }).map((place,index)=>{
            return(
              <View key={[place.name,{backgroundColor:index %2 === 0?'white':'#f3f3f7'}]} style={styles.row}>
              <View style={styles.edges}><Text>{index+1}</Text></View>
              <View style={styles.nameAddress}>
                <Text>{place.name}</Text>
                <Text style={styles.addressText}>{place.address}</Text>
              </View>
              <View style={styles.edges}><Text>Info</Text></View>
              </View>
              )
          })
        }
        </ScrollView>
      </View>
    );
  }
}


const styles = StyleSheet.create({
  row:{
    flexDirection:"row"
  },
  edges:{
    flex:1, 
    alignItems:"center", 
    justifyContent:"center",
    padding:5
  },
  nameAddress:{
    flexDirection:"column",
    flex:8
  },
  addressText:{
    color:'grey'
  },
  input:{
    padding:10,
    paddingHorizontal:20,
    fontSize:16,
    color:'#444',
    borderBottomWidth:1,
    borderColor:'#ddd',
    backgroundColor:'#f5f5f5'
  }
})