import React from "react";
import { useRefinementList } from "react-instantsearch-hooks-web";
import RatingDetails from "../Product/RatingDetails";

function AccordionRating() {
   const { items, refine ,} = useRefinementList({ attribute: "average_rating", limit: Infinity });

   const handleCheck = (rating) => {
      const listRatings = items
         .map((item) => item.value)
         .filter((value) => {
            if (+value >= rating && +value < rating + 1) {
               return value;
            }
         });
      listRatings[0] ? listRatings.map((rating) => refine(+rating)) : refine(6);
   };
   return [5, 4, 3, 2, 1, 0].map((item, index) => (
      <li key={index} className="w-100">
         <div className="form-check ps-0 custome-form-check">
            <input
               className="checkbox_animated check-it"
               type="checkbox"
               id="flexCheckDefault"
               defaultChecked={false}
               onChange={(e) => handleCheck(item)}
            />
            <div className="form-check-label">
               <RatingDetails average_rating={item} />
            </div>
         </div>
      </li>
   ));
}

export default AccordionRating;
