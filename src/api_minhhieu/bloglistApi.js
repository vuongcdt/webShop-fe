import { useQuery } from 'react-query';
import { BLOG_LIST } from '../../utils/api_minhhieu';
import axios from 'axios';

const fetchBlogListNewPost = async (param) => {
  const result = await axios.get(BLOG_LIST,
    {
      params: {
        page:param.page,
        per_page:25
      }
    });

  return {
    responseInfo: result.data, 
    totalPost: result.headers['x-wp-total'],
    totalPage: result.headers['x-wp-totalpages'],
  }
}

export const useBlogListNewPost = (param) => {
  return useQuery(['blog-list-new-post', param], () => fetchBlogListNewPost(param));
}