import { WeatherCity } from '../types';

export const PAKISTAN_CITIES_WEATHER: WeatherCity[] = [
  {
    id: 'faisalabad',
    name: 'Faisalabad (پنجاب)',
    province: 'Punjab - Agri Capital',
    temp: 34,
    condition: 'Sunny & Warm',
    humidity: 58,
    rainfall: '12 mm (Moderate Monsoon)',
    soilMoisture: '64% Optimal',
    recommendation: 'Ideal weather for cotton field scouting and rice nursery management.',
    icon: 'Sun'
  },
  {
    id: 'multan',
    name: 'Multan (جنوبی پنجاب)',
    province: 'Punjab - Cotton & Mango Hub',
    temp: 38,
    condition: 'Hot & Clear',
    humidity: 42,
    rainfall: '4 mm Low',
    soilMoisture: '48% Needs Watering',
    recommendation: 'Ensure timely evening irrigation for sugarcane and cotton crops.',
    icon: 'ThermometerSun'
  },
  {
    id: 'sukkur',
    name: 'Sukkur (سندھ)',
    province: 'Sindh - Dates & Paddy Zone',
    temp: 39,
    condition: 'Hot & Humid',
    humidity: 52,
    rainfall: '0 mm Clear',
    soilMoisture: '55% Moderate',
    recommendation: 'Maintain water depth in paddy fields for Basmati & IRRI crops.',
    icon: 'SunMedium'
  },
  {
    id: 'peshawar',
    name: 'Peshawar (خیبر پختونخوا)',
    province: 'KPK - Tobacco & Maize Belt',
    temp: 32,
    condition: 'Partly Cloudy',
    humidity: 62,
    rainfall: '22 mm Good Monsoon',
    soilMoisture: '72% Moist',
    recommendation: 'Drain standing runoff water in young maize fields.',
    icon: 'CloudSun'
  },
  {
    id: 'quetta',
    name: 'Quetta (بلوچستان)',
    province: 'Balochistan - Fruit Orchards',
    temp: 26,
    condition: 'Pleasant & Dry',
    humidity: 30,
    rainfall: '0 mm Clear',
    soilMoisture: '38% Low',
    recommendation: 'Drip irrigate apple and grape orchards during afternoon hours.',
    icon: 'Wind'
  },
  {
    id: 'swat',
    name: 'Swat Valley (سوات)',
    province: 'KPK - Off-season Vegetables',
    temp: 24,
    condition: 'Cool & Mild Rain',
    humidity: 70,
    rainfall: '35 mm Showers',
    soilMoisture: '80% High',
    recommendation: 'Fungicide preventive check for valley tomato and potato crops.',
    icon: 'CloudRain'
  }
];
