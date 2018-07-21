import React, {Component} from 'react'
import {Text, AppRegistry, StyleSheet} from 'react-native'
import ListaItens from './src/ListaItens.js'

export default class App extends Component {
  render(){
    return (
      <ListaItens />
    )
  }
}

AppRegistry.registerComponent('app4', () => App)

const Estilo = StyleSheet.create({
  teste: {
    fontSize: 50
  }
})