import axios from 'axios';

const API = axios.create({
  baseURL: process.env.REACT_APP_API_URL || 'http://localhost:5000/api',
});

export const fetchArtists = () => API.get('/artists');
export const fetchAlbums = () => API.get('/albums');
export const fetchTracks = () => API.get('/tracks');

export default API;
