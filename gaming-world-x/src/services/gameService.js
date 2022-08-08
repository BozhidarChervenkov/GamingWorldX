import * as request from './requester';

const baseUrl = 'http://localhost:3030/data/games';

export const getAll = () => request.get(baseUrl);

export const create = (gameData) => request.post(baseUrl, gameData);

export const delGame = (gameId) => request.del(`${baseUrl}/${gameId}`);