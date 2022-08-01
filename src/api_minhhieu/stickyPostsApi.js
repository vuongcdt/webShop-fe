import { useQuery } from 'react-query';
import { BLOG_LIST } from '../../utils/api_minhhieu';
import axios from 'axios';

const fetchStickyPosts = async () => {
    const result = await axios.get(BLOG_LIST,
    {
        params: {
            sticky:true,
            per_page:5
        }
    });
  
    return result.data;
}

export const useStickyPosts = (param) => {
    return useQuery(['related-post', param], () => fetchStickyPosts(param));
}