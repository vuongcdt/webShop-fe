import { useQuery } from 'react-query';
import { BLOG_LIST } from '../../utils/api_minhhieu';
import axios from 'axios';

const fetchDetailPost = async (postSlug) => {

    if (postSlug) {
        const result = await axios.get(BLOG_LIST + '?slug=' + postSlug + '&_embed');
  
        return result;
    }
}
  
export const useDetailPost = (postSlug) => {
    return useQuery(['detail-post', postSlug], () => fetchDetailPost(postSlug))
}