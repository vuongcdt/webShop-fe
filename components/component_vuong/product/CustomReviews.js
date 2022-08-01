import React from "react";
import RatingDetails from "../../Product/RatingDetails";
import { getPercent } from "../Common";

function CustomReviews({ listReviews, average_rating,rating_count }) {
   const ratingPercent = (num) => getPercent(listReviews.filter((item, index) => item.rating == num).length, listReviews.length);

   return (
      <div className="col-lg-4 ">
         <div className="customer-rating">
            <h2>Customer reviews</h2>
            <RatingDetails average_rating={average_rating} />

            <div className="global-rating">
               <h5 className="font-light">{listReviews.length} Ratings</h5>
            </div>

            <ul className="rating-progess">
               {[5, 4, 3, 2, 1].map((value, index) => (
                  <li key={index} >
                     <h5 className="me-3">{value} Star</h5>
                     <div className="progress">
                        <div
                           className="progress-bar"
                           role="progressbar"
                           style={{ width: `${ratingPercent(value)}` }}
                           aria-valuenow="50"
                           aria-valuemin="0"
                           aria-valuemax="100"
                        ></div>
                     </div>
                     <h5 className="ms-3">{ratingPercent(value)}</h5>
                  </li>
               ))}
            </ul>
         </div>
      </div>
   );
}

export default CustomReviews;
