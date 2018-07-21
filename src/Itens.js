import React, {Component} from 'react'
import {Text, StyleSheet} from 'react-native'
import axios from 'axios'

export default class Itens extends Component {

  componentWillMount(){
    return axios
      .get('https://jsonplaceholder.typicode.com/photos')
      .then(response => {console.log(response)})
      .catch(error => console.log(error))
  }

  render(){
    return (
     <Text style={Estilo.teste}>Itens</Text>
    )
  }
}

const Estilo = StyleSheet.create({
    teste: {
      fontSize: 50
    }
  })