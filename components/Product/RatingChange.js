import React, { useEffect, useState } from "react";

function RatingChange({ disabled }) {
   const [ratingChange, setRatingChange] = useState("");
   const handleRating = (index) => {
      !disabled && setRatingChange(index);
   };

   return (
      <ul className="rating mb-3 d-inline-block">
         {Array(5)
            .fill(0)
            .map((item, index) =>
               index + 1 <= +ratingChange ? (
                  <li key={index} role="button" onClick={() => handleRating(index + 1)}>
                     <i className="fas fa-star theme-color"></i>
                  </li>
               ) : (
                  <li key={index} role="button" onClick={() => handleRating(index + 1)}>
                     <i className="fas fa-star"></i>
                  </li>
               )
            )}

         <input type="hidden" value={ratingChange} className="form-control" id="rating" />
      </ul>
   );
}

export default RatingChange;
