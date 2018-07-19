import fetchHandler from '../../lib/fetchHandler';

export const getCategories = (...args) => fetchHandler(...args);

export const getPosts = (...args) => fetchHandler(...args);

export const getComments = (...args) => fetchHandler(...args);
