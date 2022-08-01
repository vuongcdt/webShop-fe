import Script from "next/script";
import { useRouter } from "next/router";
import { fetchApiProductBySlug } from "../../src/api/Api_vuong/fetchApi";
import { useQuery } from "react-query";
import SubscribeBox from "../../components/Common/SubscribeBox";
import ShopSection from "../../components/component_vuong/product/ShopSection";
import ProductSection from "../../components/component_vuong/product/ProductSection";
import ClothReview from "../../components/component_vuong/product/ClothReview";
import { useEffect } from "react";
import PlaceHolderShopSection from "../../components/component_vuong/product/PlaceHolderShopSection";
import { errorModal } from "../../components/component_vuong/Common";
import PlaceHolderClothReview from "../../components/component_vuong/product/PlaceHolderClothReview";
import PlaceHolderProductSection from "../../components/component_vuong/product/PlaceHolderProductSection";
import { useDispatch } from "react-redux";
import { addRecentlyViewedProducts } from "../../store/recentlyViewedProducts/recentlyViewedProductsSlice";
import Breadcrumb from "../../components/Common/BreadCrumb";
import Skeleton from "react-loading-skeleton";

function ProductDetail() {
   const router = useRouter();
   const {
      query: { slug },
      isReady,
   } = router;
   const dispatch = useDispatch();

   const {
      isLoading,
      error,
      data = {},
      isError,
      isFetching,
   } = useQuery(["product", slug], () => fetchApiProductBySlug(slug), {
      enabled: Boolean(slug),
   });

   if (isReady && !slug) {
      router.push({
         pathname: `/404`,
      });
   }
   useEffect(() => {
      errorModal(isError, error);
   }, [isError, error]);

   useEffect(() => {
      if (data.id) {
         dispatch(addRecentlyViewedProducts(data));
      }
   }, [data]);

   if (!slug) return null;
   if (data.data_null) {
      router.push("/404");
      return;
   }

   return (
      <>
         <Breadcrumb title={isLoading || isError || isFetching ? <Skeleton /> : data.name} />

         {isLoading || isError || isFetching ? <PlaceHolderShopSection /> : <ShopSection {...data} />}
         {isLoading || isError || isFetching ? <PlaceHolderClothReview /> : <ClothReview {...data} />}
         {isLoading || isError || isFetching ? <PlaceHolderProductSection /> : <ProductSection {...data} />}

         <SubscribeBox />

         <Script src="/js/check-box-select.js" strategy="afterInteractive"></Script>
      </>
   );
}

export default ProductDetail;
