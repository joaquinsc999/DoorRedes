import { View, Text, Image } from 'react-native'
import React from 'react'
import { IconComponentProvider, Icon } from "@react-native-material/core";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import {styles} from "./HeaderStyle"


export default function Header() {
  return (
    <View style={styles.header}>
        <View style={styles.header__greetingContainer}>
            <Image source={require("../../assets/joaquin.jpg")} style={styles.header__userImage}/>
            <View>
                <Text style={styles.header__nameGreeting}>Hola Joaquín</Text>
                <Text style={styles.header__timeGreeting}>Buenas noches</Text>
            </View>
        </View>
        <IconComponentProvider IconComponent={MaterialCommunityIcons}>
          <Icon name="dots-vertical" size={35} color="#19585D"/>
        </IconComponentProvider>
    </View>
  )
}