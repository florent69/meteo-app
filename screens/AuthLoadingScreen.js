import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import {ActivityIndicator, StatusBar, View, AsyncStorage } from 'react-native';
import {useDispatch} from 'react-redux';

const AuthLoadingScreen = props => {

    _bootstrapAsync = async () => {
        const userToken = await AsyncStorage.getItem('name');
        dispatch.app.setName(userToken);
        props.navigation.navigate(userToken ? 'App' : 'Auth');  
    };

    useEffect(() => {
        _bootstrapAsync();
    }, []);

    const dispatch = useDispatch();

    return (
        <View>
            <ActivityIndicator/>
            <StatusBar barStyle="default"/>
        </View>
    );
};

AuthLoadingScreen.propTypes = {
    navigation: PropTypes.shape({
        navigate: PropTypes.func,
    }).isRequired
};

export default AuthLoadingScreen;