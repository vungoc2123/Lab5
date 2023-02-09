import { StyleSheet, Text, View ,FlatList} from 'react-native'
import React from 'react'
import Item from './Item'
const Data=[
    {
        id: '1',
        title: 'First Item',
    },
    {
        id: '2',
        title: 'Second Item',
    },
    {
        id:'3',
        title:'Third Item'
    }
    
]
    

const FuFlatList = () => {
  return (
    <View>
      <FlatList 
      data={Data} 
      renderItem={({item})=> <Item title={item.title}/>}
      />
    </View>
  )
}

export default FuFlatList

const styles = StyleSheet.create({})