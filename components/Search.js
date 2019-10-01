import React from 'react';
import { View, Button, TextInput, Dimensions } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';

const { width }= Dimensions.get('window');

const Search = props => {
    async function handleSubmit() {
        if(name !== '') {
            await AsyncStorage.setItem('city', city);
            dispatch.app.setCity(city);
        }
    }
    const city = useSelector(state=>state.app.city);
    const dispatch = useDispatch();

    return (
        <View style={{width: width, justifyContent: 'center', alignItems: 'center'}}>
            <TextInput
                style={{width: '80%', height: 40, borderColor: '#274288', borderWidth: 1}}
                onChangeText={(text) => setCity(text)}
                value={city}
            />
            <Button
                onPress={handleSubmit}
                title="OK"
                color="#274288"
            />
        </View>
    );
}

Search.propTypes = {};

export default Search;