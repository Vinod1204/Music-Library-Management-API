import axios from 'axios';

const API = axios.create({
  baseURL: process.env.REACT_APP_API_URL || 'http://localhost:5000/api',
});

export const fetchArtists = () => API.get('/artists');
export const fetchAlbums = () => API.get('/albums');
export const fetchTracks = () => API.get('/tracks');
export const signup = (email, password) => API.post('/auth/signup', { email, password });
export const login = (email, password) => API.post('/auth/login', { email, password });

export default API;
