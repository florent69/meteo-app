import React, { useState } from 'react';
import { Image } from 'react-native';
import PropTypes from 'prop-types';
import {View, Text, TextInput, Button, Dimensions, AsyncStorage } from 'react-native';
import {useDispatch} from 'react-redux';

// const { width }= Dimensions.get('window');

const styleSheet = {
container: {
    // width: width,
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
    borderColor: '#274288',
    borderWidth: 1,
    marginBottom: 10,
},
};

const IntroFormScreen = props => {
    async function handleSubmit() {
        if(name !== '') {
            await AsyncStorage.setItem('name', name);
            dispatch.app.setName(name);
            props.navigation.navigate('Welcome');
            
        }
    }

    const [name, setName] = useState('');
    const dispatch = useDispatch();

    return(
        <View style={styleSheet.container}>
            <Image source={require("../assets/meteo.png")} style={{width:100, height:100}}/>
            <Text style={styleSheet.label}>Your name please!!</Text>
            <TextInput
                style={styleSheet.input}
                onChangeText={(text) => setName(text)}
                value={name}
            />
            <Button
                onPress={handleSubmit}
                title="OK"
                color="#274288"
            />
        </View>
    );
}

IntroFormScreen.protoTypes = {

    navigation: PropTypes.shape({
        navigate: PropTypes.func,
    }).isRequired,
};

export default IntroFormScreen;