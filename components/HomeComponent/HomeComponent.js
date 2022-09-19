import { View, Text, Image, ScrollView, StyleSheet, TouchableOpacity } from 'react-native'
import {styles} from "./HomeComponentStyles"
import React from 'react'
import { Switch } from "@react-native-material/core";
import Door from '../../ui/Door/Door';
import { IconComponentProvider, Icon } from "@react-native-material/core";
import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons";
import Header from '../../ui/Header/Header';
import { useStateValue } from '../../StateProvider';
import { BarCodeScanner } from 'expo-barcode-scanner';


const HomeComponent = ({navigation, route}) => {

    const [faceSwitch, setFaceSwitch] = React.useState(false)
    const [pswSwitch, setPswSwitch] = React.useState(true)
    const [hasPermission, setHasPermission] = React.useState(null);
    const [scanned, setScanned] = React.useState(false);

    const [{keyType, doors}, dispatch] = useStateValue()
    

  return (
    <View style={styles.home__contentContainer}>

        {/* SALUDO */}
      <Header />

        {/* OPTIONS */}
    
      <View style={styles.home__lockOptions}>
            <View style={styles.home__optionsInsideContainer}>
                <View style={styles.home__optionsInsideContainerLeft}>
                    <Text style={styles.home__titlelockOptions}>Set your key</Text>
                    <View style={styles.home__lockOptionsSwitchesContainer}>
                        <View style={styles.home__option}>
                            <Text style={styles.home__optionsNames}>Use Face</Text>
                            <Switch value={faceSwitch} onValueChange={() => {
                                setFaceSwitch(!faceSwitch)
                                setPswSwitch(!pswSwitch)
                                dispatch({
                                    keyType: 'face',
                                    type: 'keyConfig'
                                  })
                                }}
                                style={styles.home__switch}  
                                />
                        </View>
                        <View style={styles.home__option}>
                            <Text style={styles.home__optionsNames}>Use Password</Text>
                            <Switch value={pswSwitch} onValueChange={() => {
                                setPswSwitch(!pswSwitch)
                                setFaceSwitch(!faceSwitch)
                                dispatch({
                                    keyType: 'password',
                                    type: 'keyConfig'
                                  })
                                }} 
                                />
                        </View>  
                    </View>
                </View>
                <View style={styles.home__optionsInsideContainerRight}>
                    <Image source={require("../../assets/llave.png")} style={styles.home__keyImage}/>
                </View>
            </View> 
      </View>


      {/*DOORS*/}
      
      <View style={styles.home__doorsContainer}>
        <View style={styles.home__doorsHeaderContainer}>
            <Text style={styles.home__doorsOptionTitle}>Click a door to open/close it</Text>
            
            <TouchableOpacity onPress={() => navigation.navigate('Bar Scanner')}>
                <View style={styles.home__addDoorButton}>
                <IconComponentProvider IconComponent={MaterialCommunityIcons}>
                    <Icon name="plus" size={25} color="#19585D"/>
                </IconComponentProvider>
                </View> 
            </TouchableOpacity>
        </View>
        <View style={styles.home__doorsSlideContainer}>
            
            <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
            {doors.map((door, index) => {
                console.log('AAAAAAAA',door.isOpen)
                return <Door name={door.uniqueId} index={index} isOpen={door.isOpen} id={index} navigation={navigation}/>
            })}
            </ScrollView>
        </View>
      </View>


      {/*DESCRIPTION*/}
      <View style={styles.home__doorsDescription}>
            <View style={styles.home__doorsDescriptionInsideContainer}>
                <View style={styles.home__doorsDescriptionInsideContainerLeft}>
                    <Text style={styles.home__doorDescriptionTextStateTitle}>Door Signals</Text>
                    <View style={styles.home__lockOptionsSwitchesContainer}>
                        <View style={styles.home__stateDescriptionContainerMargin}>
                            <Text style={styles.home__doorDescriptionText}>Opened</Text>
                            <View style={styles.home__lockDescriptionColorOpened}></View>
                        </View>
                        <View style={styles.home__stateDescriptionContainer}>
                            <Text style={styles.home__doorDescriptionText}>Closed</Text>
                            <View style={styles.home__lockDescriptionColorClosed}></View>
                        </View>  
                    </View>
                </View>
                <View style={styles.doorsDescriptionInsideContainerRight}>
                    <Image source={require("../../assets/candado_cerrado.png")} style={styles.home__keyImage}/>
                </View>
            </View> 
      </View>

    </View>
  )
}

export default HomeComponent