import React, {useState, useEffect, useCallback} from 'react'
import { TouchableOpacity, FlatList, Text } from 'react-native'
import { connect } from 'react-redux';
import { MaterialCommunityIcons } from '@expo/vector-icons'
import { weatherConditions } from '../utils/WeatherConditions'
import style from '../Style'

const List = props => {

  const [selected, setSelected] = useState(new Map());
  const DATA = props.app.cities;
  const [weather, setWeather] = useState('');

  const onSelect = useCallback(
        id => {
          const newSelected = new Map(selected);
          newSelected.set(id, !selected.get(id));
          setSelected(newSelected);
        },
        [selected],
  );
  
  useEffect(() => {
    if(DATA.main) {
        setWeather(weatherConditions[DATA.weather[0].main].icon);
    }
  });

  function Item({ id, title, temp, selected, onSelect }) {
        return (
          <TouchableOpacity
            onPress={() => onSelect(id)}
            style={[
              style.item, { backgroundColor: selected ? '#274288' : '#D90022' },
            ]}
          >
            <Text style={style.textStyle}>{title}</Text>
             <Text style={style.textStyle}>{temp}°</Text> 
             <MaterialCommunityIcons size={40} name={weather ? weather : null} color='#FFF' /> 
          </TouchableOpacity>
        );
      }

    return (
        <>
          <FlatList
            data={DATA}
            renderItem={({ item }) => (
              <Item
                id={(item.id).toString()}
                title={item.name}
                temp={Math.round(item.main.temp)}
                selected={!!selected.get((item.id).toString())}
                onSelect={onSelect}
              />
            )}
            keyExtractor={item => (item.id).toString()}
            extraData={selected}
          />
        </>
      );
}

List.propTypes = {};

export default connect(({app}) => ({app}))(List);