import ReactPaginate from 'react-paginate';

function Pagination({ pageTotal = 0, onClickEvent, initialPage = 0 }) {
    return (
        <nav className="page-section">
            <ReactPaginate
                breakLabel="..."
                nextLabel={
                    <span aria-hidden="true">
                        <i className="fas fa-chevron-right"></i>
                    </span>
                }
                onPageChange={onClickEvent}
                pageRangeDisplayed={1}
                pageCount={pageTotal}
                previousLabel={
                    <span aria-hidden="true">
                        <i className="fas fa-chevron-left"></i>
                    </span>
                }
                renderOnZeroPageCount={null}
                pageClassName={'page-item'}
                breakClassName={'page-item'}
                pageLinkClassName={'page-link'}
                breakLinkClassName={'page-link'}
                activeClassName={'active'}
                containerClassName={'pagination'}
                previousClassName={'page-item'}
                nextClassName={'page-item'}
                previousLinkClassName={'page-link'}
                nextLinkClassName={'page-link'}
                initialPage={initialPage}
            />
        </nav>
    );
}

export default Pagination;
