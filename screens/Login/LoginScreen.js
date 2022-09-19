import { SafeAreaView, StyleSheet } from 'react-native';
import Login from '../../components/Login/Login';

export default function LoginScreen({ navigation }) {


  return (
    <SafeAreaView style={styles.container}>
        <Login navigation={navigation}/>
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