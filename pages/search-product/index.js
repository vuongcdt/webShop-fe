import React, { useEffect, useState } from "react";
import { Configure } from "react-instantsearch-hooks-web";
import Breadcrumb from "../../components/Common/BreadCrumb";
import SubscribeBox from "../../components/Common/SubscribeBox";
import { functionJqueryProductCategory } from "../../components/component_vuong/Common";
import CustomHitSearchProduct from "../../components/component_vuong/searchProduct/CustomHitSearchProduct";
import FilterSearchProduct from "../../components/component_vuong/searchProduct/FilterSearchProduct";
import SortSearchProduct from "../../components/component_vuong/searchProduct/SortSearchProduct";

export default function Index() {
   useEffect(() => {
      functionJqueryProductCategory();
   }, []);

   useEffect(() => {
      $(".search-full").addClass("open");
      $(".search-type").focus();
      return () => {
         $(".search-full").removeClass("open");
      };
   }, []);

   return (
      <>
         <Breadcrumb title={"Search product"} />

         <section className="section-b-space">
            <div className="container">
               <div className="row">
                  <div className="col-lg-12 col-12 ratio_30">
                     <FilterSearchProduct />
                     <SortSearchProduct itemPerPage={10} />
                     <CustomHitSearchProduct typeSearch />
                  </div>
               </div>
            </div>
         </section>

         <SubscribeBox />
      </>
   );
}
