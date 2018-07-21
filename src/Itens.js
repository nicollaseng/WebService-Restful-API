import React, {Component} from 'react'
import {Text, StyleSheet,Image} from 'react-native'


export default class Itens extends Component {

  render(){
    return (
     <View>
        <Text>{this.props.anuncio.title}</Text>
        <Image source={{uri: this.props.anuncio.url}} style={{width:100,height:100}}/>
     </View>
    )
  }
}

