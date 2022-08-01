import { trimHTML } from '../../utils/const';
import Link from 'next/link';
import { useEffect } from 'react';

function BannerProductCategory({ dataBanner }) {
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
    }, []);
    return (
        <section className="ratio2_1 banner-style-2">
            <div className="container">
                <div className="row gy-4">
                    {dataBanner.map((item, index) => (
                        <div className="col-lg-4 col-md-6" key={index}>
                            <div className="collection-banner p-bottom p-center text-center">
                                <Link
                                    href={
                                        '/product-category/ ' +
                                        item.link_product_category.slug
                                    }
                                >
                                    <a className="banner-img">
                                        <img
                                            src={item.background}
                                            className="bg-img blur-up lazyload"
                                            alt={item.name}
                                        />
                                    </a>
                                </Link>
                                <div className="banner-detail">
                                    <div></div>
                                    <span className="font-dark-30">
                                        {trimHTML(item.sub_title)}
                                    </span>
                                </div>
                                <Link
                                    href={
                                        '/product-category/' +
                                        item.link_product_category.slug
                                    }
                                >
                                    <a className="contain-banner">
                                        <div className="banner-content with-big">
                                            <h2 className="mb-2">
                                                {
                                                    item.link_product_category
                                                        .name
                                                }
                                            </h2>
                                            <span>
                                                {trimHTML(item.subtitle)}
                                            </span>
                                        </div>
                                    </a>
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default BannerProductCategory;
