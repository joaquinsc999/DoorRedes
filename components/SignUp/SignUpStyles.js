import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    signUp: {
        backgroundColor: "#fff",
        width: "80%",
        height: 680,
        borderRadius: 5,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },

    signUp__textContainer: {
        width: '80%',
        height: '20%',
        display: 'flex',
        justifyContent: 'center'
    },

    signUp__text: {
       fontSize: 25,
       fontWeight: "bold",
       marginBottom: 10,
       color: "#19585D"
    },

    signUp__input: {
        //borderWidth: 1.4,
        height: 28,
        //borderColor: '#333',
        //borderRadius: 5,
        width: "100%",
        padding: 5
    },

    signUp__contentContainer: {
        display: 'flex',
        width:"80%",
        justifyContent: "center",
        marginTop: 40,
        marginBottom: 40
    },

    signUp__newAccountContainer: {
        display: 'flex',
        flexDirection: 'row',
        marginBottom: 30
    },

    signUp__newAccoutFirstText: {
        marginRight: 5,
        color: "#19585D"
    },

    signUp__newAccoutSecondText: {
        color: "#30A0D2"
    },

    signUp__button: {
        backgroundColor: "#F3FE39",
        padding: 12,
        width: 90,
        textAlign: 'center',
        borderRadius: 6,
        right: 0,
        position: 'absolute'
    },

    signUp__socialButton: {
        backgroundColor: "#19585D",
        padding: 12,
        textAlign: 'center',
        borderRadius: 6,
        color: "#fff",
    },

    signUp__buttonContainer: {
        position: 'relative',
        width: "100%",
        position: "relative"
    },

    signUp__SocialbuttonContainer: {
        position: 'relative',
        width: "100%",
        marginTop: 20
    },

    signUp__textInput: {
        padding: 8,
        backgroundColor: '#eee',
        borderRadius: 5,
        marginBottom: 14
    },

    signUp__line: {
        borderTopColor: '#19585D',
        borderTopWidth: StyleSheet.hairlineWidth,
        marginTop: 70
    },

    signUp__radios: {
        marginBottom: 20
    }
    
})