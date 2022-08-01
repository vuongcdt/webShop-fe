import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { NovuProvider } from '@novu/notification-center';

import MainMenu from './NavBar/MainMenu';
import MenuLeft from './NavBar/MenuLeft';
import MenuMobileBottom from './NavBar/MenuMobile/MenuMobileBottom';
import MenuRight from './NavBar/MenuRight';
import SearchBar from './NavBar/SearchBar';

function Navbar() {
    useEffect(() => {
        feather.replace();

        $(function () {
            var $window = $(window);
            var lastScrollTop = 0;
            var $header = $('header');
            var headerHeight = $header.outerHeight();

            $window.scroll(function () {
                var windowTop = $window.scrollTop();

                if (windowTop >= headerHeight) {
                    $header.addClass('nav-down');
                } else {
                    $header.removeClass('nav-down');
                    $header.removeClass('nav-up');
                }

                if ($header.hasClass('nav-down')) {
                    if (windowTop < lastScrollTop) {
                        $header.addClass('nav-up');
                    } else {
                        $header.removeClass('nav-up');
                    }
                }
                $('#lastscrolltop').text('LastscrollTop: ' + lastScrollTop);

                lastScrollTop = windowTop;

                $('#windowtop').text('scrollTop: ' + windowTop);
            });
        });
    }, []);

    const { user } = useSelector((state) => state.auth);

    return (
        <>
            {/* header starwit */}
            <header className="header-style-2" id="home">
                <div className="main-header navbar-searchbar">
                    <div className="container-fluid-lg">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="main-menu">
                                    <MenuLeft />

                                    <MainMenu />

                                    <MenuRight />

                                    <SearchBar />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
            {/* header end */}

            <MenuMobileBottom />
        </>
    );
}

export default Navbar;
