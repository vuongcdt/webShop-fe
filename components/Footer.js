import Link from 'next/link';
import { useSelector } from 'react-redux';
import dynamic from 'next/dynamic';
import ModalQuickView from './Modals/ModalQuickView';
import React from 'react';

function Footer() {
    const webData = useSelector((state) => state.webData);
    const { footer } = webData;

    React.useEffect(() => {
        var contentwidth = $(window).width();
        if (contentwidth < '576') {
            $('.footer-title h5').append(
                '<span class="according-menu"><i class="fas fa-chevron-down"></i></span>'
            );
            $('.footer-title').on('click', function () {
                $('.footer-title')
                    .removeClass('active')
                    .find('span')
                    .replaceWith(
                        '<span class="according-menu"><i class="fas fa-chevron-down"></i></span>'
                    );
                $('.footer-content').slideUp('normal');
                if ($(this).next().is(':hidden') == true) {
                    $(this).addClass('active');
                    $(this)
                        .find('span')
                        .replaceWith(
                            '<span class="according-menu"><i class="fas fa-chevron-up"></i></span>'
                        );
                    $(this).next().slideDown('normal');
                } else {
                    $(this)
                        .find('span')
                        .replaceWith(
                            '<span class="according-menu"><i class="fas fa-chevron-down"></i></span>'
                        );
                }
            });
            $('.footer-content').hide();
        } else {
            $('.footer-content').show();
        }
    }, []);

    return (
        <>
            {/* footer start */}
            <footer className="footer-sm-space">
                <div className="main-footer">
                    <div className="container">
                        <div className="row gy-4">
                            <div className="col-xl-3 col-lg-4 col-md-6">
                                <div className="footer-contact">
                                    <div className="brand-logo">
                                        <Link href={'/'}>
                                            <a className="footer-logo">
                                                <svg className="svg-icon">
                                                    <use
                                                        className="fill-color"
                                                        xlinkHref="/svg/icons.svg#logo"
                                                    ></use>
                                                </svg>
                                                <img
                                                    src="/images/logo.png"
                                                    className="img-fluid blur-up lazyload"
                                                    alt="logo"
                                                />
                                            </a>
                                        </Link>
                                    </div>
                                    <ul className="contact-lists">
                                        <li>
                                            <span>
                                                <b>phone:</b>
                                                <span className="font-light">
                                                    {' '}
                                                    {footer?.phone}
                                                </span>
                                            </span>
                                        </li>
                                        <li>
                                            <span>
                                                <b>Address:</b>
                                                <span className="font-light">
                                                    {' '}
                                                    {footer?.address}
                                                </span>
                                            </span>
                                        </li>
                                        <li>
                                            <span>
                                                <b>Email:</b>
                                                <span className="font-light">
                                                    {' '}
                                                    {footer?.email}
                                                </span>
                                            </span>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-lg-2 col-md-4 col-sm-6">
                                <div className="footer-links">
                                    <div className="footer-title">
                                        <h3>About us</h3>
                                    </div>
                                    <div className="footer-content">
                                        <ul>
                                            <li>
                                                <Link href="/">
                                                    <a className="font-dark">
                                                        Home
                                                    </a>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href="/shop">
                                                    <a className="font-dark">
                                                        Shop
                                                    </a>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href="/about-us">
                                                    <a className="font-dark">
                                                        About Us
                                                    </a>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href="/blog">
                                                    <a className="font-dark">
                                                        Blog
                                                    </a>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href="/contact-us">
                                                    <a className="font-dark">
                                                        Contact
                                                    </a>
                                                </Link>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-2 col-lg-3 col-md-4 col-sm-6">
                                <div className="footer-links">
                                    <div className="footer-title">
                                        <h3>New Categories</h3>
                                    </div>
                                    <div className="footer-content">
                                        <ul>
                                            {footer.category &&
                                                footer?.category.map(
                                                    (cate, index) => (
                                                        <li key={index}>
                                                            <Link
                                                                href={
                                                                    '/product-category/' +
                                                                    cate.slug
                                                                }
                                                            >
                                                                <a className="font-dark">
                                                                    {cate.name}
                                                                </a>
                                                            </Link>
                                                        </li>
                                                    )
                                                )}
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-2 col-lg-3 col-md-4 col-sm-6">
                                <div className="footer-links">
                                    <div className="footer-title">
                                        <h3>Get Help</h3>
                                    </div>
                                    <div className="footer-content">
                                        <ul>
                                            <li>
                                                <Link href="/user-dashboard?tab=order">
                                                    <a className="font-dark">
                                                        Your Orders
                                                    </a>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href="/user-dashboard">
                                                    <a className="font-dark">
                                                        Your Account
                                                    </a>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href="/wishlist">
                                                    <a className="font-dark">
                                                        Your Wishlist
                                                    </a>
                                                </Link>
                                            </li>
                                            <li>
                                                <Link href="/faq">
                                                    <a className="font-dark">
                                                        Shopping FAQs
                                                    </a>
                                                </Link>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-3 col-lg-4 col-sm-6 d-none d-sm-block">
                                <div className="footer-newsletter">
                                    <h3>Let’s stay in touch</h3>
                                    <p className="font-dark mb-0">
                                        Keep up to date with our latest news and
                                        special offers.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="sub-footer">
                    <div className="container">
                        <div className="row gy-3">
                            <div className="col-md-6">
                                <ul>
                                    <li className="font-dark">We accept:</li>
                                    <li>
                                        <a href="undefined">
                                            <img
                                                src="/images/payment-icon/1.jpg"
                                                className="img-fluid blur-up lazyload"
                                                alt="payment icon"
                                            />
                                        </a>
                                    </li>
                                    <li>
                                        <a href="undefined">
                                            <img
                                                src="/images/payment-icon/2.jpg"
                                                className="img-fluid blur-up lazyload"
                                                alt="payment icon"
                                            />
                                        </a>
                                    </li>
                                    <li>
                                        <a href="undefined">
                                            <img
                                                src="/images/payment-icon/3.jpg"
                                                className="img-fluid blur-up lazyload"
                                                alt="payment icon"
                                            />
                                        </a>
                                    </li>
                                    <li>
                                        <a href="undefined">
                                            <img
                                                src="/images/payment-icon/4.jpg"
                                                className="img-fluid blur-up lazyload"
                                                alt="payment icon"
                                            />
                                        </a>
                                    </li>
                                </ul>
                            </div>
                            <div className="col-md-6">
                                <p className="mb-0 font-dark">
                                    {footer.coppyright}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
            {/* footer end */}

            <ModalQuickView />

            {/* tap to top Section Start */}
            <div className="tap-to-top">
                <a href="#home">
                    <i className="fas fa-chevron-up"></i>
                </a>
            </div>
            {/* tap to top Section End */}

            <div className="bg-overlay"></div>
        </>
    );
}

export default Footer;
