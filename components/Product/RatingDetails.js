import React, { useEffect, useState } from "react";

function RatingDetails({ average_rating ,showNum ,rating_count}) {
   return (
      <ul className="rating my-2 d-inline-block ">
         {Array(5)
            .fill(0)
            .map((item, index) =>
               index + 1 <= +average_rating ? (
                  <li key={index}  >
                     <i className="fas fa-star theme-color"></i>
                  </li>
               ) : (
                  <li key={index}  >
                     <i className="fas fa-star"></i>
                  </li>
               )
            )}
         {showNum&&<>({average_rating === "0.00" ? 0 : Number(average_rating).toFixed(1)})</>}
         {rating_count ? <> ({rating_count} reviews)</> : null}
      </ul>
   );
}

export default RatingDetails;
