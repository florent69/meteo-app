import React from 'react';
import PropTypes from 'prop-types';
import { View } from 'react-native';
import Login from '../components/Login';
import style from '../Style'

const EditScreen = props => {
  async function handleNavigate() {  
    props.navigation.navigate('Welcome');
}
return (
<View style={style.container}>
    <Login 
    handleNavigate={handleNavigate}
    isEdit={true}
    />
</View>
  );
};

EditScreen.propTypes = {
  navigation: PropTypes.shape({
    navigate: PropTypes.func,
  }).isRequired,
};

export default EditScreen;