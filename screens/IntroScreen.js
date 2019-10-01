import React, { useState, useEffect } from 'react';
import { Image } from 'react-native';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import {View, Text, Dimensions, AsyncStorage } from 'react-native';

const { width }= Dimensions.get('window');

const styleSheet = {
container: {
    width: width,
    flex:1,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
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
}
};

const IntroScreen = props => {
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
        <View style={styleSheet.container}>
            <Image source={require("../assets/miss.jpg")} style={{width:300, height:600}}/>
            <Text style={styleSheet.nameStyle}>Hi {name}!!</Text><Text style={styleSheet.questionStyle}>How are you today ?</Text>
        </View>
    );
}

IntroScreen.propTypes = {
    navigation: PropTypes.shape({
        navigate: PropTypes.func,
    }).isRequired,
};
    
export default connect()(IntroScreen);