import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { Configure,  useSearchBox } from "react-instantsearch-hooks-web";
import { functionJquerySearchFull } from "../component_vuong/Common";
import CustomSearchBoxNavBar from "../component_vuong/searchBar/CustomSearchBoxNavBar";
import HitNavbar from "../component_vuong/searchBar/HitNavbar";

import React from "react";

function SearchBar() {
   const [render, setRender] = useState(false);
   const handleRender = () => {
      setRender(true);
   };
   return (
      <>
         {render && <InputSearch />}
         <div className="open-input-search" onClick={() => handleRender()}></div>
      </>
   );
}

function InputSearch() {
   const { query } = useSearchBox();
   const router = useRouter();

   useEffect(() => {
      functionJquerySearchFull();
   }, []);

   useEffect(() => {
      if (query.length > 0 && router.pathname !== "/search-product") {
         router.push("/search-product/?product[query]=" + query);
      }
   }, [query.length]);

   return (
      <div className="search-full open">
         <Configure hitsPerPage={10} />
         <CustomSearchBoxNavBar />
         <HitNavbar />
      </div>
   );
}

export default SearchBar;
