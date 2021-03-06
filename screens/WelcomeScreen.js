import React, { useState, useEffect } from 'react';
import { Image } from 'react-native';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {View, Text, AsyncStorage } from 'react-native';
import style from '../Style'

const WelcomeScreen = props => {
    useEffect(() => {
        async function getName() {
            const temp = await AsyncStorage.getItem('name');
            setName(temp);
        }
        getName();
    }, []);
    useEffect(() => {
        setTimeout(() => {
            props.navigation.navigate('App');
        }, 5000);
    }, []);

    const [name, setName] = useState('');

    return(
        <View style={style.container}>
            <Image source={require("../assets/goal.jpg")} style={{width:'80%', height:'80%'}}/>
            <Text style={style.nameStyle}>Hi {name}!!</Text><Text style={style.questionStyle}>Welcome To This App!</Text>
        </View>
    );
}

WelcomeScreen.propTypes = {
    navigation: PropTypes.shape({
        navigate: PropTypes.func,
    }).isRequired,
};
    
export default connect()(WelcomeScreen);