import React, {Component} from 'react'
import {Text, StyleSheet} from 'react-native'

export default class ListaItens extends Component {
  render(){
    return (
      <Text style={Estilo.teste}>Teste de Lista Itens</Text>
    )
  }
}

const Estilo = StyleSheet.create({
    teste: {
      fontSize: 50
    }
  })