import React from "react";
import { useRefinementList } from "react-instantsearch-hooks-web";

function AccordionDiscount() {
   const { items, refine, canRefine } = useRefinementList({ attribute: "discount", limit: Infinity });
   if (!canRefine) return null;
   const listValue = items.map((item) => +item.value);
   const maxValue = Math.floor(Math.max(...listValue) / 10 + 1);

   const handleCheck = (range) => {
      const listDiscount = items
         .map((item) => item.value)
         .filter((value) => {
            if (+value >= range * 10 && +value < range * 10 + 10) {
               return value;
            }
         });
      listDiscount[0] ? listDiscount.map((range) => refine(+range)) : refine(maxValue + 10);
   };
   return Object.keys(Array(maxValue).fill(0)).map((item, index) => (
      <li key={index} className="w-100">
         <div className="form-check ps-0 custome-form-check">
            <input
               className="checkbox_animated check-it"
               type="checkbox"
               id="flexCheckDefault"
               defaultChecked={false}
               onChange={(e) => handleCheck(item)}
            />
            <div className="form-check-label">{item * 10}% and above</div>
         </div>
      </li>
   ));
}
export default AccordionDiscount;
