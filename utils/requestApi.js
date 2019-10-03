const baseUrl = 'https://api.openweathermap.org/data/2.5/';
import {apiKey} from '../ApiKeys';

export function requestGet(endPoint, query='') {
    const headers = {
        Accept: 'application/json',
        'Content-Type': 'application/json',
    };

    endPoint = `${endPoint}?${query}&APPID=${apiKey}`;

    return fetch(baseUrl + endPoint, {
        method:'GET',
        headers,
    }).then(response => {
        if (response.status === 200) {
            return response
            .json()
            .then(json => {
                return json !== undefined ? json : {};
            })
            .catch(e => ({}));
        }
        return response.status;
    });
}