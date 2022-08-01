import { Pagination, useHits, usePagination, useSearchBox } from "react-instantsearch-hooks-web";
import HitCompare from "./HitCompare";

function CustomHits() {
   const { hits } = useHits();
   const { query } = useSearchBox();
   const { isFirstPage, isLastPage } = usePagination();

   return (
      <>
         {hits.map((item, index) => (
            <HitCompare key={index} hit={item} />
         ))}
         {hits.length > 0 || !query ? (
            <div className="row">
               <div className="col-12">
                  <Pagination
                     padding={4}
                     showFirst={!isFirstPage}
                     showNext={false}
                     showPrevious={false}
                     showLast={!isLastPage}
                     classNames={{
                        root: "page-section mb-3 ",
                        list: "pagination",
                        item: "page-item",
                        selectedItem: "page-item active",
                        link: "page-link",
                     }}
                  />
               </div>
            </div>
         ) : (
            <p className="alert alert-warning mt-3 w-100 text-center ">There is no result</p>
         )}
      </>
   );
}

export default CustomHits;
