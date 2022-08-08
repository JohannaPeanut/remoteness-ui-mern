import api from './api';

export const createNewLandscape = () => api.get('/landscape').then((response) => response.data);