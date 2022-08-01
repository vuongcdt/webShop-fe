import React from "react";
import { useSelector } from "react-redux";
import MostPopularCard from "../product-category/MostPopularCard";
import AddCompare from "./AddCompare";
function HitCompare({ hit }) {
   const compareProduct = useSelector((state) => state.compare.entities);
   const listCompare = Object.values(compareProduct);

   return (
      <div className="d-flex mb-2 row me-1">
         <div className="col-9">
            <MostPopularCard {...hit} hiddenCategories />
         </div>
         <div className="ms-auto col-3">
            <AddCompare item={hit} />
         </div>
      </div>
   );
}

export default HitCompare;
