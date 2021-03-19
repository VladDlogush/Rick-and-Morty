import axios from 'axios';

axios.defaults.baseURL = 'https://rickandmortyapi.com/api';

export const fetchCharacters = () => axios.get(`/character`);

export const fetchLocations = () => axios.get(`/location`);

export const fetchEpisodes = () => axios.get(`/episode`);
