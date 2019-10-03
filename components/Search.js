import React, { useState, useEffect } from 'react'
import { Button, TextInput, AsyncStorage } from 'react-native';
import { connect, useSelector, useDispatch } from 'react-redux';
import style from '../Style'; 

const Search = props => {
    
    async function submitCity() {
        await AsyncStorage.setItem('cities', cities);
        dispatch.app.setCities(cities);
    }

    useEffect(() => {
        //console.log('toto: ', props);
        if(cities) {
            setCities(cities);
            console.log('From Search: ', props)
        }
    });

    const dispatch = useDispatch();
    const [cities, setCities] = useState('');

    return (
        <>
            <TextInput
                style={style.input2}  
                onChangeText={(text) => setCities(text)}
                value={cities}
            />
            <Button
                onPress={submitCity}
                title="Search"
                color={style.colorGold.color}
            />
        </>
    );
}

Search.propTypes = {};

export default connect(({app}) => ({app}))(Search);