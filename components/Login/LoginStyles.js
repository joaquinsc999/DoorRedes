import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    login: {
        backgroundColor: "#fff",
        width: "80%",
        height: 600,
        borderRadius: 5,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },

    login__textContainer: {
        width: '80%',
        height: '20%',
        display: 'flex',
        justifyContent: 'center'
    },

    login__text: {
       fontSize: 25,
       fontWeight: "bold",
       marginBottom: 10,
       color: "#19585D"
    },

    login__input: {
        //borderWidth: 1.4,
        height: 28,
        //borderColor: '#333',
        //borderRadius: 5,
        width: "100%",
        padding: 5
    },

    login__contentContainer: {
        display: 'flex',
        width:"80%",
        justifyContent: "center",
    },

    login__newAccountContainer: {
        display: 'flex',
        flexDirection: 'row',
        marginBottom: 30
    },

    login__newAccoutFirstText: {
        marginRight: 5,
        color: "#19585D"
    },

    login__newAccoutSecondText: {
        color: "#30A0D2"
    },

    login__button: {
        backgroundColor: "#F3FE39",
        padding: 12,
        width: 90,
        textAlign: 'center',
        borderRadius: 6,
        right: 0,
        position: 'absolute'
    },

    login__socialButton: {
        backgroundColor: "#19585D",
        padding: 12,
        textAlign: 'center',
        borderRadius: 6,
        color: "#fff",
    },

    login__buttonContainer: {
        position: 'relative',
        width: "100%",
        marginBottom: 20,
        position: "relative"
    },

    login__SocialbuttonContainer: {
        position: 'relative',
        width: "100%",
        marginTop: 20
    },

    login__textInput: {
        padding: 8,
        backgroundColor: '#eee',
        borderRadius: 5,
        marginBottom: 20
    },

    login__line: {
        borderTopColor: '#19585D',
        borderTopWidth: StyleSheet.hairlineWidth,
        marginTop: 70
    }
    
})