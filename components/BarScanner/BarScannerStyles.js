import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    barScanner__contentContainer: {
        height: 720,
        width: "85%"
    },

    barScanner__button: {
        backgroundColor: "#19585D",
        padding: 12,
        borderRadius: 5,
        width: 70,
        display: 'flex',
        alignItems: 'center',
        marginTop: 10
    },

    barScanner__bar: {
        height: "30%",
        width: '100%',
        backgroundColor: '#fff',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },

    doorConfig__textInput: {
        width: '85%',
        padding: 8,
        backgroundColor: '#eee',
        borderRadius: 5,
        marginTop: 30,
        marginBottom: 10,
    },

    barScanner__buttonContainer: {
        width: "85%",
        position: 'relative'
    }
})