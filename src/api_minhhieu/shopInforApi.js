import { useQuery } from 'react-query';
import { SHOP_INFORMATION } from '../../utils/api_minhhieu';
import axios from 'axios';

const fetchShopInfor = async () => {
  const result = await axios.get(SHOP_INFORMATION);

  return result;
}

export const useShopInfor = () => {
  return useQuery(['shop-infor'], () => fetchShopInfor());
}