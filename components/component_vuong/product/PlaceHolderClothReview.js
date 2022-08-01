import React from "react";
import Skeleton from "react-loading-skeleton";

function PlaceHolderClothReview() {
   return (
      <div className="container">
         <div className="row gx-4 gy-5">
            <div className="col-12">
               <div className="cloth-review">
                  <Skeleton className="mt-5" height={50} />
                  <div className="tab-content" id="nav-tabContent">
                  <Skeleton className="my-2" width={800} height={20} />
                  <Skeleton className="my-1" height={16} count={15}/>
                  <Skeleton height={16} width={500}/>

                  </div>
               </div>
            </div>
         </div>
      </div>
   );
}

export default PlaceHolderClothReview;
