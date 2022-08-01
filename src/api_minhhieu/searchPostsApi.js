import { useQuery } from 'react-query';
import { BLOG_LIST } from '../../utils/api_minhhieu';
import axios from 'axios';

const fetchSearchPosts = async (param) => {
    const result = await axios.get(BLOG_LIST,
    {
        params: {
            search:param.keyword,
            per_page:15,
            page:param.page
        }
    });
  
    return {
        responseInfo: result.data, 
        totalPost: result.headers['x-wp-total'],
        totalPage: result.headers['x-wp-totalpages'],
    }
}

export const useSearchPosts = (param) => {
    return useQuery(['search-post'], () => fetchSearchPosts(param), {enabled:param.allowFetch});
}