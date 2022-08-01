import React, { useEffect, useState } from "react";
import { fetchApiReviewProduct } from "../../src/api/Api_vuong/fetchApi";

function LoadMore({ children }) {
   const [count, setCount] = useState(1);
   const handleClick = () => {
      setCount(count + 1);
   };
   return (
      <>
         {children.slice(0, 5 * count)}
         <div className="d-flex justify-content-center m-3">
            <button hidden={children.length < 6 || count > children.length / 5} className="btn btn-warning border rounded" onClick={handleClick}>
               Load More
            </button>
         </div>
      </>
   );
}

export default LoadMore;
