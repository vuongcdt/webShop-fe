import React from 'react';
import { useRouter } from 'next/router';
import {
    Pagination,
    useHits,
    usePagination,
    useSearchBox,
} from 'react-instantsearch-hooks-web';
import ProductCard from '../../Product/ProductCard';

function CustomHitSearchProduct({ hit, typeSearch }) {
    const { hits, results } = useHits();
    const { pathname } = useRouter();
    const { query } = useSearchBox();
    const { isFirstPage, isLastPage } = usePagination();

    return (
        <>
            <div className="row g-sm-4 g-3 row-cols-lg-4 row-cols-md-3 row-cols-2 gx-sm-4 gx-3 mt-1 custom-gy-5 product-style-2 ratio_asos product-list-section">
                {hits.map((item, index) => (
                    <ProductCard key={index} {...item} />
                ))}
            </div>

            <Pagination
                totalPages={results.nbPages}
                padding={4}
                showFirst={!isFirstPage}
                showNext={false}
                showPrevious={false}
                showLast={!isLastPage}
                classNames={{
                    root: 'page-section mb-3',
                    list: 'pagination',
                    item: 'page-item',
                    selectedItem: 'page-item active',
                    link: 'page-link',
                }}
                hidden={!hits.length}
            />

            <p
                className="alert alert-warning mt-5 w-100 text-center"
                hidden={
                    hits.length || (!query && pathname === '/search-product')
                }
            >
                There is no result
            </p>
        </>
    );
}

export default CustomHitSearchProduct;
