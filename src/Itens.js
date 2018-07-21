import React, {Component} from 'react'
import {Text,ScrollView, StyleSheet, Button, Alert} from 'react-native'


export default class Itens extends Component {

  callPhone(){
    Alert.alert(`Confirma ligação para ${this.props.anuncio.name}?`)
  }
  render(){
    return (
     <ScrollView contentContainerStyle={containerScroll}>
        <Text style={textStyle}>{this.props.anuncio.name}</Text>
        <Text>{this.props.anuncio.username}</Text>
        <Text style={emailStyle}>{this.props.anuncio.email}</Text>
        <Text>{this.props.anuncio.address.street}</Text>
        <Text>{this.props.anuncio.address.suite}</Text>
        <Text>{this.props.anuncio.address.city}</Text>
        <Text>{this.props.anuncio.address.zipcode}</Text>
        <Button title={"Chamar"} onPress={() => this.callPhone()}/>
     </ScrollView>
    )
  }
}

const Estilo = StyleSheet.create({
  containerScroll: {
    marginTop: 20,
    marginLeft: 10,
    justifyContent: 'flex-start',
    flex: 0.5,
    borderWidth: 0.5,
    borderColor: 'grey'
  },
  textStyle: {
    fontSize: 20,
    fontWeight: 'bold'
  },
  emailStyle: {
    color: 'blue'
  }
  })

const {containerScroll, textStyle, emailStyle} = Estilo
