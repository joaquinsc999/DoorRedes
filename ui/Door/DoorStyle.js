import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    door: {
        height: 140,
        width: 100,
        backgroundColor: "#fff",
        borderRadius: 5,
        marginRight: 10,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },

    doorIslocked: {
        height: 140,
        width: 100,
        backgroundColor: "#19585D",
        borderRadius: 5,
        marginRight: 10,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },

    door__lock: {
        backgroundColor: '#F3FE39',
        height: 12,
        width:12,
        borderRadius: 12/2
    },

    door__lockIsLocked: {
        backgroundColor: 'red',
        height: 12,
        width:12,
        borderRadius: 12/2
    },

    door__name: {
        marginRight: 5,
        color: '#19585D'
    },

    door__nameIsLocked: {
        marginRight: 5,
        color: '#fff'
    },


    door__info: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
})