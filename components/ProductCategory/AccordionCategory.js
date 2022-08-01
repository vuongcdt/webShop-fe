import React from "react";

import FilterItemsComponent from "../component_vuong/searchProduct/FilterItemsComponent";

function AccordionCategory({ attribute, name, children }) {

   return (
      <div className="accordion-item category-rating">
         <h2 className="accordion-header" id="headingTwo">
            <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo">
               {name}
            </button>
         </h2>
         <div id="collapseTwo" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
            <div className="accordion-body category-scroll">
               <ul className={name === "Rating" ? "" : "category-list"}>
                  {children || <FilterItemsComponent attribute={attribute} name={name} typeProductCategory />}
               </ul>
            </div>
         </div>
      </div>
   );
}

export default AccordionCategory;
