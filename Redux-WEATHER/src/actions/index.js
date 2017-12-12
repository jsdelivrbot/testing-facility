import axios from 'axios';
import { WEATHER_API_KEY, BASE_URL } from '../constants';

export const FETCH_WEATHER = 'FETCH_WEATHER';

export function fetchWeather(city) {
    
    const url = `${BASE_URL}?appid=${WEATHER_API_KEY}&q=${city},us`;
    const request = axios.get(url);

    return {
        type: FETCH_WEATHER,
        payload: request
    };
}