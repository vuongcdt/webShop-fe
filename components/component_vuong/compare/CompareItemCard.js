import React, { useEffect } from "react";
import Link from "next/link";
import OnSale from "../product/OnSale";
import { conventToCurrency, functionJquery } from "../Common";
import { useDispatch } from "react-redux";
import { removeProductCompare } from "../../../store/compare/compareSlice";
import AddProduct from "./AddProduct";

function CompareItemCard({ id, objectID, price, name, regular_price, images, on_sale, slug, acf, front_image }) {
   const dispatch = useDispatch();

   const handleRemove = (id, event) => {
      event.preventDefault();
      dispatch(removeProductCompare(id));
   };

   useEffect(() => {
      functionJquery();
   }, [id]);

   return (
      <td>
         {!name ? (
            <AddProduct />
         ) : (
            <div className="product-box position-relative">
               <button type="button" className="btn-close m-1" onClick={(event) => handleRemove(id || objectID, event)}></button>
               <div className="product-image">
                  <Link href={"/product/" + slug}>
                     <a className="w-100 blur-up lazyload">
                        <img src={front_image || acf.front_image} className="img-fluid bg-img blur-up lazyload" alt="" />
                     </a>
                  </Link>
               </div>
               <div className="product-details">
                  <Link href={"/product/" + slug}>
                     <a>
                        <h6 className="fw-bold">{name}</h6>
                     </a>
                  </Link>

                  <div className="price-details mt-2">
                     <h6 className="font-green">
                        {conventToCurrency(price)}
                        <span hidden={!on_sale} className="font-light mx-2">
                           {conventToCurrency(regular_price)}
                        </span>
                        <OnSale type="compare" on_sale={on_sale} price={price} regular_price={regular_price} />
                     </h6>
                  </div>
               </div>
            </div>
         )}
      </td>
   );
}

export default CompareItemCard;
