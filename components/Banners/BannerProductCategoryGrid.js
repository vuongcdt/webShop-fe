import Link from 'next/link';
import { useEffect } from 'react';

function BannerProductCategoryGrid({ dataBannerProduct }) {
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
        <section className="banner-style-2 offer-banner">
            <div className="container">
                <div className="row">
                    <div className="col">
                        <div className="title title-2 text-center">
                            <h2>{dataBannerProduct.title}</h2>
                            <h5 className="text-color">
                                {dataBannerProduct.subtitle}
                            </h5>
                        </div>
                    </div>
                </div>
                <div className="row gy-4">
                    <div className="col-lg-6 ratio2_1">
                        <Link
                            href={
                                '/product-category/' +
                                dataBannerProduct.list[0].link.slug
                            }
                        >
                            <div className="collection-banner p-right text-right">
                                <div className="banner-img">
                                    <img
                                        src={
                                            dataBannerProduct.list[0]
                                                .background_image
                                        }
                                        className="bg-img blur-up lazyload"
                                        alt={
                                            dataBannerProduct.list[0].link.name
                                        }
                                    />
                                </div>

                                <div className="banner-text">
                                    <div className="banner-content">
                                        <span
                                            className="span-top"
                                            dangerouslySetInnerHTML={{
                                                __html: dataBannerProduct
                                                    .list[0].sub_title,
                                            }}
                                        ></span>
                                        <h2
                                            dangerouslySetInnerHTML={{
                                                __html: dataBannerProduct
                                                    .list[0].title,
                                            }}
                                        ></h2>
                                        <button
                                            type="button"
                                            className="btn btn-solid-default"
                                        >
                                            Shop Now
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </Link>
                    </div>
                    <div className="col-lg-6">
                        <div className="row gy-4">
                            <div className="col-lg-12 ratio_40">
                                <Link
                                    href={
                                        '/product-category/' +
                                        dataBannerProduct.list[1].link.slug
                                    }
                                >
                                    <div className="collection-banner p-left banner-title">
                                        <div className="banner-img">
                                            <img
                                                src={
                                                    dataBannerProduct.list[1]
                                                        .background_image
                                                }
                                                className="bg-img blur-up lazyload"
                                                alt={
                                                    dataBannerProduct.list[1]
                                                        .name
                                                }
                                            />
                                        </div>
                                        <div className="banner-text">
                                            <div className="banner-content">
                                                <h3
                                                    className="h-bottom"
                                                    dangerouslySetInnerHTML={{
                                                        __html: dataBannerProduct
                                                            .list[1].title,
                                                    }}
                                                ></h3>
                                                <Link
                                                    href={
                                                        '/product-category/' +
                                                        dataBannerProduct
                                                            .list[1].link.slug
                                                    }
                                                >
                                                    <button
                                                        type="button"
                                                        className="btn btn-solid-default"
                                                    >
                                                        Shop Now
                                                    </button>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                            </div>
                            <div className="col-sm-6 ratio2_3">
                                <div className="collection-banner p-center text-center">
                                    <div className="banner-img">
                                        <img
                                            src={
                                                dataBannerProduct.list[2]
                                                    .background_image
                                            }
                                            className="bg-img blur-up lazyload"
                                            alt={
                                                dataBannerProduct.list[2].link
                                                    .name
                                            }
                                        />
                                    </div>
                                    <Link
                                        href={
                                            '/product-category/' +
                                            dataBannerProduct.list[2].link.slug
                                        }
                                    >
                                        <a className="contain-banner">
                                            <div className="banner-content with-bg">
                                                <h3 className="mb-1">
                                                    {
                                                        dataBannerProduct
                                                            .list[2].link.name
                                                    }
                                                </h3>
                                                <span
                                                    dangerouslySetInnerHTML={{
                                                        __html: dataBannerProduct
                                                            .list[2].sub_title,
                                                    }}
                                                ></span>
                                            </div>
                                        </a>
                                    </Link>
                                </div>
                            </div>
                            <div className="col-sm-6 ratio2_3">
                                <div className="collection-banner p-center text-center">
                                    <div className="banner-img">
                                        <img
                                            src={
                                                dataBannerProduct.list[3]
                                                    .background_image
                                            }
                                            className="bg-img blur-up lazyload"
                                            alt={
                                                dataBannerProduct.list[3].link
                                                    .name
                                            }
                                        />
                                    </div>
                                    <Link
                                        href={
                                            '/product-category/' +
                                            dataBannerProduct.list[3].link.slug
                                        }
                                    >
                                        <a className="contain-banner">
                                            <div className="banner-content with-bg">
                                                <h3 className="mb-1">
                                                    {
                                                        dataBannerProduct
                                                            .list[3].link.name
                                                    }
                                                </h3>
                                                <span
                                                    dangerouslySetInnerHTML={{
                                                        __html: dataBannerProduct
                                                            .list[3].sub_title,
                                                    }}
                                                ></span>
                                            </div>
                                        </a>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default BannerProductCategoryGrid;
