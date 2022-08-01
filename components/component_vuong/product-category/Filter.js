import { useRouter } from "next/router";
import { useEffect, useState } from "react";

function Filter({  slug }) {
   const [itemsPerPage, setItemsPerPage] = useState("12");
   const router = useRouter();
   const {  per_page, orderby, order } = router.query;
   
   useEffect(() => {
      per_page && setItemsPerPage(per_page);
   }, [per_page]);

   return (
      <div id="list-items">
         <div className="row g-4">
            <div className="filter-button">
               <button className="btn filter-btn p-0">
                  <i data-feather="align-left"></i> Filter
               </button>
            </div>

            <div className="col-12">
               <div className="filter-options">
                  <div className="select-options">
                     <div className="page-view-filter">
                        <select
                           className="form-select"
                           aria-label="Default select example"
                           value={JSON.stringify({ orderby, order })}
                           onChange={(event) => {
                              router.push(
                                 {
                                    pathname: "/product-category/" + slug,
                                    query: {
                                       ...router.query,
                                       ...JSON.parse(event.target.value),
                                       slug: "",
                                     
                                       per_page: itemsPerPage,
                                       page: "1",
                                    },
                                 },
                                 null,
                                 { shallow: true }
                              );
                           }}
                        >
                           <option value={JSON.stringify({ orderby: "id", order: "asc" })}>Sort items</option>
                           <option value={JSON.stringify({ orderby: "title", order: "asc" })}>Alphabetically A-Z</option>
                           <option value={JSON.stringify({ orderby: "title", order: "desc" })}>Alphabetically Z-A</option>
                           <option value={JSON.stringify({ orderby: "price", order: "desc" })}>Price, High To Low</option>
                           <option value={JSON.stringify({ orderby: "price", order: "asc" })}>Price, Low To High</option>
                           <option value={JSON.stringify({ orderby: "date", order: "asc" })}>Date, Old To New</option>
                           <option value={JSON.stringify({ orderby: "date", order: "desc" })}>Date, New To Old</option>
                        </select>
                     </div>

                     <select
                        className="form-select"
                        aria-label="Default select example"
                        value={per_page}
                        onChange={(event) => {
                           router.push(
                              {
                                 pathname: "/product-category/" + slug,
                                 query: { ...router.query, slug: "", per_page: event.target.value, page: "1" },
                              },
                              null,
                              { shallow: true }
                           );
                           setItemsPerPage(event.target.value);
                        }}
                     >
                        <option value="12">12 items per page</option>
                        <option value="24">24 items per page</option>
                        <option value="48">48 items per page</option>
                     </select>
                  </div>
                  <div className="grid-options d-sm-inline-block d-none">
                     <ul className="d-flex">
                        <li className="two-grid">
                           <a>
                              <img src="/svg/grid-2.svg" className="img-fluid blur-up lazyload" alt="" />
                           </a>
                        </li>
                        <li className="three-grid d-md-inline-block d-none">
                           <a>
                              <img src="/svg/grid-3.svg" className="img-fluid blur-up lazyload" alt="" />
                           </a>
                        </li>
                        <li className="grid-btn active d-lg-inline-block d-none">
                           <a>
                              <img src="/svg/grid.svg" className="img-fluid blur-up lazyload" alt="" />
                           </a>
                        </li>
                        <li className="list-btn">
                           <a>
                              <img src="/svg/list.svg" className="img-fluid blur-up lazyload" alt="" />
                           </a>
                        </li>
                     </ul>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
}

export default Filter;
