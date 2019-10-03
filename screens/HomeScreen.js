import React, { useState, useEffect } from 'react'
import { View, Text } from 'react-native'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import * as Location from 'expo-location'
import * as Permissions from 'expo-permissions'
import { MaterialCommunityIcons } from '@expo/vector-icons'
import { weatherConditions } from '../utils/WeatherConditions'
import style from '../Style'

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
        if(informations.main) {
            setNameCity(informations.name);
            setTemp(Math.round(informations.main.temp));
            setWeather(weatherConditions[informations.weather[0].main].icon);
            setWeatherColor(weatherConditions[informations.weather[0].main].color);
        }
    // console.log('From HomeScreen: ',informations);

    });

    const { dispatch, app: {informations} } = props;
    const [nameCity, setNameCity] = useState('');
    const [temp, setTemp] = useState('');
    const [error, setError] = useState('');
    const [weather, setWeather] = useState('');
    const [weatherColor, setWeatherColor] = useState('');

    return(
    <View style={style.container} backgroundColor={weatherColor ? weatherColor : null}>
        <MaterialCommunityIcons size={200} name={weather ? weather : 'loading'} color='#FFF' />
        <Text style={style.textStyle}>{nameCity}</Text>
        <Text style={style.tempStyle}>{`${temp}°`}</Text>
        {error !== '' && <Text style={style.erroStyle}>{error}</Text>}
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