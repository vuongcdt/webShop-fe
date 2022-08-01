import React from "react";
import Skeleton from "react-loading-skeleton";

function PlaceHolderCard() {
   return (
      <div className="product-box">
         <div className="img-wrapper">
            <div className="front">
               <Skeleton height={300} />
            </div>
         </div>
         <div className="product-details">
            <div className="rating-details">
               <span className="font-light grid-content">  
                  <Skeleton className="me-3" width={150} height={16} />
               </span>
               <Skeleton width={150} height={16} />
            </div>
            <div className="main-price">
               <Skeleton width={250} height={22} className='me-2'/>
               <div className="listing-content">
                  <Skeleton height={16} count={5} />
                  <Skeleton width="50%" height={16} />
               </div>
               <Skeleton width={90} height={36} />
            </div>
         </div>
      </div>
   );
}

export default PlaceHolderCard;
