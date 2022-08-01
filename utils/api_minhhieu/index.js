import { BASE_URL_API } from "../api";

const BLOG_LIST = BASE_URL_API + '/wp-json/wp/v2/posts/';
const BlOG_LIST_CATEGORY = BASE_URL_API + '/wp-json/wp/v2/posts?categories=';
const FEATURED_MEDIA = BASE_URL_API + '/wp-json/wp/v2/media/';
const POST_AUTHOR = BASE_URL_API + '/wp-json/wp/v2/users/';
const COMMENT = BASE_URL_API + '/wp-json/wp/v2/comments/';
const CREATE_COMMENT = BASE_URL_API + '/api/respond/submit_comment/';
const SHOP_INFORMATION = BASE_URL_API + '/wp-json/acf/v3/options/options';
const SUBSCRIBE_EMAIL = BASE_URL_API + '/wp-json/contact-form-7/v1/contact-forms/2883/feedback';
const CONTACT_US = BASE_URL_API + '/wp-json/contact-form-7/v1/contact-forms/2701/feedback';

export { 
    BLOG_LIST, 
    BlOG_LIST_CATEGORY, 
    FEATURED_MEDIA, 
    POST_AUTHOR,
    COMMENT,
    CREATE_COMMENT,
    SHOP_INFORMATION,
    SUBSCRIBE_EMAIL,
    CONTACT_US
};