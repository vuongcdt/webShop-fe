import React from "react";
import { useRefinementList } from "react-instantsearch-hooks-web";

function FilterItemsComponent({ name, attribute, typeProductCategory, children }) {
   const { refine, items, canRefine } = useRefinementList({ attribute: attribute, limit: Infinity });
   return (
      <li className="onclick-title " key={name}>
         <h6 hidden={typeProductCategory}>{name}</h6>
         <ul className={typeProductCategory ? "" : "onclick-content"}>
            {children ||
               items.map(({ value, count }, index) => (
                  <li key={index}>
                     <div className="form-check ps-0 custome-form-check">
                        <input
                           className="checkbox_animated check-it"
                           type="checkbox"
                           id="flexCheckDefault"
                           defaultChecked={false}
                           onChange={() => refine(value)}
                        />
                        <label className="form-check-label" htmlFor="flexCheckDefault12">
                           {value}
                           {attribute === "discount" && "% and above"}
                        </label>
                        <div className="font-light ms-auto">({count})</div>
                     </div>
                  </li>
               ))}
         </ul>
      </li>
   );
}

export default FilterItemsComponent;
