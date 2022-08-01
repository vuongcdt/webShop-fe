import React, { useEffect, useState } from "react";
import { Configure } from "react-instantsearch-hooks-web";
import CustomSearchBox from "./CustomSearchBox";
import CustomHits from "./CustomHits";

function SearchModal() {
   const [render, setRender] = useState(0);
   const handleRender = () => {
      setRender(render + 1);
   };
   useEffect(() => {
      render && document.getElementById("btn-open-modal").click();
   }, [render]);

   return (
      <>
         {render && <InputSearch />}
         <div className="open-input-search-modal" onClick={() => handleRender()}></div>
      </>
   );
}

function InputSearch() {
   return (
      <div className="container">
         <button
            type="button"
            id="btn-open-modal"
            className="btn btn-primary  position-absolute top-50"
            data-bs-toggle="modal"
            data-bs-target="#exampleModal"
            hidden
         ></button>

         <Configure hitsPerPage={4} />
         <CustomSearchBox />
         <CustomHits />
      </div>
   );
}

export default SearchModal;
