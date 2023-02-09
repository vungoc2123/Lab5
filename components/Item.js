import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Item = (props) => {
  return (
    <View style={{backgroundColor:'#33CC66', margin:40, alignItems:'center'}}>
      <Text style={{color:'white',fontSize:30,padding:10}}>{props.title}</Text>
    </View>
  )
}

export default Item

const styles = StyleSheet.create({})