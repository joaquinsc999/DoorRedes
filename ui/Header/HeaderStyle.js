import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({

    header: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 40,
    },

    header__userImage: {
        width: 45,
        height: 45,
        borderRadius: 45/2,
        marginRight: 15
    },

    header__greetingContainer: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
    },

    header__timeGreeting: {
        fontWeight: 'bold',
        color: '#19585D'
    },

    header__nameGreeting: {
        color: '#19585D'
    },
    
})