import React, {useState, useEffect, useCallback} from 'react'
import { TouchableOpacity, FlatList, Text } from 'react-native'
import { connect } from 'react-redux';
import { MaterialCommunityIcons } from '@expo/vector-icons'
import style from '../Style'

const List = props => {


    const [selected, setSelected] = useState(new Map());

    const DATA = [
        
            {
                id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
                name: 'First Item',
              },
              {
                id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
                name: 'Second Item',
              },
              {
                id: '58694a0f-3da1-471f-bd96-145571e29d72',
                name: 'Third Item',
              },
        
    ];
    //console.log('List:' , DATA);

    const onSelect = useCallback(
        id => {
          const newSelected = new Map(selected);
          newSelected.set(id, !selected.get(id));
          setSelected(newSelected);
        },
        [selected],
    );

    function Item({ id, title, /*temp,*/ selected, onSelect }) {
        return (
          <TouchableOpacity
            onPress={() => onSelect(id)}
            style={[
              style.item, { backgroundColor: selected ? '#274288' : '#D90022' },
            ]}
          >
            <Text style={style.textStyle}>{title}</Text>
            {/* <Text style={style.textStyle}>{temp}°</Text> */}
            {/* <MaterialCommunityIcons size={40} name={weather ? weather : 'loading'} color='#FFF' />  */}
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
                // temp={Math.round(item.main.temp)}
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