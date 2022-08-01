import React, { useEffect, useState } from 'react';
import { Configure, useHits, useSortBy } from 'react-instantsearch-hooks-web';
import { functionJqueryProductCategory } from '../Common';

function SortSearchProduct({ itemPerPage }) {
    const [hitsPerPage, setHitsPerPage] = useState(null);
    const {
        results: { nbHits },
    } = useHits();

    const { refine } = useSortBy({
        items: [
            { label: 'Featured', value: 'products' },
            { label: 'Name (asc)', value: 'name-asc' },
            { label: 'Name (desc)', value: 'name-desc' },
            { label: 'Price (asc)', value: 'price-asc' },
            { label: 'Price (desc)', value: 'price-desc' },
        ],
    });

    useEffect(() => {
        functionJqueryProductCategory();
    }, []);

    const handleSort = (value) => {
        refine(value);
    };

    return (
        <div className="row g-4">
            <h3 hidden={itemPerPage === 12}>{nbHits} Results Found</h3>
            {hitsPerPage && <Configure hitsPerPage={hitsPerPage} />}

            <div className="col-12">
                <div className="filter-options">
                    <div className="select-options">
                        <div className="page-view-filter">
                            <div className="dropdown select-featured">
                                <button
                                    className="btn dropdown-toggle"
                                    type="button"
                                    id="dropdownMenuButton1"
                                    data-bs-toggle="dropdown"
                                    aria-expanded="false"
                                >
                                    {/* 24 Page per view */}
                                    Sort Items
                                </button>
                                <ul
                                    className="dropdown-menu"
                                    aria-labelledby="dropdownMenuButton1"
                                >
                                    <li
                                        role="button"
                                        onClick={() => handleSort('name-asc')}
                                    >
                                        <a className="dropdown-item">
                                            Alphabetically A-Z
                                        </a>
                                    </li>
                                    <li
                                        role="button"
                                        onClick={() => handleSort('name-desc')}
                                    >
                                        <a className="dropdown-item">
                                            Alphabetically Z-A
                                        </a>
                                    </li>
                                    <li
                                        role="button"
                                        onClick={() => handleSort('price-asc')}
                                    >
                                        <a className="dropdown-item">
                                            Price, Low To High
                                        </a>
                                    </li>
                                    <li
                                        role="button"
                                        onClick={() => handleSort('price-desc')}
                                    >
                                        <a className="dropdown-item">
                                            Price, High To Low
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div className="dropdown select-featured">
                            <button
                                className="btn dropdown-toggle"
                                type="button"
                                id="dropdownMenuButton1"
                                data-bs-toggle="dropdown"
                                aria-expanded="false"
                            >
                                {hitsPerPage} Page per view
                            </button>
                            <ul
                                className="dropdown-menu"
                                aria-labelledby="dropdownMenuButton1"
                            >
                                {[
                                    itemPerPage,
                                    itemPerPage * 2,
                                    itemPerPage * 4,
                                ].map((num, index) => (
                                    <li
                                        key={index}
                                        onClick={() => setHitsPerPage(num)}
                                        role="button"
                                    >
                                        <a className="dropdown-item">
                                            {num} Page per view
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                    <div className="grid-options d-sm-inline-block d-none">
                        <ul className="d-flex">
                            <li className="two-grid">
                                <a>
                                    <img
                                        src="/svg/grid-2.svg"
                                        className="img-fluid blur-up lazyload"
                                        alt=""
                                    />
                                </a>
                            </li>
                            <li className="three-grid d-md-inline-block d-none">
                                <a>
                                    <img
                                        src="/svg/grid-3.svg"
                                        className="img-fluid blur-up lazyload"
                                        alt=""
                                    />
                                </a>
                            </li>
                            <li className="grid-btn active d-lg-inline-block d-none">
                                <a>
                                    <img
                                        src="/svg/grid.svg"
                                        className="img-fluid blur-up lazyload"
                                        alt=""
                                    />
                                </a>
                            </li>
                            <li className="list-btn">
                                <a>
                                    <img
                                        src="/svg/list.svg"
                                        className="img-fluid blur-up lazyload"
                                        alt=""
                                    />
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default SortSearchProduct;
