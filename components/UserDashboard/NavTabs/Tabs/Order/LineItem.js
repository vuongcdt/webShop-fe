import { Fragment, useEffect, useState } from 'react';
import Skeleton from 'react-loading-skeleton';
import { getAttributeValueByKey } from '../../../../../utils/helpers';

function LineItem({ item, linesItem }) {
    useEffect(() => {
        (function ($) {
            'use strict';
            $('.bg-top').parent().addClass('b-top');
            $('.bg-bottom').parent().addClass('b-bottom');
            $('.bg-center').parent().addClass('b-center');
            $('.bg-left').parent().addClass('b-left');
            $('.bg-right').parent().addClass('b-right');
            $('.bg_size_content').parent().addClass('b_size_content');
            $('.bg-img').parent().addClass('bg-size');
            $('.bg-img.blur-up').parent().addClass('blur-up lazyload');
            $('.bg-img').each(function () {
                var el = $(this),
                    src = el.attr('src'),
                    parent = el.parent();

                parent.css({
                    'background-image': 'url(' + src + ')',
                    'background-size': 'cover',
                    'background-position': 'center',
                    'background-repeat': 'no-repeat',
                    display: 'block',
                });

                el.hide();
            });
        })(jQuery);

        feather.replace();
    }, [item]);

    let currentItem = linesItem.filter(
        (product, index) => product.product_id === item.id
    )[0];

    return !item ? (
        <Skeleton />
    ) : (
        <div className="order-left-image ratio_asos mb-3">
            <div className="tracking-product-image">
                <img
                    src={item.images[0].src}
                    className="img-fluid bg-img blur-up lazyload"
                    alt={item.name}
                />
            </div>

            <div className="order-image-contain">
                <h4>{item.name}</h4>

                <div className="tracker-number">
                    <div className="row">
                        <div className="col-md-4">
                            <p className="font-light">
                                Sku:<span>{item.sku}</span>
                            </p>
                            <p className="font-light">
                                Quantity:
                                <span>{currentItem.quantity}</span>
                            </p>
                        </div>
                        <div className="col-md-4">
                            <p className="font-light mb-0">
                                Subtotal:<span>${currentItem.subtotal}</span>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default LineItem;
