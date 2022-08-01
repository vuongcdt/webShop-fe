import { useQuery } from 'react-query';
import { BLOG_LIST } from '../../utils/api_minhhieu';
import {getPostCategoryId} from '../../utils/helpers';
import axios from 'axios';

const fetchBlogListByCategory = async (param) => {
  const result = await axios.get(BLOG_LIST,
  {
    params: {
        categories:getPostCategoryId(param.category),
        page:param.page,
        per_page:12
    }
  });

  return {
    responseInfo: result.data, 
    totalPost: result.headers['x-wp-total'],
    totalPage: result.headers['x-wp-totalpages'],
  }
}

export const useBlogListCategory = (param) => {
  return useQuery(['blog-list-category', param], () => fetchBlogListByCategory(param));
}