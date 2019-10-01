import React from 'react';
import { View, Text } from 'react-native';
import { useSelector} from 'react-redux';

const AddCityScreen = props => {
  const name = useSelector(state=>state.app.name);

    return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text style={{color: '#D90022', fontSize: 25, fontWeight: 'bold' }}>{name}! </Text>
        <Text style={{color: '#274288', fontSize: 20, fontWeight: 'bold' }}>Which city do you want the weather from?</Text>
    </View>
      );
};

AddCityScreen.propTypes = {};

export default AddCityScreen;