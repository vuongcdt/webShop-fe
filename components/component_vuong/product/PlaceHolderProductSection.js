import React from "react";
import PlaceHolderCard from "../../Product/PlaceHolderCard";

function PlaceHolderProductSection() {
   return (
      <section className="ratio_asos section-b-space overflow-hidden">
         <div className="container">
            <div className="row">
               <div className="col-12">
                  <h2 className="mb-lg-4 mb-3 ">Customers Also Bought These</h2>
                  <div className="d-flex justify-content-around">
                     <PlaceHolderCard />
                     <PlaceHolderCard />
                     <PlaceHolderCard />
                     <PlaceHolderCard />
                  </div>
               </div>
            </div>
         </div>
      </section>
   );
}

export default PlaceHolderProductSection;
