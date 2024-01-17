import axios from 'axios';
const geoCode_base_url = 'https://geocode.maps.co/search?q=';
const geoCode_api_key = '65a722ab4ac29980375437tkn23beb6'

const openMeteo_base_url = 'https://api.open-meteo.com/v1/forecast?'

const geoCodeApi = axios.create({
    baseURL: geoCode_base_url
});

const openMeteoApi = axios.create({
    baseURL: openMeteo_base_url
});

export async function getCoordinates(city) {
    try{
        const response = await geoCodeApi.get(`${city}&api_key=${geoCode_api_key}`);
        const coordinates = {
            lat: response.data[0].lat,
            lon: response.data[0].lon
        }
        return coordinates;
    } catch(err) {
        console.log(err)
        return null;
    }

}

export async function getForecast (coordinates) {
    const hour = new Date().getHours();
    const url = `${openMeteo_base_url}latitude=${coordinates.lat}&longitude=${coordinates.lon}&hourly=temperature_2m,weather_code&timezone=America%2FSao_Paulo&forecast_days=1`
    const response = await fetch(url);
    if(response.ok) {
        const responseObject = await response.json();
        return responseObject.hourly.temperature_2m;
    }
    return null;
}

export async function search (city) {
    const coordinates = await getCoordinates(city);
    const dailyForecast = await getForecast(coordinates);
    return dailyForecast;
}