import React from 'react';
import Link from 'next/link';

const ProductCateBoxItem = ({ categoryData }) => {
    return (
        <div className="category-image">
            <div className="elec-image">
                <img
                    src={categoryData.cateParent.acf.thumbnail}
                    className="img-fluid blur-up lazyload"
                    alt={categoryData.cateParent.name}
                />
            </div>
            <div className="category-contain">
                <Link
                    href={'/product-category/' + categoryData.cateParent.slug}
                >
                    <a>
                        <h3>
                            {categoryData.cateParent.name}
                        </h3>
                    </a>
                </Link>
                <ul className="product-list">
                    {categoryData.cateChild.map((cate, index) => (
                        <li key={index}>
                            <Link href={'/product-category/' + cate.slug}>
                                <a className="font-light">{cate.name}</a>
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default ProductCateBoxItem;
