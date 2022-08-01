import React, { useEffect } from 'react';
import Link from 'next/link';

function CategorySlider({ dataCategorySlider }) {
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

        let categorySlider = $('.category-slider1').slick({
            dots: false,
            infinite: true,
            arrows: true,
            slidesToShow: 4,
            slidesToScroll: 1,
            responsive: [
                {
                    breakpoint: 1425,
                    settings: {
                        slidesToShow: 3,
                    },
                },
                {
                    breakpoint: 992,
                    settings: {
                        slidesToShow: 3,
                    },
                },
                {
                    breakpoint: 768,
                    settings: {
                        slidesToShow: 2,
                    },
                },
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 1,
                        fade: true,
                    },
                },
            ],
        });

        return () => {
            categorySlider.slick('unslick');
        };
    }, []);

    return (
        <section className="category-section ratio_40">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="title title-2 text-center">
                            <h2>{dataCategorySlider.title}</h2>
                            <h5 className="text-color">
                                {dataCategorySlider.subtitle}
                            </h5>
                        </div>
                    </div>
                </div>
                <div className="row gy-3">
                    <div className="col-xxl-2 col-lg-3">
                        <div className="category-wrap category-padding category-block theme-bg-color">
                            <div>
                                <h2 className="light-text">Top</h2>
                                <h2 className="top-spacing">Our Top</h2>
                                <span>Categories</span>
                            </div>
                        </div>
                    </div>
                    <div className="col-xxl-10 col-lg-9">
                        <div className="category-wrapper category-slider1 white-arrow category-arrow">
                            {dataCategorySlider.list_category.map(
                                (category, index) => (
                                    <div key={index}>
                                        <Link
                                            href={
                                                '/product-category/' +
                                                category.slug
                                            }
                                        >
                                            <a className="category-wrap category-padding">
                                                <img
                                                    src={
                                                        category.acf
                                                            .thumbnail_home
                                                    }
                                                    className="bg-img blur-up lazyload"
                                                    alt={category.name}
                                                />
                                                <div className="category-content category-text-1">
                                                    <h3 className="theme-color">
                                                        {category.name}
                                                    </h3>
                                                    <span className="text-dark">
                                                        Fashion
                                                    </span>
                                                </div>
                                            </a>
                                        </Link>
                                    </div>
                                )
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default CategorySlider;
