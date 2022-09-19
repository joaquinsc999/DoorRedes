import { SafeAreaView, StyleSheet } from 'react-native';
import SignUp from '../../components/SignUp/SignUp';

export default function SignUpScreen({ navigation }) {


  return (
    <SafeAreaView style={styles.container}>
        <SignUp navigation={navigation}/>
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