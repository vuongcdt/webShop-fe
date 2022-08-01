const WOO_CONSUMER_KEY = 'ck_ab44ff98b7ac8c629b107399eb0b0c8c26e048c4';
const WOO_CONSUMER_SECRET = 'cs_0bdbe269c96098bfd657abd4e2d752632f46aa20';
const BASE_URL = 'http://localhost:3000';
const APP_CHAT_ID = '9B3B3B95-87D5-40B0-812F-58EBC77FD7EA';
const trimHTML = function (string) {
    return string.replace(/(<([^>]+)>)/gi, '');
};
export {
    WOO_CONSUMER_KEY,
    WOO_CONSUMER_SECRET,
    BASE_URL,
    APP_CHAT_ID,
    trimHTML,
};
