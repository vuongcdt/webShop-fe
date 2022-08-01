import React from "react";
import Skeleton from "react-loading-skeleton";
import PlaceHolderColorImage from "./PlaceHolderColorImage";

function PlaceHolderShopSection() {
   return (
      <section>
         <div className="container">
            <div className="row gx-4 gy-5">
               <div className="col-lg-12 col-12">
                  <div className="details-items">
                     <div className="row g-4">
                        <div className="col-md-6">
                           <div className="row g-4 ratio_asos slider-for">
                              <div className="col-12 ">
                                 <Skeleton height={800} />
                              </div>
                           </div>
                        </div>

                        <div className="col-md-6">
                           <div className="cloth-details-size">
                              <div className="details-image-concept">
                                 <Skeleton width={300} height={24} />
                              </div>

                              <div className="label-section">
                                 <Skeleton className="" width={170} height={20} />
                              </div>

                              <h3 className="price-detail">
                                 <Skeleton className="" width={100} height={30} />
                              </h3>
                              <PlaceHolderColorImage />

                              <Skeleton className=" m-3" width={170} height={20} />
                              <div className="d-flex flex-row">
                                 <Skeleton className=" me-2" width={50} height={50} />
                                 <Skeleton className=" me-2" width={50} height={50} />
                                 <Skeleton className=" me-2" width={50} height={50} />
                                 <Skeleton className=" me-2" width={50} height={50} />
                              </div>

                              <div className="product-buttons">
                                 <Skeleton className=" m-2" width={200} height={50} />
                                 <Skeleton className=" m-2" width={200} height={50} />
                              </div>

                              <ul className="product-count shipping-order">
                                 <Skeleton className=" me-2" width={"100%"} height={50} />
                              </ul>

                              <div className="border-product">
                                 <h6 className="product-title d-block">
                                    <Skeleton className=" me-2" width={70} height={20} />
                                 </h6>
                                 <div className="product-icon">
                                    <Skeleton className=" me-2" width={50} height={50} />
                                    <Skeleton className=" me-2" width={50} height={50} />
                                    <Skeleton className=" me-2" width={50} height={50} />
                                    <Skeleton className=" me-2" width={50} height={50} />
                                    <Skeleton className=" me-2" width={50} height={50} />
                                 </div>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </div>
      </section>
   );
}

export default PlaceHolderShopSection;
