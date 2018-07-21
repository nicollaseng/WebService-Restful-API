import React, {Component} from 'react'
import {Text, View} from 'react-native'
import Itens from './Itens'
import axios from 'axios'

export default class ListaItens extends Component {
  constructor(props){
    super(props)

    this.state ={
      listaItens: []
    }
  }
  componentWillMount(){
    axios.get('https://jsonplaceholder.typicode.com/users')
    .then(response => this.setState({listaItens: response.data}))
    .catch(() => console.log('Erro'))
  }
  render(){
   return(
     <View>
       {this.state.listaItens.map(item => (<Text>{item.email}</Text>))}
    </View>
   )
  }
}
