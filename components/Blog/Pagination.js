import { useEffect, useState } from 'react';
import ReactPaginate from 'react-paginate';
import { useRouter } from 'next/router';

// const items = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];

// function Items({ currentItems }) {
//   return (
//     <>
//       {currentItems &&
//         currentItems.map((item) => (
//           <div key={item}>
//             <h3>Item #{item}</h3>
//           </div>
//         ))}
//     </>
//   );
// }

function Pagination({ itemsPerPage, data, url }) {
    //   const [currentItems, setCurrentItems] = useState(null);
    const [pageCount, setPageCount] = useState(0);

    const [itemOffset, setItemOffset] = useState(0);

    const router = useRouter();

    useEffect(() => {
        //const endOffset = itemOffset + itemsPerPage;
        // setCurrentItems(data.responseInfo);//items.slice(itemOffset, endOffset)
        setPageCount(data.totalPage);
    }, [itemOffset, itemsPerPage]);

    const handlePageClick = (event) => {
        router.push({
            pathname: url.pathname,
            query: {
                keyword: url.query,
                page: event.selected * 1 + 1,
            },
        });
        // const newOffset = (event.selected * itemsPerPage) % items.length;
        // console.log(
        //   `User requested page number ${event.selected}, which is offset ${newOffset}`
        // );
        // setItemOffset(newOffset);
    };

    return (
        <div className="page-section">
            <ReactPaginate
                breakLabel="..."
                nextLabel={
                    <span aria-hidden="true">
                        <i className="fas fa-chevron-right"></i>
                    </span>
                }
                onPageChange={handlePageClick}
                pageRangeDisplayed={3}
                pageCount={pageCount}
                previousLabel={
                    <span aria-hidden="true">
                        <i className="fas fa-chevron-left"></i>
                    </span>
                }
                renderOnZeroPageCount={null}
                pageClassName={'page-item'}
                nextClassName={'page-item'}
                previousClassName={'page-item'}
                breakClassName={'page-item'}
                pageLinkClassName={'page-link'}
                previousLinkClassName={'page-link'}
                breakLinkClassName={'page-link'}
                nextLinkClassName={'page-link'}
                containerClassName={'pagination'}
                activeClassName={'page-item active'}
            />
        </div>
    );
}

export default Pagination;
