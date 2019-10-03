import React from 'react'
import { View, Text } from 'react-native'
import { connect, useDispatch } from 'react-redux'
import Search from '../components/Search'
import List from '../components/List'
import style from '../Style'

const AddCityScreen = props => {
console.log('From AddCity:', props);
    return (
    <View style={style.searchView}>
        <Text style={style.questionStyle}>Search City:</Text>
        <Search/>
        <List/>
    </View>
      );
};

AddCityScreen.propTypes = {};

export default connect(({app}) => ({app}))(AddCityScreen);