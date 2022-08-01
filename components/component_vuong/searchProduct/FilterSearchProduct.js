import React, { useEffect } from "react";
import { useClearRefinements } from "react-instantsearch-hooks-web";
import AccordionDiscount from "../../ProductCategory/AccordionDiscount";
import { functionJqueryProductCategory } from "../Common";
import RangeSlider from "../product-category/RangeSlider";
import FilterItemsComponent from "./FilterItemsComponent";

function FilterSearchProduct() {
   const {
      canRefine,
      createURL,
      refine: refineClearRefinements,
   } = useClearRefinements({ includedAttributes: ["price", "attributes_color", "categories_product", "material",'discount'] });

   useEffect(() => {
      functionJqueryProductCategory();
   }, []);

   const handleClearRefinements = () => {
      refineClearRefinements();
      const elementChecked = document.getElementsByClassName("checkbox_animated check-it");
      const listElement = [...elementChecked];
      listElement.map((element, index) => {
         element.checked = false;
      });
   };

   return (
      <div className="row gx-4 gy-5 ">
         <div className="col-12">
            <div className="filter-show-button mb-1">
               <a href="#" className="mobile-filter border-top-0">
                  <i data-feather="align-left" className="img-fluid blur-up lazyloaded"></i>
                  <h5>latest filter</h5>
               </a>
            </div>
         </div>

         <div className="col-12 m-0">
            <div className="top-filter-section">
               <ul>
                  <li className="back-btn">
                     <div className="mobile_back text-end">
                        <span>Back</span>
                        <i aria-hidden="true" className="fa fa-angle-right ps-2"></i>
                     </div>
                  </li>
                  <li className="filter-title">
                     <h6 className="theme-color">
                        filter :
                        <button className="btn btn-danger rounded p-2 ms-4 " onClick={() => handleClearRefinements()} hidden={!canRefine}>
                           Clear All
                        </button>
                     </h6>
                  </li>

                  <FilterItemsComponent attribute="pa_color" name="Color" />
                  <FilterItemsComponent attribute="categories.name" name="Category" />
                  <FilterItemsComponent attribute="pa_brand" name="Brand" />

                  <li className="onclick-title">
                     <h6>Price</h6>
                     <div className="onclick-content">
                        <RangeSlider />
                     </div>
                  </li>

                  <FilterItemsComponent attribute="discount" name="Discount">
                     <AccordionDiscount />
                  </FilterItemsComponent>
               </ul>
            </div>
         </div>
      </div>
   );
}

export default FilterSearchProduct;
