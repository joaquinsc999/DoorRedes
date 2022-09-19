import { SafeAreaView, StyleSheet } from 'react-native'
import React from 'react'
import BarScanner from '../../components/BarScanner/BarScanner';
import { useIsFocused } from '@react-navigation/native';


export default function BarScannerScreen({route, navigation}) {
    const isFocused = useIsFocused()
  return (
    <SafeAreaView style={styles.container}>
        {isFocused ? <BarScanner navigation={navigation}/>: null}
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