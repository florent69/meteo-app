import {requestGet} from '../utils/requestApi';
import {AsyncStorage} from 'react-native';

export const app = {
    state: {
        name:'',
        cities:[],
        informations:{},
    },
    reducers: {
        setName(state, name) {
            return {...state, name};
        },
        setCities(state, nameCity) {
            const cities = [...state.cities, nameCity]
            return {...state, cities};
        },
        setInformations(state, informations) {
            return {...state, informations};
        }
    },
    effects:(dispatch) => ({
        async getMeteoInformations(location) {
            //console.log(location);
            if(location.coords){
                const { coords: { latitude, longitude }} = location;
                const response = await requestGet('weather', `lat=${latitude}&lon=${longitude}`+`&units=metric`);

                if (response) {
                    this.setInformations(response);
                //console.log('From AppModel: ',response);
                }
            } else { 
                const response = await requestGet('weather', `q=${location}`+`&units=metric`);
                if (response) {
                    this.setCities(response);
                //console.log('From AppModel: ',response);
                }
            }
        }
    }
    )

};