import Link from 'next/link';
import React from 'react';

function MainMenu() {
    React.useEffect(() => {
        $('.toggle-nav, .sidebar-toggle').on('click', function () {
            $('.nav-menu').css('right', '0px');
            $('.mobile-poster').css('right', '0px');
            $('.bg-overlay').addClass('show');
        });
        $('.back-btn, .bg-overlay').on('click', function () {
            $('.nav-menu').css('right', '-410px');
            $('.mobile-poster').css('right', '-410px');
            $('.bg-overlay').removeClass('show');
        });

        var contentwidth = $(window).width();
        if (contentwidth < '1200') {
            $('.dropdown .menu-title').append(
                '<span class="according-menu">+</span>'
            );
            $('.menu-title').on('click', function () {
                $('.menu-title')
                    .removeClass('active')
                    .find('span')
                    .replaceWith('<span class="according-menu">+</span>');
                $('.menu-content').slideUp('normal');
                if ($(this).next().is(':hidden') == true) {
                    $(this).addClass('active');
                    $(this)
                        .find('span')
                        .replaceWith('<span class="according-menu">-</span>');
                    $(this).next().slideDown('normal');
                } else {
                    $(this)
                        .find('span')
                        .replaceWith('<span class="according-menu">+</span>');
                }
            });
            $('.menu-content').hide();
        }

        var contentwidth = $(window).width();
        if (contentwidth < '1200') {
            $('.menu-title-level1').append(
                '<span class="according-menu">+</span>'
            );
            $('.menu-title-level1').on('click', function () {
                $('.menu-title-level1')
                    .removeClass('active')
                    .find('span')
                    .replaceWith('<span class="according-menu">+</span>');
                $('.level1').slideUp('normal');
                if ($(this).next().is(':hidden') == true) {
                    $(this).addClass('active');
                    $(this)
                        .find('span')
                        .replaceWith('<span class="according-menu">-</span>');
                    $(this).next().slideDown('normal');
                } else {
                    $(this)
                        .find('span')
                        .replaceWith('<span class="according-menu">+</span>');
                }
            });
            $('.nav-sub-childmenu .level1').hide();
        }

        var contentwidth = $(window).width();
        if (contentwidth < '1200') {
            $('.submenu-title').append('<span class="according-menu">+</span>');
            $('.submenu-title').on('click', function () {
                $('.submenu-title')
                    .removeClass('active')
                    .find('span')
                    .replaceWith('<span class="according-menu">+</span>');
                $('.submenu-content').slideUp('normal');
                if ($(this).next().is(':hidden') == true) {
                    $(this).addClass('active');
                    $(this)
                        .find('span')
                        .replaceWith('<span class="according-menu">-</span>');
                    $(this).next().slideDown('normal');
                } else {
                    $(this)
                        .find('span')
                        .replaceWith('<span class="according-menu">+</span>');
                }
            });
            $('.submenu-content').hide();
        }

        // $('.toggle-category').on('click', function () {
        //     $('.category-dropdown').addClass('open');
        //     $('.bg-overlay').addClass('show');
        // });
        $('.back-category, .bg-overlay').on('click', function () {
            $('.category-dropdown').removeClass('open');
            $('.bg-overlay').removeClass('show');
        });
        var contentwidth = $(window).width();
        if (contentwidth < '1200') {
            $('.category-menu li.submenu >a').append(
                '<span class="according-menu">+</span>'
            );
            $('.category-menu li.submenu >a').on('click', function () {
                $('.category-menu li.submenu >a')
                    .removeClass('active')
                    .find('span')
                    .replaceWith('<span class="according-menu">+</span>');
                $('.category-mega-menu').slideUp('normal');
                if ($(this).next().is(':hidden') == true) {
                    $(this).addClass('active');
                    $(this)
                        .find('span')
                        .replaceWith('<span class="according-menu">-</span>');
                    $(this).next().slideDown('normal');
                } else {
                    $(this)
                        .find('span')
                        .replaceWith('<span class="according-menu">+</span>');
                }
            });
            $('.category-mega-menu').hide();
        }

        var contentwidth = $(window).width();
        if (contentwidth < '1200') {
            $('.title-category').append(
                '<span class="according-menu">+</span>'
            );
            $('.title-category').on('click', function () {
                $('.title-category')
                    .removeClass('active')
                    .find('span')
                    .replaceWith('<span class="according-menu">+</span>');
                $('.category-childmenu ul').slideUp('normal');
                if ($(this).next().is(':hidden') == true) {
                    $(this).addClass('active');
                    $(this)
                        .find('span')
                        .replaceWith('<span class="according-menu">-</span>');
                    $(this).next().slideDown('normal');
                } else {
                    $(this)
                        .find('span')
                        .replaceWith('<span class="according-menu">+</span>');
                }
            });
            $('.category-childmenu ul').hide();
        }
    }, []);

    return (
        <nav>
            <div className="main-navbar">
                <div id="mainnav">
                    <div className="toggle-nav">
                        <i className="fa fa-bars sidebar-bar"></i>
                    </div>
                    <ul className="nav-menu">
                        <li className="back-btn d-xl-none">
                            <div className="close-btn">
                                Menu
                                <span className="mobile-back">
                                    <i className="fa fa-angle-left"></i>
                                </span>
                            </div>
                        </li>
                        <li>
                            <Link href="/product-category">
                                <a className="nav-link menu-title">
                                    All categories
                                </a>
                            </Link>
                        </li>
                        <li>
                            <Link href="/review">
                                <a className="nav-link menu-title">Review</a>
                            </Link>
                        </li>
                        <li className="dropdown">
                            <Link href="/blog">
                                <a className="nav-link menu-title">blog</a>
                            </Link>
                            <ul className="nav-submenu menu-content">
                                <li>
                                    <Link href="/blog/category/business">
                                        <a>Business</a>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/blog/category/entertainment">
                                        <a>Entertainment</a>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/blog/category/global">
                                        <a>Global</a>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/blog/category/health">
                                        <a>Health</a>
                                    </Link>
                                </li>
                                <li>
                                    <Link href="/blog/category/sports">
                                        <a>Sports</a>
                                    </Link>
                                </li>
                            </ul>
                        </li>
                        <li>
                            <Link href="/faq">
                                <a className="nav-link menu-title">Faq</a>
                            </Link>
                        </li>
                        <li>
                            <Link href="/contact-us">
                                <a className="nav-link menu-title">
                                    Contact us
                                </a>
                            </Link>
                        </li>
                        <li>
                            <Link href="/about-us">
                                <a className="nav-link menu-title">About us</a>
                            </Link>
                        </li>
                        <li className="mobile-poster d-flex d-xl-none">
                            <img
                                src="/images/pwa.png"
                                className="img-fluid"
                                alt=""
                            />
                            <div className="mobile-contain">
                                <h5>Enjoy app-like experience</h5>
                                <p className="font-light">
                                    With this Screen option you can use Website
                                    like an App.
                                </p>
                                <Link href={'https://www.google.com'}>
                                    <a
                                        target="_blank"
                                        id="installApp"
                                        className="btn btn-solid-default btn-spacing w-100"
                                    >
                                        Download App
                                    </a>
                                </Link>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
}

export default MainMenu;
