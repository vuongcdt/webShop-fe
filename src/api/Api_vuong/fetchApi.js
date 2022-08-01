import axios from "axios";
import { BASE_URL_API } from "../../../utils/api";
import queryString from "query-string";
import { convertObjectToParams } from "../../../components/component_vuong/Common";
import Swal from "sweetalert2";

export const fetchApiWP = axios.create({
   baseURL: BASE_URL_API + "/wp-json/wp/v2/",
});

export const fetchApi = axios.create({
   baseURL: BASE_URL_API + "/wp-json/wc/v3/",
   headers: {
      "content-type": "application/json",
      Authorization: "Basic Y2tfYWI0NGZmOThiN2FjOGM2MjliMTA3Mzk5ZWIwYjBjOGMyNmUwNDhjNDpjc18wYmRiZTI2OWM5NjA5OGJmZDY1N2FiZDRlMmQ3NTI2MzJmNDZhYTIw",
   },
   paramsSerializer: (params) => queryString.stringify(params),
});

export const fetchApiGetCategories = async (query) => {
   try {
      const { slug, page } = query;
      const response = await fetchApi.get("/products/categories/?slug=" + slug);
      const responseId = response.data[0].id;
      const url = "/products?" + convertObjectToParams({ per_page: "12", page: "1", ...query,
      //  category: responseId, 
       slug: "" });
      const data = await fetchApi.get(url);
      data.idCategory = responseId;
      return data;
   } catch (error) {
      console.log("error fetchApiGetCategories", error);
   }
};

export const fetchApiProductBySlug = async (slug) => {
   try {
      const res = await fetchApi.get("/products?slug=" + slug);
      return res.data[0]||{data_null:'error'};
   } catch (error) {
      console.log("error fetchApiProductBySlug", error);
   }
};

export const fetchApiNameColor = async (id) => {
   try {
      const res = await fetchApi.get("/products/attributes/2/terms/" + id);
      return res.data;
   } catch (error) {
      console.log("error fetchApiNameColor", error);
   }
};
export const fetchApiImageColorWP = async (id) => {
   try {
      const res = await fetchApiWP.get("/media/" + id);
      return res.data;
   } catch (error) {
      console.log("error fetchApiImageColorWP", error);
   }
};
export const fetchApiReviewProduct = async (id,totalItems=5) => {
   try {
      const res = await fetchApi.get(`/products/reviews?per_page=${totalItems}&product=${id}`);
      return res;
   } catch (error) {
      console.log("error fetchApiReviewProduct", error);
   }
};

export const fetchApiPostReviewProduct = async (url, id) => {
   try {
      await fetchApi.post("/products/reviews?" + url);
      const res = await fetchApi.get("/products/reviews?product=" + id);
      return res.data;
   } catch (error) {
      Swal.fire({
         title: "Error!",
         text: error.response.data.message,
         icon: "error",
         confirmButtonText: "Close",
      });
      return error;
   }
};
export const fetchApiAllReviews = async (page = "1") => {
   const res = await fetchApi.get("/products/reviews?per_page=12&page=" + page);
   return res;
};

export const fetchApiColorImage = async (listVariation) =>
   await Promise.all(
      listVariation.map(async ({ image, product_variation }) => {
         const resImageColor = await fetchApiImageColorWP(image);
         const resNameClor = await fetchApiNameColor(product_variation);
         return { source_url: resImageColor.source_url, alt: resNameClor.name };
      })
   );

export const fetchApiProductSection = async (idSlug, id) => {
   const res = await fetchApi(`/products?category=${idSlug}&exclude=${id}`);
   return res.data;
};

export const fetchApiFaq=async()=>{
   const res=await fetchApi('https://voxohub.xyz/wp-json/acf/v3/options/options')
   return res.data.acf.list_question
}