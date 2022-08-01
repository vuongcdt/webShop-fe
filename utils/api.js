const BASE_URL_API = 'https://voxohub.xyz';

const GENERATE_AUTH_COOKIE = BASE_URL_API + '/api/user/generate_auth_cookie';
const REGISTER_ACCOUNT = BASE_URL_API + '/api/user/register/';
const GET_CURRENT_USER = BASE_URL_API + '/api/user/get_currentuserinfo/';
const GET_NONE = BASE_URL_API + '/api/get_nonce/';
const SEND_CODE_EMAIL_RESET_PASSWORD = BASE_URL_API + '/wp-json/bdpwr/v1/reset-password';
const RESET_PASSWORD = BASE_URL_API + '/wp-json/bdpwr/v1/set-password';
const VALIDATE_CODE = BASE_URL_API + '/wp-json/bdpwr/v1/validate-code';

export { BASE_URL_API, GENERATE_AUTH_COOKIE, GET_CURRENT_USER, REGISTER_ACCOUNT, GET_NONE, SEND_CODE_EMAIL_RESET_PASSWORD, RESET_PASSWORD, VALIDATE_CODE };
