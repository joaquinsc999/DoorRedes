import { View, Text, TextInput,TouchableOpacity, StyleSheet, Alert } from 'react-native'
import { styles } from "./LoginStyles"
import {useState} from 'react'
import axios from 'axios'
import { useStateValue } from '../../StateProvider'


const Login = ({navigation}) => {

  const [userData, setUserData] = useState({
    username: '',
    password: ''
  })

  const [{user}, dispatch] = useStateValue()

  console.log('userrrr')
  console.log(user)

  const onChangeText = (text, value) => {
    setUserData(prev => {
      return {
        ...prev,
        [value]: text
      }
    })
  }

  const handleLogin = () => {
    axios.post('https://limitless-ravine-19519.herokuapp.com/login', userData)
    .then(function (response) {
      console.log(response.data);
      if (response.data.msg == 'success') {
        dispatch({
          user: response.data.user,
          type: 'userConfig'
        })
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
      } else {
        Alert.alert(
          'Autenticación fallida',
          'Correo o contraseña incorrecta',
          [
            {
              text: 'Ok'
            }
          ]
        )
      }
    })
    .catch(function (error) {
      Alert.alert(
        'Autenticación fallida',
        'Hubo un error.',
        [
          {
            text: 'Ok', 
            onPress: () => console.log('Ok pressed')
          },
          {
            text: 'Cancel', 
            onPress: () => console.log('cancel pressed')
          }
        ]
      )
    });
  }




  return (
    <View style={styles.login}>
      <View style={styles.login__contentContainer}>
        <Text style={styles.login__text}>Login</Text>
        <View style={styles.login__newAccountContainer}>
          <Text style={styles.login__newAccoutFirstText}>New user?</Text>
          <Text style={styles.login__newAccoutSecondText}
            onPress={() => navigation.navigate('Sign Up')}
          >Create an account</Text>
        </View>
        <TextInput
          style={styles.login__textInput}
          placeholder="Email"
          onChangeText={(text) => onChangeText(text, 'username')}
        />
        <TextInput
          style={styles.login__textInput}
          placeholder="Password"
          secureTextEntry={true}
          onChangeText={(text) => onChangeText(text, 'password')}
        />
        <TouchableOpacity style={styles.login__buttonContainer}
          onPress={() => {
            handleLogin()
          }}
        >
          <Text style={styles.login__button}>Login</Text>
        </TouchableOpacity>
        <View
          style={styles.login__line}
        />
        <TouchableOpacity style={styles.login__SocialbuttonContainer}>
            <Text style={styles.login__socialButton}>Login with facebook</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.login__SocialbuttonContainer}>
            <Text style={styles.login__socialButton}>Login with google</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

export default Login