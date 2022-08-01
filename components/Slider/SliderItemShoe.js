import React from 'react';
import Link from 'next/link';
import { trimHTML } from '../../utils/const';

export default function SliderItemShoe({ slideData }) {
    const { product_data: product, slide_data } = slideData;
    return (
        <div>
            <div className="banner-poster">
                <div className="slider-right-detail">
                    <div className="labels">
                        <ul className="label-15">
                            <li>
                                <a href="https://www.facebook.com/">
                                    <img
                                        src="/images/social-icon/1.png"
                                        className="img-fluid blur-up lazyload"
                                        alt="facebook"
                                    />
                                    <h5 className="d-lg-block d-none">
                                        Facebook
                                    </h5>
                                </a>
                            </li>
                            <li>
                                <a href="https://www.instagram.com/">
                                    <img
                                        src="/images/social-icon/2.png"
                                        className="img-fluid blur-up lazyload"
                                        alt="Instagram"
                                    />
                                    <h5 className="d-lg-block d-none">
                                        Instagram
                                    </h5>
                                </a>
                            </li>
                            <li>
                                <a href="https://twitter.com/">
                                    <img
                                        src="/images/social-icon/3.png"
                                        className="img-fluid blur-up lazyload"
                                        alt="Twitter"
                                    />
                                    <h5 className="d-lg-block d-none">
                                        Twitter
                                    </h5>
                                </a>
                            </li>
                        </ul>
                    </div>
                    <h4>{slide_data.subtitle_2}</h4>
                    {product.on_sale ? (
                        <div className="offer-box">
                            <h6>
                                {(
                                    (product.price / product.regular_price) *
                                    100
                                ).toFixed(0)}
                                % off
                            </h6>
                        </div>
                    ) : (
                        <></>
                    )}
                </div>

                <div className="slider-bg">
                    <div className="bg-text">
                        <span>{slide_data.text_background}</span>
                    </div>

                    <div className="bg-circle gradient-purple"></div>
                    <img
                        src={slide_data.background}
                        className="shoes-1 img-fluid blur-up lazyload"
                        alt=""
                    />
                </div>

                <div className="sugestion-product d-xl-block d-none">
                    <h3>{slide_data.title}</h3>
                    <h6>{slide_data.subtitle}</h6>
                </div>

                <div className="price-number">
                    <h2>
                        {product.on_sale ? (
                            <Fragment>
                                ${product.price}{' '}
                                <span className="theme-color">
                                    <del>${product.regular_price}</del>
                                </span>
                            </Fragment>
                        ) : (
                            `$${product.price}`
                        )}
                    </h2>
                    <h6>{trimHTML(product.short_description)}</h6>
                </div>

                <div className="slider-arrow-2">
                    <div className="left-arrow d-lg-block d-none"></div>
                    <div className="right-arrow d-lg-block d-none"></div>
                </div>
            </div>
        </div>
    );
}
