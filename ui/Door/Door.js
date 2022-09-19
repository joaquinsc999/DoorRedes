import { View, Text, TouchableOpacity } from 'react-native'
import React, {useState} from 'react'
import {styles} from "./DoorStyle"
import { useStateValue } from '../../StateProvider'

export default function Door({ navigation, name, isOpen, index }) {

  const [{doors}, dispatch] = useStateValue()



  return (
    <TouchableOpacity onPress={() => {
      navigation.navigate('Door config', {name: name, index: index})
      }}>
    <View style={isOpen ? styles.door: styles.doorIslocked}>
      <View style={styles.door__info}>
        <Text style={isOpen ? styles.door__name : styles.door__nameIsLocked}>{name}</Text>
        <View style={isOpen ? styles.door__lock : styles.door__lockIsLocked}></View>
      </View>
    </View>
    </TouchableOpacity>
  )
}