let API_URL = 'http://localhost:3000/api';
const AUTH_ROUTE = '/auth';
const USER_ROUTE = '/users';

if (process.env.NODE_ENV === 'production' ) API_URL = 'https://TODO';

export {API_URL, AUTH_ROUTE, USER_ROUTE};