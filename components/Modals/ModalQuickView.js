import React, { useRef, useState } from 'react';
import { useEffect } from 'react';
import OnSale from '../component_vuong/product/OnSale';
import RatingDetails from '../Product/RatingDetails';
import ModalSliderQuickView from './ModalSliderQuickView';
import Link from 'next/link';

export default function ModalQuickView() {
    const [product, setProduct] = useState({});
 
    useEffect(() => {
        $('#quick-view').on('show.bs.modal', function (event) {
            $(window).trigger('resize');
            setProduct({});
            setProduct($(event.relatedTarget).data('product'));
        });

        return () => {
            $('#quick-view').off('show.bs.modal');
        };
    }, []);

    return (
        <div className="modal fade quick-view-modal" id="quick-view">
            <div className="modal-dialog modal-lg modal-dialog-centered">
                <div className="modal-content">
                    <button
                        type="button"
                        className="btn-close"
                        data-bs-dismiss="modal"
                        aria-label="Close"
                    ></button>
                    <div className="modal-body">
                        <div className="row gy-4">
                            <div className="col-lg-6">
                                <div className="quick-view-image">
                                    <OnSale
                                        on_sale={product.on_sale}
                                        price={product.price}
                                        regular_price={product.regular_price}
                                    />
                                    <ModalSliderQuickView
                                        image={product.images && product?.images[0]}
                                    />
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="product-right">
                                    <h2 className="mb-2">{product.name}</h2>
                                    <RatingDetails
                                        average_rating={product.average_rating}
                                        showNum
                                    />
                                    <div className="price mt-3">
                                        <h3>${product.price}</h3>
                                    </div>

                                    <div className="product-details mt-3">
                                        <div>
                                            <span className="font-light">
                                                Short description:
                                            </span>{' '}
                                            <div
                                                dangerouslySetInnerHTML={{
                                                    __html: product.short_description,
                                                }}
                                            ></div>
                                        </div>
                                        <ul>
                                            <li>
                                                <span className="font-light">
                                                    Catgory :
                                                </span>{' '}
                                                {product.categories && (
                                                    <Link
                                                        href={
                                                            '/product-category/' +
                                                            product
                                                                .categories[0]
                                                                .slug
                                                        }
                                                    >
                                                        <a>
                                                            {
                                                                product
                                                                    .categories[0]
                                                                    .name
                                                            }
                                                        </a>
                                                    </Link>
                                                )}
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="product-btns">
                                        <Link href={'/product/' + product.slug}>
                                            <a
                                                className="btn btn-solid-default btn-sm"
                                                onClick={() => {
                                                    let myModalEl =
                                                        document.getElementById(
                                                            'quick-view'
                                                        );

                                                    let modal =
                                                        bootstrap.Modal.getInstance(
                                                            myModalEl
                                                        );
                                                    modal.hide();
                                                }}
                                            >
                                                View details
                                            </a>
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
