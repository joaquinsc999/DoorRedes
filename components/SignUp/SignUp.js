import { View, Text, TextInput,TouchableOpacity, StyleSheet, ScrollView } from 'react-native'
import { styles } from "./SignUpStyles"
import RadioButtonRN from 'radio-buttons-react-native';
import React, {useState} from 'react'
import axios from 'axios'
import { useStateValue } from '../../StateProvider';


const SignUp = ({navigation}) => {

  const [user, setUser] = useState({
    username: '',
    password: '',
    firstName: '',
    lastName: '',
    userType: '',
    doorsPassword: ''
  })

  const [{}, dispatch] = useStateValue()

  const data = [
    {
      label: 'Administrador'
     },
     {
      label: 'Miembro'
     }
    ];

    const onChangeText = (text, value) => {
      setUser(prev => {
        return {
          ...prev,
          [value]: text
        }
      })
    }

    const handleRegister = () => {
      axios.post('https://limitless-ravine-19519.herokuapp.com/register', user)
      .then(function (response) {
        console.log(response.data);
        console.log(response.data)
        if (response.data.msg == 'success') {
          dispatch({
            type:'userConfig',
            user: response.data.user
          })
          navigation.navigate('Home')
        }
      })
      .catch(function (error) {
        console.log(error);
      });
    }



  return (
    <View style={styles.signUp}>
      <View style={styles.signUp__contentContainer}>
        <ScrollView>
        <Text style={styles.signUp__text}>Sign Up</Text>
        <View style={styles.signUp__newAccountContainer}>
          <Text style={styles.signUp__newAccoutFirstText}>Already have an account?</Text>
          <Text style={styles.signUp__newAccoutSecondText}
            onPress={() => navigation.navigate('Login')}
          >Login</Text>
        </View>
        <TextInput
          style={styles.signUp__textInput}
          placeholder="Email"
          onChangeText={(e) => onChangeText(e, 'username')}
          value={user.username}
        />
        <TextInput
          style={styles.signUp__textInput}
          placeholder="Password"
          onChangeText={(e) => onChangeText(e, 'password')}
          secureTextEntry={true}
        />
        <TextInput
          style={styles.signUp__textInput}
          placeholder="Name"
          onChangeText={(e) => onChangeText(e, 'firstName')}
        />
        <TextInput
          style={styles.signUp__textInput}
          placeholder="Last Name"
          onChangeText={(e) => onChangeText(e, 'lastName')}
        />
        <TextInput
          style={styles.signUp__textInput}
          placeholder="Doors Password"
          onChangeText={(e) => onChangeText(e, 'doorsPassword')}
          secureTextEntry={true}
        />
        <RadioButtonRN
          data={data}
          selectedBtn={(e) => setUser(prev => {
            return {
              ...prev,
              ['userType']: e.label
            }
          })}
          style={styles.signUp__radios}
        />
        <TouchableOpacity style={styles.signUp__buttonContainer}
          onPress={() => /* navigation.navigate('Home') */  {
            handleRegister()
          }}
        >
          <Text style={styles.signUp__button}>Sign Up</Text>
        </TouchableOpacity>
        <View
          style={styles.signUp__line}
        />
        <TouchableOpacity style={styles.signUp__SocialbuttonContainer}>
            <Text style={styles.signUp__socialButton}>Sign Up with facebook</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.signUp__SocialbuttonContainer}>
            <Text style={styles.signUp__socialButton}>Sign Up with google</Text>
        </TouchableOpacity>
        </ScrollView>
      </View>
    </View>
  )
}

export default SignUp