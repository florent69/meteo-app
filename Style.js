import { StyleSheet } from 'react-native'
import { Dimensions } from 'react-native';

const { width }= Dimensions.get('window');

export default StyleSheet.create({
    container: {
        width: width,
        flex:1,
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
    label: {
        color: 'black',
        fontSize: 18,
    },
    input: {
        width: '80%',
        height: 40,
        borderColor: '#D2B453',
        borderWidth: 1,
        marginBottom: 10,
        paddingHorizontal: 10,
    },
    input2: {
        width: '100%',
        height: 40,
        borderColor: '#D2B453',
        borderWidth: 1,
        marginBottom: 10,
        paddingHorizontal: 10,
    },
    nameStyle: {
        color: '#D90022',
        fontSize: 35,
        fontWeight: 'bold',
    },
    questionStyle: {
        color: '#274288',
        fontSize: 35,
        fontWeight: 'bold',
    },
    textStyle: {
        color: '#FFF',
        fontSize: 30,
        fontWeight: 'bold',
    },
    tempStyle: {
        color: '#FFF',
        fontSize: 80,
        fontWeight: 'bold',
    },
    textRed: {
        color: '#D90022',
        fontSize: 50,
        fontWeight: 'bold',
    },
    erroStyle: {
        color: 'red',
        fontSize: 25,
    },
    searchView: {
        flex: 1 ,
        flexDirection: 'column',
        paddingTop: 50,
        paddingHorizontal: 20,
    },
    colorBlue: {
        color:'#274288'
    },
    colorRed: {
        color:'#D90022'
    },
    colorGold: {
        color:'#D2B453'
    },
    item: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingVertical: 10,
        paddingHorizontal: 20,
        marginVertical: 8,
        marginHorizontal: 16,
    },
    });