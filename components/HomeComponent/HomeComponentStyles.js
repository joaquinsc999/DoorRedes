import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    home__contentContainer: {
        height: 720,
        width: "85%"
    },

    home__doorsHeaderContainer: {
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between'
    },

    home__headerContainer: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 40,
    },

    home__userImage: {
        width: 45,
        height: 45,
        borderRadius: 45/2,
        marginRight: 15
    },

    home__greetingContainer: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
    },

    home__timeGreeting: {
        fontWeight: 'bold',
        color: '#19585D'
    },

    home__nameGreeting: {
        color: '#19585D'
    },

    home__addDoorButton: {
        width: 40,
        height: 40,
        borderRadius: 100/2,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff'
    },

    home__lockOptions: {
        backgroundColor: '#fff',
        width: "100%",
        height: 200,
        borderRadius: 8,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 35
    },

    home__titlelockOptions: {
        color: '#19585D',
        fontSize: 22,
        fontWeight: "bold",
        marginBottom: 12
    },

    home__lockOptionsSwitchesContainer: {
        width: "50%"
    },

    home__switch: {
        color: '#F3FE39'
    },

    home__option: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center'
    },

    home__optionsInsideContainer: {
        width: "90%",
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center'
    },
    
    home__optionsInsideContainerLeft: {
        width: '65%'
    },

    home__optionsInsideContainerRight: {
        width: '35%',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center'
    },

    home__keyImage: {
        width: 80,
        height: 80
    },

    home__optionsNames: {
        color: '#19585D'
    },

    home__doorsContainer: {
        width: "100%",
        height: 200,
        position: 'relative',
        marginBottom: 20
    },

    home__doorsOptionTitle: {
        fontWeight: 'bold',
        fontSize: 18,
        color: '#19585D',
    },

    home__doorsSlideContainer: {
        height: 200-27,
        width: "100%",
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
    },

    home__doorsDescription: {
        backgroundColor: '#19585D',
        width: "100%",
        height: 200,
        borderRadius: 8,
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },

    home__doorsDescriptionInsideContainer: {
        width: "90%",
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center'
    },

    home__doorsDescriptionInsideContainerLeft: {
        width: '65%'
    },

    home__doorsDescriptionInsideContainerRight: {
        width: '35%',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center'
    },

    home__doorDescriptionTextStateTitle: {
        color: "#fff",
        fontSize: 22,
        fontWeight: "bold",
        marginBottom: 12
    },

    home__doorDescriptionText: {
        color: "#fff",
        marginRight: 5
    },

    home__lockDescriptionColorOpened: {
        backgroundColor: '#F3FE39',
        height: 12,
        width:12,
        borderRadius: 12/2,
    },

    home__lockDescriptionColorClosed: {
        width: 12,
        height: 12,
        borderRadius: 12/2,
        backgroundColor: "red"
    },

    home__stateDescriptionContainerMargin: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 10
    },

    home__stateDescriptionContainer: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
    }

    
})