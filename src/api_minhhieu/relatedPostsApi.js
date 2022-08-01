import { useQuery } from 'react-query';
import { BLOG_LIST } from '../../utils/api_minhhieu';
import axios from 'axios';

const fetchRelatedPosts = async (param) => {
    const result = await axios.get(BLOG_LIST,
    {
        params: {
            categories:param.categoryId,
            per_page:5,
            exclude:param.excludeId
        }
    });
  
    return result.data;
}

export const useRelatedPosts = (param) => {
    return useQuery(['related-post', param], () => fetchRelatedPosts(param));
}