import React, { useState, useEffect } from 'react';
import { Image, View, Text, Dimensions } from 'react-native';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import * as Location from 'expo-location';
import * as Permissions from 'expo-permissions';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { weatherConditions } from '../utils/WeatherConditions';


const { width } = Dimensions.get('window');

const styleSheet = {
container: {
    width: width,
    flex:1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
},
textStyle: {
    color: '#FFF',
    fontSize: 50,
    fontWeight: 'bold',
},
tempStyle: {
    color: '#FFF',
    fontSize: 80,
    fontWeight: 'bold',
},
erroStyle: {
    color: 'red',
    fontSize: 25,
    fontWeight: 'bold,'
},
};



const HomeScreen = props => {

    async function _getLocationAsync() {
        let { status } = await Permissions.askAsync(Permissions.LOCATION);
        if (status !== 'granted') {
            MediaStreamError('Permission to access location was denied');
        }

        let location = await Location.getCurrentPositionAsync({});
        dispatch({type: 'app/getMeteoInformations', payload: location});
    };
    
    useEffect(() => {
        _getLocationAsync();
    }, []);

    useEffect(() => {
        //console.log('toto: ',informations.weather);
        if(informations.main) {
            setNameCity(informations.name);
            setTemp(informations.main.temp);
            setWeather(weatherConditions[informations.weather[0].main].icon);
            setWeatherColor(weatherConditions[informations.weather[0].main].color);
        }
    });

    const { dispatch, app: {informations} } = props;
    const [nameCity, setNameCity] = useState('');
    const [temp, setTemp] = useState('');
    const [error, setError] = useState('');
    const [weather, setWeather] = useState('');
    const [weatherColor, setWeatherColor] = useState('');

    return(
    <View style={styleSheet.container} backgroundColor={weatherColor ? weatherColor : null}>
        <MaterialCommunityIcons size={200} name={weather ? weather : 'loading'} color='#FFF' />
        <Text style={styleSheet.textStyle}>{nameCity}</Text>
        <Text style={styleSheet.tempStyle}>{`${temp}°`}</Text>
        {error !== '' && <Text style={styleSheet.erroStyle}>{error}</Text>}
    </View>
    );
}

HomeScreen.propTypes = {
    dispatch: PropTypes.func.isRequired,
    app: PropTypes.shape({
        informations: PropTypes.object,
    }).isRequired,
}; 
    
export default connect( ({app}) => ({app}) ) (HomeScreen);