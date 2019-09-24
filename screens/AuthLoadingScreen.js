import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import {Activityindicator, StatusBar, View, AsynStorage } from 'react-native';

const AuthLoadingScreen = props => {

    _bootstrapAsync = async () => {
        const userToken = await AsyncStorage.getItem('name');
        props.navigation.navigate(userToken ? 'App' : 'Auth');
    };

    useEffect(() => {
        _bootstrapAsync();
    }, []);

    return (
        <View>
            <Activityindicator/>
            <StatusBar barStyle="default"/>
        </View>
    );
};

AuthLoadingScreen.propTypes = {
    navigation: PropTypes.shape({
        navigate: PropTypes.func,
    }).isRequired
};

export default AuthLoadingScreen;s