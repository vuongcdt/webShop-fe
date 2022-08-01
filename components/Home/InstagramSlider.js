import React, { useEffect } from 'react';
import Link from 'next/link';

function InstagramSlider({ dataProduct }) {
    const { product: products, title, subtitle } = dataProduct;
    useEffect(() => {
        let instaSlider = $('.insta-slider').slick({
            dots: true,
            infinite: true,
            speed: 500,
            arrows: false,
            slidesToShow: 5,
            slidesToScroll: 1,
            responsive: [
                {
                    breakpoint: 1630,
                    settings: {
                        slidesToShow: 4,
                    },
                },
                {
                    breakpoint: 1200,
                    settings: {
                        slidesToShow: 3,
                    },
                },
                {
                    breakpoint: 900,
                    settings: {
                        slidesToShow: 2,
                    },
                },
                {
                    breakpoint: 576,
                    settings: {
                        slidesToShow: 2,
                    },
                },
                {
                    breakpoint: 420,
                    settings: {
                        slidesToShow: 1,
                        centerMode: true,
                        centerPadding: '20px',
                    },
                },
            ],
        });

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

        return () => {
            instaSlider.slick('unslick');
        };
    }, []);

    return (
        <section className="ratio_square">
            <div className="container-fluid">
                <div className="row">
                    <div className="col">
                        <div className="title title-2 text-center">
                            <h2>{title}</h2>
                            <h5 className="text-color">{subtitle}</h5>
                        </div>
                        <div className="product-style-1 instagram-2 product-wrapper">
                            <div className="insta-slider instagram-wrap">
                                {products.map((item, index) => (
                                    <div key={index}>
                                        <div className="product-box">
                                            <div className="img-wrapper">
                                                {/* <div className="top-wishlist product-color">
                                                    <a className="heart-wishlist heart-color ms-auto">
                                                        <i className="far fa-heart"></i>
                                                    </a>
                                                </div> */}
                                                <div className="share share-box share-opacity">
                                                    <span className="share-plus share-plus-color">
                                                        +
                                                    </span>
                                                    <span>Product new</span>
                                                </div>
                                                <Link
                                                    href={
                                                        '/product/' + item.slug
                                                    }
                                                >
                                                    <a className="text-center">
                                                        <img
                                                            src={item.image}
                                                            className="bg-img blur-up lazyload"
                                                            alt={item.name}
                                                        />
                                                    </a>
                                                </Link>
                                            </div>

                                            <div className="insta-hover insta-spacing text-center">
                                                <div>
                                                    <h5>New Product</h5>
                                                    <h3 className="text-hide">
                                                        {item.name}
                                                    </h3>
                                                    <Link
                                                        href={
                                                            '/product/' +
                                                            item.slug
                                                        }
                                                    >
                                                        <button
                                                            type="button"
                                                            className="btn btn-light-white"
                                                        >
                                                            Shop now{' '}
                                                            <i className="fas fa-chevron-right ms-2"></i>
                                                        </button>
                                                    </Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default InstagramSlider;
