export const API_ENDPOINTS = {
  AUTH: {},
  PRIVATE: {},
  PUBLIC: {
    GET_USERS: '/users',
    GET_POSTS: '/posts',
    GET_COUNTRIES: '/timezone',
  },
} as const;

export const QUERIES = {
  AUTH: {},
  PRIVATE: {},
  PUBLIC: {
    GET_USERS: 'users',
    GET_POSTS: 'posts',
    GET_COUNTRIES: 'timezone',
  },
} as const;
