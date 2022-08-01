import React, { useEffect } from 'react';
import Link from 'next/link';

function BannerTimer({ dataTimer }) {
    const { product_data: product } = dataTimer;
    useEffect(() => {
        let second = 1000,
            minute = second * 60,
            hour = minute * 60,
            day = hour * 24;

        let countDown = new Date(dataTimer.time_end).getTime();
        let timer = setInterval(function () {
            let now = new Date().getTime(),
                distance = countDown - now;

            $('#days1').text(Math.floor(distance / day));
            $('#hours1').text(Math.floor((distance % day) / hour));
            $('#minutes1').text(Math.floor((distance % hour) / minute));
            $('#seconds1').text(Math.floor((distance % minute) / second));
        }, second);

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
            clearInterval(timer);
        };
    }, []);

    return (
        <section className="timer-banner-style-2">
            <div className="container">
                <div className="row gy-3">
                    <div className="col-lg-12">
                        <div className="discount-image-details discount-spacing">
                            <img
                                src={dataTimer.background}
                                className="bg-img blur-up lazyload"
                                alt={product.name}
                            />

                            <div className="discunt-details">
                                <div>
                                    <div className="heart-button heart-button-2">
                                        <i className="fas fa-heart theme-color"></i>
                                    </div>

                                    <h5
                                        className="mt-3"
                                        dangerouslySetInnerHTML={{
                                            __html: dataTimer.subtitle,
                                        }}
                                    ></h5>
                                    <h2
                                        className="my-3 deal-text"
                                        dangerouslySetInnerHTML={{
                                            __html: dataTimer.title,
                                        }}
                                    ></h2>
                                    <div className="timer-style-2 mt-xl-1 my-2 justify-content-center d-flex">
                                        <ul>
                                            <li>
                                                <div className="counter">
                                                    <div>
                                                        <h2
                                                            id="days1"
                                                            className="theme-color"
                                                        ></h2>
                                                        Days
                                                    </div>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="counter">
                                                    <div>
                                                        <h2
                                                            id="hours1"
                                                            className="theme-color"
                                                        ></h2>
                                                        Hour
                                                    </div>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="counter">
                                                    <div>
                                                        <h2
                                                            id="minutes1"
                                                            className="theme-color"
                                                        ></h2>
                                                        Min
                                                    </div>
                                                </div>
                                            </li>
                                            <li>
                                                <div className="counter">
                                                    <div>
                                                        <h2
                                                            id="seconds1"
                                                            className="theme-color"
                                                        ></h2>
                                                        Sec
                                                    </div>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                    <Link href={'/product/' + product.slug}>
                                        <button
                                            type="button"
                                            className="btn default-light-theme default-theme mt-2"
                                        >
                                            Shop Now
                                        </button>
                                    </Link>

                                    <div className="timer-bg timer-bg-center d-lg-block d-none">
                                        <h3 className="mt-0">
                                            {dataTimer.product_title}
                                        </h3>
                                        <span>
                                            {dataTimer.product_subtitle}
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default BannerTimer;
