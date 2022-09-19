import { SafeAreaView, StyleSheet, Text } from 'react-native';
import HomeComponent from '../../components/HomeComponent/HomeComponent';



export default function Home({ navigation, route }) {


  return (
    <SafeAreaView style={styles.container}>
        <HomeComponent navigation={navigation} route={route}/>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#eee',
    alignItems: 'center',
    justifyContent: 'center',
  },

});