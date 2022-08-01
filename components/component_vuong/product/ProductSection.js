import React, { Fragment, useEffect } from "react";
import { useQuery } from "react-query";
import { fetchApiGetCategories, fetchApiProductSection } from "../../../src/api/Api_vuong/fetchApi";
import { useRouter } from "next/router";
import ProductCard from "../../Product/ProductCard";
import { errorModal } from "../Common";
import PlaceHolderCard from "../../Product/PlaceHolderCard";

function ProductSection({ id, categories }) {
   const {
      isLoading,
      data = [],
      error,
      isError,
      isFetching,
   } = useQuery(["ProductSection", id], () => fetchApiProductSection(categories[0].id, id), {
      enabled: Boolean(categories),
   });
   useEffect(() => {
      let slick = $(".slide-4").slick({
         dots: true,
         infinite: true,
         speed: 500,
         arrows: false,
         slidesToShow: 4,
         slidesToScroll: 1,
         autoplay: true,
         autoplaySpeed: 1500,
         responsive: [
            {
               breakpoint: 1200,
               settings: {
                  slidesToShow: 3,
               },
            },
            {
               breakpoint: 992,
               settings: {
                  slidesToShow: 2,
               },
            },
            {
               breakpoint: 420,
               settings: {
                  slidesToShow: 2,
               },
            },
         ],
      });

      return () => {
         slick.slick("unslick");
      };
   }, [data]);
   useEffect(() => {
      errorModal(isError, error);
   }, [error, isError]);
   
   return (
      <section className="ratio_asos section-b-space overflow-hidden">
         <div className="container">
            <div className="row">
               <div className="col-12">
                  <h2 className="mb-lg-4 mb-3 ">Customers Also Bought These</h2>

                  {isLoading || isError || isFetching || !id ? (
                     <div className="d-flex justify-content-around">
                        <PlaceHolderCard />
                        <PlaceHolderCard />
                        <PlaceHolderCard />
                        <PlaceHolderCard />
                     </div>
                  ) : (
                     <div className="product-wrapper product-style-2 p-0 slide-4 light-arrow bottom-space">
                        {data.map((item, index) => (
                           <Fragment key={index}>
                              <ProductCard {...item} />
                           </Fragment>
                        ))}
                     </div>
                  )}
               </div>
            </div>
         </div>
      </section>
   );
}

export default ProductSection;
