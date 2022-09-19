import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    doorConfig: {
        height: 720,
        width: "85%",
    },

    doorConfig__doorContainer: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        height: '80%',
    },

    doorConfig__door: {
        height: 550,
        width: "100%",
        backgroundColor: "#fff",
        borderRadius: 5,
        marginRight: 10,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20
    },

    doorConfig__doorIslocked: {
        height: 550,
        width: "100%",
        backgroundColor: "#19585D",
        borderRadius: 5,
        marginRight: 10,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 20
    },

    doorConfig__doorLock: {
        backgroundColor: 'red',
        height: 32,
        width:70,
        borderRadius: 5,
        display: 'flex',
        justifyContent: 'center', 
        alignItems: 'center'
    },

    doorConfig__doorLockIsLocked: {
        backgroundColor: '#F3FE39',
        height: 32,
        width:70,
        borderRadius: 5,
        display: 'flex',
        justifyContent: 'center', 
        alignItems: 'center'
    },

    doorConfig__doorName: {
        color: '#19585D',
        fontSize: 32
    },

    doorConfig__doorNameIsLocked: {
        color: '#fff',
        fontSize: 32
    },


    doorConfig__doorInfo: {
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },

    doorConfig__textInput: {
        width: '100%',
        padding: 8,
        backgroundColor: '#eee',
        borderRadius: 5,
        marginTop: 30,
        marginBottom: 10,
    },

    login__buttonContainer: {
        position: 'relative',
        width: "100%",
        position: "relative"
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

    doorConfig__lockingText: {
        color: '#19585D',
        marginTop: -160,
        marginBottom: 160,
        marginRight: 8
    },

    doorConfig__messageImage: {
        marginTop: -160,
        marginBottom: 160,
        width: 20,
        height: 20
    },

    doorConfig__messageContainer: {
        display: 'flex', 
        flexDirection: 'row',
    },

    doorConfig__cameraStyles: {
        width: 200,
        height: 260,
        marginTop: 30,
    }
})