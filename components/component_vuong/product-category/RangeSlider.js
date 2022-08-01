import React, { useEffect } from "react";
import { useRange} from "react-instantsearch-hooks-web";

let rangeSlice = "";

function RangeSlider() {
   const {
      refine,
      range: { min, max },
      canRefine,
      start: [minHandle, maxHandle],
   } = useRange({ attribute: "price" });
   
   let $range = $(".js-range-slider");

   useEffect(() => {
      if (canRefine) {
         if (rangeSlice) {
            rangeSlice.reset();
            rangeSlice.destroy();
         }

         $range.ionRangeSlider({
            type: "double",
            min: min,
            max: max,
            from: minHandle,
            to: maxHandle,
            prefix: "$ ",
            step: 1,
            prettify_enabled: true,
            prettify_separator: ".",
            values_separator: " - ",
            force_edges: true,

            onFinish: function (data) {
               refine([data.from, data.to]);
            },
         });
         rangeSlice = $range.data("ionRangeSlider");
         rangeSlice.update({
            from: minHandle,
            to: maxHandle,
         });
      }
   }, [canRefine, minHandle, maxHandle, min, max]);

   return (
      <div className="range-slider category-list">
         <input type="text" className="js-range-slider" defaultValue="" />
      </div>
   );
}

export default RangeSlider;
