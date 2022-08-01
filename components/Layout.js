import Footer from './Footer';
import Navbar from './Navbar';

import { Fragment, useEffect } from 'react';
import moment from 'moment';
import { useDispatch, useSelector } from 'react-redux';
import { logOut } from '../store/auth/authSlice';
import { ToastContainer, toast, Slide } from 'react-toastify';
import { useRouter } from 'next/router';
import Header from './Header';

function Layout({ children }) {
    const router = useRouter();
    let { cookie_expiration, cookie, login_method } = useSelector(
        (state) => state.auth
    );
    let dispatch = useDispatch();
    const { theme } = useSelector((state) => state.webSetting);
    useEffect(() => {
        if (!cookie) {
            return;
        }

        let cookieCheck = setInterval(() => {
            if (moment().format('X') >= cookie_expiration) {
                toast.warn('Your login session has expired!', {
                    position: 'bottom-left',
                    autoClose: 2000,
                    hideProgressBar: true,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                });

                // if (login_method === 'facebook' && typeof FB !== 'undefined') {
                //     FB.logout(function (response) {
                //         console.log('Logout fb');
                //     });
                // }

                dispatch(logOut());
                clearInterval(cookieCheck);
            }
        }, 1000);

        return () => clearInterval(cookieCheck);
    }, [cookie_expiration]);

    useEffect(() => {
        if (theme === 'light') {
            $('body').removeClass('dark');
            $('body').addClass('light');
        } else {
            $('body').removeClass('light');
            $('body').addClass('dark');
        }
    }, [theme]);

    return (
        <Fragment>
            <Header />

            <Navbar />

            {children}

            {router.pathname !== '/messages' ? <Footer /> : <></>}

            <ToastContainer
                position="bottom-left"
                autoClose={5000}
                hideProgressBar
                newestOnTop
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                transition={Slide}
            />
        </Fragment>
    );
}

export default Layout;
