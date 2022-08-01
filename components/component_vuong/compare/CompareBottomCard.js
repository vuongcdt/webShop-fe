import React, {  useEffect } from "react";
import Link from "next/link";
import {  functionJquery } from "../Common";
import { useDispatch } from "react-redux";
import { removeProductCompare } from "../../../store/compare/compareSlice";
import AddProduct from "./AddProduct";

function CompareBottomCard({ id, name, slug, acf, front_image ,objectID}) {
   const dispatch = useDispatch();

   const handleRemove = (id , event) => {
      event.preventDefault();
      dispatch(removeProductCompare(id));
   };

   useEffect(() => {
      functionJquery();
   }, [id,objectID]);



   return (
      <>
         {!name ? (
            <AddProduct bottom/>
         ) : (
            <div className="product-box ">
               <div className="position-relative compare-button-card ">
                  <button type="button" className="btn-close mt-3" onClick={(event) => handleRemove(id||objectID, event)}></button>
                  <div className=" round-arrow1">
                     <div className="row g-3">
                        <div className="col-12">
                           <div className="product-image ">
                              <Link href={"/product/" + slug}>
                                 <a className="w-100 blur-up lazyload">
                                    <img src={front_image || acf.front_image} className="img-fluid bg-img blur-up lazyload" alt="" />
                                 </a>
                              </Link>
                              <div className="product-details" hidden={false}>
                                 <Link href={"/product/" + slug} passHref>
                                    <h3>{name}</h3>
                                 </Link>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         )}
      </>
   );
}

export default CompareBottomCard;
