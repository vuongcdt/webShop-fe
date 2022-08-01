import React, { Fragment } from 'react';
import Link from 'next/link';

export default function SliderItemClothes({ slideData }) {
    const { product_data: product, slide_data } = slideData;

    return (
        <div>
            <div className="home-slider">
                <div className="home-wrap row m-0">
                    <div className="col-xxl-3 col-lg-4 p-0 d-lg-block d-none">
                        <div className="home-left-wrapper">
                            <div>
                                <h2>{product.name}</h2>

                                <div className="d-flex">
                                    <ul className="rating p-0 me-2">
                                        {new Array(5)
                                            .fill(null)
                                            .map((value, index) => (
                                                <li key={index}>
                                                    <i
                                                        className={`fas fa-star ${
                                                            index + 1 <=
                                                            Number(
                                                                product.average_rating
                                                            )
                                                                ? 'theme-color'
                                                                : ''
                                                        }`}
                                                    ></i>
                                                </li>
                                            ))}
                                    </ul>
                                    <h6 className="text-light">
                                        ( {product.rating_count} Review )
                                    </h6>
                                </div>

                                <div
                                    className="slide-product-desc"
                                    dangerouslySetInnerHTML={{
                                        __html: product.short_description,
                                    }}
                                ></div>
                                <h3>
                                    {product.on_sale ? (
                                        <Fragment>
                                            ${product.price}{' '}
                                            <span className="theme-color">
                                                <del>
                                                    ${product.regular_price}
                                                </del>
                                            </span>
                                        </Fragment>
                                    ) : (
                                        `$${product.price}`
                                    )}
                                </h3>
                                <div className="add-btn">
                                    <Link href={'/product/' + product.slug}>
                                        <a className="btn btn-white">
                                            View product
                                        </a>
                                    </Link>
                                </div>
                                <div className="share-icons">
                                    <span>share with</span>
                                    <ul className="share-icons p-0">
                                        <li>
                                            <a
                                                target="_blank"
                                                href="https://www.facebook.com/sharer/sharer.php?u=#url"
                                            >
                                                <img
                                                    src="images/social-icon/4.png"
                                                    className="img-fluid blur-up lazyload"
                                                    alt="social icon"
                                                />
                                            </a>
                                        </li>
                                        <li>
                                            <a href="https://www.google.co.in/">
                                                <img
                                                    src="images/social-icon/5.png"
                                                    className="img-fluid blur-up lazyload"
                                                    alt="social icon"
                                                />
                                            </a>
                                        </li>
                                        <li>
                                            <a href="http://www.twitter.com/share">
                                                <img
                                                    src="images/social-icon/6.png"
                                                    className="img-fluid blur-up lazyload"
                                                    alt="social icon"
                                                />
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xxl-9 col-lg-8 p-0 left-content">
                        <img
                            src={slide_data.background_image}
                            className="bg-img blur-up lazyload"
                            alt=""
                        />
                        <div className="home-content row">
                            <div className="col-xxl-4 col-lg-4 col-md-4 col-sm-5 col-6">
                                <h3
                                    dangerouslySetInnerHTML={{
                                        __html: slide_data.sub_title,
                                    }}
                                ></h3>
                                <h1
                                    data-animation-in="fadeInUp"
                                    dangerouslySetInnerHTML={{
                                        __html: slide_data.title,
                                    }}
                                ></h1>
                                <h6
                                    className="mb-4"
                                    data-animation-in="fadeInUp"
                                    data-delay-in="0.4"
                                    dangerouslySetInnerHTML={{
                                        __html: slide_data.sub_title_2,
                                    }}
                                ></h6>
                                <div
                                    className="discover-block"
                                    data-animation-in="fadeInUp"
                                    data-delay-in="0.7"
                                >
                                    <div className="d-flex">
                                        <Link href={'/product/' + product.slug}>
                                            <a className="play-icon theme-bg-color">
                                                <i className="fas fa-play"></i>
                                            </a>
                                        </Link>
                                        <div className="discover-content">
                                            <h4 className="theme-color mb-1">
                                                Discover
                                            </h4>
                                            <h6>Our Product</h6>
                                        </div>
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
