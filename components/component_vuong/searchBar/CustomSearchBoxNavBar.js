import React, { useEffect, useRef } from "react";
import { useRouter } from "next/router";
import { useSearchBox } from "react-instantsearch-hooks-web";
import {  functionJquerySearchFull } from "../Common";
import _ from "lodash";

let timer = 0;

function CustomSearchBoxNavBar() {
   const { query, refine, clear } = useSearchBox();
   const router = useRouter();
   const ref = useRef();

   useEffect(() => {
      functionJquerySearchFull();
   }, []);

   const handleSearch = (e) => {
      timer && clearTimeout(timer);
      timer = setTimeout(() => {
         refine(e.target.value);
      }, 500);
   };

   return (
      <div className="input-group">
         <span className="input-group-text">
            <i data-feather="search" className="font-light"></i>
         </span>
         <input
            type="text"
            className="form-control search-type"
            placeholder="Search here.."
            defaultValue={query} 
            ref={ref}
            onChange={(e) => handleSearch(e)}
         />
         <span className="input-group-text close-search">
            <i data-feather="x" className="font-light"></i>
         </span>
      </div>
   );
}

export default CustomSearchBoxNavBar;
