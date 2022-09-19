import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, Button, Alert, TextInput, TouchableOpacity } from 'react-native';
import { BarCodeScanner } from 'expo-barcode-scanner';
import Header from '../../ui/Header/Header'
import { styles } from './BarScannerStyles'
import axios from 'axios'
import { useStateValue } from '../../StateProvider';




const BarScanner = ({navigation}) => {

    const [{user, doors}, dispatch] = useStateValue()


    const [uniqueIdInput, setUniqueIdInput] = useState(null)

    const onChangeText = (text) => {
        setUniqueIdInput(text)
      }
    
    const validateIfDoorHasOwner = async () => {
        const response = await axios.post('https://limitless-ravine-19519.herokuapp.com/doesDoorHaveOwner', {uniqueId: uniqueIdInput})
        return response.data
    }

    const hasDoorOwner = async () => {
        const uniqueId = await axios.get(`https://cloud.arest.io/${uniqueIdInput}/id?key=gf1e78qn3qwyc8q6`)  
        const hasOwner = await validateIfDoorHasOwner(uniqueId.data.id)
        return [hasOwner, uniqueId]
    }

    

      const handleSend = () => {
        hasDoorOwner().then((response) => {
            const [responseOwner, responseUniqueId] = response
            if (responseUniqueId.data.id) {
                if (responseOwner.owner) {
                    alert('La puerta ya tiene dueño')
                } else {
                    Alert.alert(
                        responseUniqueId.data.id,
                        "Te gustaria añadir esta puerta?",
                        [
                          {
                            text: "Sí",
                            onPress: () => {
                                const handleUserRequestToBeOwner = async () => {
                                    try {
                                        const response = await axios.post('https://limitless-ravine-19519.herokuapp.com/establishDoorOwner', {uniqueId: responseUniqueId.data.id, username: user.username})
                                        if (!response.data.error) {
                                            alert("La puerta fue añadida exitosamente")
                                            const refreshUserDoors = async () => {
                                                try {
                                                    const response = await axios.post("https://limitless-ravine-19519.herokuapp.com/getUserDoors", {username: user.username})
                                                    const doors = response.data.doors.map(door => {
                                                        return {
                                                        ...door,
                                                        ['isOpen']: false
                                                        }
                                                    })
                                                    dispatch({
                                                        doors: doors,
                                                        type: 'initialDoorConfig'
                                                    })
                                                    navigation.navigate('Home')
                                                } catch (err) {
                                                    console.log(err)
                                                }
                                                
                                            }
    
                                            refreshUserDoors()
                                        } else {
                                            alert("No pudimos añadir su puerta, intente es unos momentos.")
                                        }
                                    } catch (err) {
                                        console.log(err)
                                    }
                                    
                                }
                                handleUserRequestToBeOwner()
                            },
                            style: "cancel"
                          },
                          { text: "No", onPress: () => console.log("No Pressed") }
                        ]
                      );
                } 
            } else {
                Alert.alert(
                    'No encontrada',
                    'Lo sentimos mucho no encontramos ningún dispositivo fabricado con ese nombre.',
                    [
                        {
                            text: 'Ok'
                        }
                    ]
                )
            }
            
        })
        .catch(err => {
            console.log(err)
        })
      };
    

  return (
    <>
    <View style={styles.barScanner__contentContainer}>
      <Header />
      <View style={styles.barScanner__bar}>
      <TextInput
            style={styles.doorConfig__textInput}
            placeholder="Id único"
            onChangeText={(text) => onChangeText(text)}
      />
      <View style={styles.barScanner__buttonContainer}>
      <TouchableOpacity style={styles.barScanner__button} onPress={() => handleSend()}>
        <Text style={{color: '#fff'}}>Scan</Text>
      </TouchableOpacity>
      </View>
      
      </View>
    </View>
    </>
  )
}

export default BarScanner