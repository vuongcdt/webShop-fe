import React, { useEffect, useState } from "react";
import { useSearchBox } from "react-instantsearch-hooks-web";

let timer = 0;

function CustomSearchBox() {
   const { refine } = useSearchBox();
   const [valueInput, setvalueInput] = useState("");
   const elementInput = document.getElementById("input-search");
   const handleSearch = () => {
      setvalueInput(elementInput.value);
   };
   useEffect(() => {
      timer && clearTimeout(timer);
      timer = setTimeout(() => {
         refine(valueInput);
      }, 500);
   }, [valueInput]);

   const myModalEl = document.getElementById("exampleModal");
   myModalEl.addEventListener("hidden.bs.modal", function (event) {
      setvalueInput("");
   });

   return (
      <>
         <section className="search-section  p-0">
            <div className="container">
               <div className="row">
                  <div className="col-12">
                     <div className="title title1 text-center m-0">
                        <h3>Search For Products</h3>
                     </div>
                  </div>
                  <div className="col-lg-6 col-md-8 mx-auto ">
                     <div className="search-bar">
                        <div className="input-group search-bar w-100 mb-3">
                           <input
                              id="input-search"
                              type="search"
                              className="form-control"
                              placeholder="Search"
                              value={valueInput}
                              onChange={() => handleSearch()}
                           />
                           <button className="input-group-text" id="basic-addon3" onClick={handleSearch}>
                              <i className="fas fa-search"></i>
                           </button>
                        </div>
                     </div>
                  </div>
               </div>
            </div>
         </section>
      </>
   );
}

export default CustomSearchBox;
