import React, { useEffect } from "react";
import { useRouter } from "next/router";

function PagePagination({ totalPages }) {
   const router = useRouter();
   const { page } = router.query;
   return (
      <nav hidden={!totalPages} className="page-section mb-3">
         <ul className="pagination">
            {page && (
               <PageItem numPage={1}>
                  <span aria-hidden="true">
                     <i className="fas fa-chevron-left"></i>
                  </span>
               </PageItem>
            )}
            <PageSection totalPages={totalPages}>
               {Array.from(Array(+totalPages).keys())
                  .slice(page > 3 && totalPages > 8 ? page - 3 : 0)
                  .map((item, index) => (
                     <PageItem key={index} numPage={item + 1}>
                        {item + 1}
                     </PageItem>
                  ))}
            </PageSection>
            {page !== totalPages && (
               <PageItem numPage={totalPages}>
                  <span aria-hidden="true">
                     <i className="fas fa-chevron-right"></i>
                  </span>
               </PageItem>
            )}
         </ul>
      </nav>
   );
}

function PageSection({ children, totalPages, page }) {
   const rest = children.length < 9 && totalPages > 8 && "...";
   if (children.length < 9) return [rest, ...children];
   return [...children.slice(0, 5), "...", ...children.slice(-2)];
}

function PageItem({ children, numPage }) {
   const router = useRouter();
   const { query } = router;
   const page = query.page || "1";
   const url = router.pathname.replace("[slug]", "");
   const queryDelSlug = { ...query };
   delete queryDelSlug.slug;

   return (
      <li className={numPage === +page ? "page-item active" : "page-item"}>
         <a
            href="#list-items"
            className="page-link"
            role="button"
            onClick={() => {
               router.push(
                  {
                     pathname: url + query.slug && query.slug,
                     query: numPage !== 1 && {
                        ...queryDelSlug,
                        page: numPage,
                     },
                  },
                  null,
                  {
                     scroll: false,
                     shallow: true,
                  }
               );
            }}
         >
            {children}
         </a>
      </li>
   );
}
export default PagePagination;
