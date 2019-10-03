import React, { useState } from 'react';
import { Image } from 'react-native';
import PropTypes from 'prop-types';
import { Text, TextInput, Button, AsyncStorage } from 'react-native';
import {useDispatch} from 'react-redux';
import style from '../Style'; 

const Login = props => {
    // console.log(props);
    async function handleSubmit() {
        if(name !== '') {
            await AsyncStorage.setItem('name', name);
            dispatch.app.setName(name); 
            props.handleNavigate();
        }
    }

    const [name, setName] = useState('');
    const dispatch = useDispatch();

    return(
        <>
            <Image source={require("../assets/meteo.png")} style={{width:100, height:100}}/>
            <Text style={style.label}>{props.isEdit ?'Adjust your name' : 'Your name please!!'}</Text>
            <TextInput
                style={style.input}
                onChangeText={(text) => setName(text)}
                value={name}
            />
            <Button
                onPress={handleSubmit}
                title="OK"
                color={style.colorGold.color}
            />
        </>
    );
}

Login.protoTypes = {
    navigation: PropTypes.shape({
        navigate: PropTypes.func,
    }).isRequired,
};

export default Login;