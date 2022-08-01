import React from "react";
import Link from "next/link";
import { useHits, useSearchBox } from "react-instantsearch-hooks-web";
import { conventToCurrency, reduceStringLength } from "../Common";
import RatingDetails from "../../Product/RatingDetails";
import { useRouter } from "next/router";

function HitNavbar() {
   const {
      hits,
      results: { nbPages },
   } = useHits();
   const { query, refine, clear } = useSearchBox();

   const { pathname } = useRouter();

   return (
      <div className="search-suggestion" hidden={pathname === "/search-product"}>
         <ul className="custom-scroll row">
            {hits.slice(0, 4).map(({ name, front_image, acf, price, slug, average_rating }, index) => (
               <li key={index} className="col-lg-3 col-xl-3 col-md-6 col-12">
                  <div className="product-cart media">
                     <Link href={"/product/" + slug} passHref>
                        <img src={front_image || acf.front_image} role="button" className="img-fluid blur-up lazyload" alt="" />
                     </Link>
                     <div className="media-body">
                        <Link href={"/product/" + slug}>
                           <a role="button">
                              <h6 className="mb-1">{reduceStringLength(name)}</h6>
                           </a>
                        </Link>
                        <RatingDetails average_rating={average_rating} />
                        <p className="mb-0 mt-1">{conventToCurrency(price)}</p>
                     </div>
                  </div>
               </li>
            ))}
            {nbPages === 0 && query && <p className="alert alert-warning mt-3 w-100 text-center ">There is no result</p>}
         </ul>
      </div>
   );
}

export default HitNavbar;
