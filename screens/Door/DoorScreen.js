import { SafeAreaView, StyleSheet } from 'react-native'
import React from 'react'
import DoorConfig from '../../components/DoorConfig/DoorConfig'

export default function DoorScreen({route, navigation}) {
  return (
    <SafeAreaView style={styles.container}>
      <DoorConfig route={route} navigation={navigation}/>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#eee',
      alignItems: 'center',
      justifyContent: 'center',
    },
  
  });