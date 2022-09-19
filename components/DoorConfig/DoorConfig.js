import { View, Text, TextInput, TouchableOpacity, Animated, Image, Alert } from 'react-native'
import React, {useState, useRef, useEffect} from 'react'
import Header from '../../ui/Header/Header'
import {styles} from "./DoorConfigStyles"
import { useStateValue } from '../../StateProvider'
import {Camera} from 'expo-camera'
import * as LocalAuthentication from 'expo-local-authentication'
import axios from 'axios'


export default function DoorConfig({navigation, route}) {

    const translation = useRef(new Animated.Value(0)).current
    const opacityValue = useRef(new Animated.Value(1)).current
    const messageTranslation = useRef(new Animated.Value(-400)).current
    const messageOpacity = useRef(new Animated.Value(0)).current

    const {index, name} = route.params

    const [{doors, keyType, user}, dispatch] = useStateValue()

    const [password, setPassword] = useState(null)

    const isOpen = doors[index].isOpen

    console.log('userrrr dooorrr conf')
    console.log(doors[index].uniqueId)

    const doorUniqueId = doors[index].uniqueId


    const [hasCameraPermissions, setHasCameraPermissions] = useState(false)
    const [hasMicPermissions, setHasMicPermissions] = useState(false)

    const cam = useRef(null)

    console.log(keyType)
    const runAnimation = () => {
      Animated.parallel([
        Animated.timing(opacityValue, {
            toValue: 0,
            duration: 200,
            useNativeDriver: true
        }),
        Animated.timing(translation, {
            toValue: 200,
            duration: 300,
            useNativeDriver: true
        }),
        Animated.timing(messageTranslation, {
          toValue: isOpen? 40 : 0,
          duration: 300,
          useNativeDriver: true
        }),
        Animated.timing(messageOpacity, {
          toValue: 1,
          duration: 300,
          useNativeDriver: true
        }),
    ]).start(({finished}) => {
      if (finished) {
        Animated.parallel([
          Animated.timing(opacityValue, {
              toValue: 1,
              duration: 300,
              useNativeDriver: true
          }),
          Animated.timing(translation, {
              toValue: 0,
              duration: 100,
              useNativeDriver: true
          }),
          Animated.timing(messageTranslation, {
            toValue: -400,
            duration: 5000,
            useNativeDriver: true,
          }),
          Animated.timing(messageOpacity, {
            toValue: 0,
            duration: 1400,
            useNativeDriver: true
          }),
      ]).start()

      }
    });

    }

    const candado_abierto = require('../../assets/candado_abierto.png')
    const candado_cerrado = require('../../assets/candado_cerrado.png')
    const imageToDisplay = !isOpen ? candado_cerrado : candado_abierto
  

    const closeDoor = () => {
      dispatch({
        newValue: !isOpen,
        index: index,
        type: 'doorConfig'
      })

    }

    useEffect(() => {
      (async () => {
        const { status } = await Camera.requestCameraPermissionsAsync();
        setHasCameraPermissions(status === 'granted');
      })();
    }, []);
  
    useEffect(() => {
      (async () => {
        const { status } = await Camera.requestMicrophonePermissionsAsync();
        setHasMicPermissions(status === 'granted');
      })();
    }, []);


    const closeDoorSignal = async () => {
      const results = await axios.get(`https://cloud.arest.io/${doorUniqueId}/digital/2/1?key=gf1e78qn3qwyc8q6`)
      //const results = await axios.get("https://api.0x.org/orderbook/v1?quoteToken=0xc02aaa39b223fe8d0a0e5c4f27ead9083c756cc2&baseToken=0xa0b86991c6218b36c1d19d4a2e9eb0ce3606eb48")
      console.log(results)
      if (results) {
        closeDoor()
        runAnimation()
        setTimeout(() => {
          dispatch({
            newValue: false,
            index: index,
            type: 'doorConfig'
          })
          runAnimation()
        }, 5000)
      } else {
        Alert.alert(
          "Error en la conexion",
          "No se ha podido enviar la señal.",
          [
            {
              text: "Cancel",
              onPress: () => console.log("Cancel Pressed"),
              style: "cancel"
            },
            { text: "OK", onPress: () => console.log("OK Pressed") }
          ]
        );
      }
      

    }
  
    
  
    const handleBiometricAuth = async () => {
      const biometricAuth = await LocalAuthentication.authenticateAsync({
        promptMessage: 'Login with Biometrics',
        disableDeviceFallback: true,
        cancelLabel: 'Cancel',
      });
      if (biometricAuth.success) {
        closeDoorSignal()
      } else {
        Alert.alert(
          "No tiene acceso",
          "Acceso no autorizado. La entrada física a la instalación será sancionada,",
          [
            {
              text: "Cancel",
              onPress: () => console.log("Cancel Pressed"),
              style: "cancel"
            },
            { text: "OK", onPress: () => console.log("OK Pressed") }
          ]
        );
      }
    }
  

    const onChangeText = (text) => {
      setPassword(text)
    }
  
    const handleVerification = () => {
      axios.post('https://limitless-ravine-19519.herokuapp.com/unlock', {doorsPassword: password, username: user?.userId})
      .then(function (response) {
        console.log(response.data);
        if (response.data.isPasswordCorrect) {
          closeDoorSignal()
        } else {
          console.log(response.data)
          Alert.alert(
            "No tiene acceso",
            "Acceso no autorizado, la entrada física a la instalación será sancionada,",
            [
              {
                text: "Cancel",
                onPress: () => console.log("Cancel Pressed"),
                style: "cancel"
              },
              { text: "OK", onPress: () => console.log("OK Pressed") }
            ]
          );
        }
      })
      .catch(function (error) {
        console.log(error);
      });
    }
  

  return (
    <View style={styles.doorConfig}>
      <Header />
      <View style={styles.doorConfig__doorContainer}>
        <View style={isOpen ? styles.doorConfig__door: styles.doorConfig__doorIslocked}>
            <View  style={styles.doorConfig__messageContainer}>
              <Animated.Text style={{...styles.doorConfig__lockingText, transform: [{translateY: messageTranslation}] , color: !isOpen ?'#fff': '#19585D', opacity: messageOpacity}}>{`Succesfully ${!isOpen ? 'Locked': 'Unlocked'}`}</Animated.Text>
              <Animated.Image style={{...styles.doorConfig__messageImage, transform: [{translateY: messageTranslation}], opacity: messageOpacity}} source={imageToDisplay}/>
            </View>
            <View style={styles.doorConfig__doorInfo}>
                <Text style={isOpen ? styles.doorConfig__doorName : styles.doorConfig__doorNameIsLocked}>{name}</Text>
                <TouchableOpacity onPress={
                    () => {
                        if (!isOpen) {
                          if (keyType === 'face') {
                            handleBiometricAuth()
                          } else {
                            handleVerification()
                          }
                        } else {
                          closeDoor()
                          runAnimation()
                        }
                        }}>
                <Animated.View style={{transform: [{translateX: translation}], opacity: opacityValue}}>
                <View style={isOpen ? styles.doorConfig__doorLock: styles.doorConfig__doorLockIsLocked}>
                    <Animated.Text style={isOpen ? {color: '#fff', opacity: opacityValue} : {color: '#19585D', opacity: opacityValue}}>{isOpen ? 'Close': 'Unlock'}</Animated.Text>
                </View>
                </Animated.View>
                </TouchableOpacity>
            </View>
            {keyType === 'password' ?
            <>
            {!isOpen &&
            <TextInput
                style={styles.doorConfig__textInput}
                placeholder="Password"
                secureTextEntry={true}
                onChangeText={(text) => onChangeText(text)}
            />
            }
            </>
            :
            <>
            </>
          }
        </View>
      </View>
    </View>
  )
}