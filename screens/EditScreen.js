import React from 'react';
import PropTypes from 'prop-types';
import { View, Text } from 'react-native';

const EditScreen = props => (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text style={{color: 'black', fontSize: 25, fontWeight: 'bold' }}>Edit Screen</Text>
      </View>
);

EditScreen.propTypes = {};

export default EditScreen;