import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import Swal from 'sweetalert2';
import { useRouter } from 'next/router';
import Link from 'next/link';
import { useDispatch, useSelector } from 'react-redux';
import authApi from '../../src/api/authApi';
import { loginSuccess } from '../../store/auth/authSlice';
import wooApi from '../../src/api/woocommerce/wooApi';
import { setCookies } from 'cookies-next';
import { useGoogleLogin } from 'react-use-googlelogin';

function Login() {
    const router = useRouter();
    const [isLoading, setIsLoading] = useState(false);
    const [isLoadingFb, setIsLoadingFb] = useState(false);
    const [isLoadingGg, setIsLoadingGg] = useState(false);

    const auth = useSelector((state) => state.auth);

    const { signIn: signInGoogle } = useGoogleLogin({
        clientId: '60776063801-jmdmevmoaab8bmta0bnf90f58rbp6u24',
    });

    const { cookie } = auth;
    const dispatch = useDispatch();

    useEffect(() => {
        if (cookie) {
            router.push('/');
        }
    }, [cookie]);

    useEffect(() => {
        $(function () {
            $('.input input')
                .focus(function () {
                    $(this)
                        .parent('.input')
                        .each(function () {
                            $('label', this).css({
                                'line-height': '18px',
                                'font-weight': '100',
                                top: '0px',
                            });
                            $('.spin', this).css({
                                width: '100%',
                            });
                        });
                })
                .blur(function () {
                    $('.spin').css({
                        width: '0px',
                    });
                    if ($(this).val() == '') {
                        $(this)
                            .parent('.input')
                            .each(function () {
                                $('label', this).css({
                                    'line-height': '60px',
                                    'font-weight': '300',
                                    top: '10px',
                                });
                            });
                    }
                });
        });
    }, []);

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors },
    } = useForm();

    const onSubmit = async (data) => {
        try {
            const { email, password } = data;
            setIsLoading(true);

            let res = await authApi.GenerateAuthCookie({
                email,
                password,
            });

            if (res.error && res.error !== null && res.error !== '') {
                reset();
                Swal.fire({
                    title: 'Error!',
                    text: res.error,
                    icon: 'error',
                    confirmButtonText: 'Close',
                });
                setIsLoading(false);
                return;
            }

            let { cookie_name, cookie, user, cookie_expiration } = res;

            let resWishList = await wooApi.getWishList(user.id);

            const { share_key } = resWishList.data[0];

            setCookies('wordpress_login', cookie, {
                expires: new Date(cookie_expiration * 1000),
            });

            dispatch(
                loginSuccess({
                    cookie,
                    cookie_expiration,
                    cookie_name,
                    user,
                    share_key,
                    login_method: 'web',
                })
            );

            setIsLoading(false);

            Swal.fire({
                title: `Login success!`,
                text: 'Welcome back VOXO SHOP',
                icon: 'success',
                showConfirmButton: false,
            });

            router.push('/');
        } catch (error) {
            Swal.fire({
                title: 'Error!',
                text: error,
                icon: 'error',
                confirmButtonText: 'Close',
            });

            setIsLoading(false);
        }
    };

    useEffect(() => {
        window.fbAsyncInit = function () {
            FB.init({
                appId: '980758382812999',
                cookie: true, // Enable cookies to allow the server to access the session.
                xfbml: true, // Parse social plugins on this webpage.
                version: 'v14.0', // Use this Graph API version for this call.
            });
        };

        (function (d, s, id) {
            var js,
                fjs = d.getElementsByTagName(s)[0];
            if (d.getElementById(id)) {
                return;
            }
            js = d.createElement(s);
            js.id = id;
            js.src = 'https://connect.facebook.net/en_US/sdk.js';
            fjs.parentNode.insertBefore(js, fjs);
        })(document, 'script', 'facebook-jssdk');
    }, []);

    const loginFb = () => {
        setIsLoadingFb(true);
        try {
            FB.login(
                async function (response) {
                    console.log(response);
                    // handle the response
                    const { authResponse, status } = response;

                    if (status !== 'connected') {
                        setIsLoadingFb(false);
                        Swal.fire({
                            title: 'Error!',
                            text: 'An error occurred, please try again.',
                            icon: 'error',
                            confirmButtonText: 'Close',
                        });
                        return;
                    }

                    let res = await authApi.LoginWithFb({
                        access_token: authResponse.accessToken,
                        userID: authResponse.userID,
                    });

                    if (res.error && res.error !== null && res.error !== '') {
                        setIsLoadingFb(false);
                        Swal.fire({
                            title: 'Error!',
                            text: res.error,
                            icon: 'error',
                            confirmButtonText: 'Close',
                        });
                        return;
                    }

                    let { cookie_name, cookie, user, cookie_expiration } = res;

                    let resWishList = await wooApi.getWishList(user.id);

                    const { share_key } = resWishList.data[0];

                    setCookies('wordpress_login', cookie, {
                        expires: new Date(cookie_expiration * 1000),
                    });

                    dispatch(
                        loginSuccess({
                            cookie,
                            cookie_expiration,
                            cookie_name,
                            user,
                            share_key,
                            login_method: 'facebook',
                        })
                    );

                    setIsLoadingFb(false);

                    Swal.fire({
                        title: `Login success!`,
                        text: 'Welcome back VOXO SHOP',
                        icon: 'success',
                        showConfirmButton: false,
                    });

                    router.push('/');
                },
                { scope: 'public_profile,email' }
            );
        } catch (error) {
            console.log(error);
            setIsLoadingFb(false);
            Swal.fire({
                title: 'Error!',
                text: 'An error occurred, please try again.',
                icon: 'error',
                confirmButtonText: 'Close',
            });
        }
    };

    const loginGoogle = async (e) => {
        setIsLoadingGg(true);
        let googleUser = await signInGoogle();

        let res = await authApi.LoginWithGoogle({
            id_token: googleUser.tokenId,
        });

        if (res.error && res.error !== null && res.error !== '') {
            setIsLoadingGg(false);
            Swal.fire({
                title: 'Error!',
                text: res.error,
                icon: 'error',
                confirmButtonText: 'Close',
            });
            return;
        }

        let { cookie_name, cookie, user, cookie_expiration } = res;

        let resWishList = await wooApi.getWishList(user.id);

        const { share_key } = resWishList.data[0];

        setCookies('wordpress_login', cookie, {
            expires: new Date(cookie_expiration * 1000),
        });

        dispatch(
            loginSuccess({
                cookie,
                cookie_expiration,
                cookie_name,
                user,
                share_key,
                login_method: 'google',
            })
        );

        setIsLoadingGg(false);

        Swal.fire({
            title: `Login success!`,
            text: 'Welcome back VOXO SHOP',
            icon: 'success',
            showConfirmButton: false,
        });

        router.push('/');
    };

    return (
        <>
            {/* Log In Section Start */}
            <div className="login-section">
                <div className="materialContainer">
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="box">
                            <div className="login-title">
                                <h2>Login</h2>
                            </div>
                            <div className="input">
                                <label htmlFor="email">Email</label>
                                <input
                                    id="email"
                                    type="text"
                                    {...register('email', {
                                        required: true,
                                        pattern:
                                            /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
                                    })}
                                />
                                <span className="spin"></span>
                            </div>
                            {errors.email?.type === 'required' && (
                                <div className="valid-feedback d-block text-danger">
                                    Please fill the email.
                                </div>
                            )}
                            {errors.email?.type === 'pattern' && (
                                <div className="valid-feedback d-block text-danger">
                                    Email format incorrect.
                                </div>
                            )}

                            <div className="input">
                                <label htmlFor="password">Password</label>
                                <input
                                    id="password"
                                    type="password"
                                    {...register('password', {
                                        required: true,
                                    })}
                                />
                                <span className="spin"></span>
                            </div>
                            {errors.password?.type === 'required' && (
                                <div className="valid-feedback d-block text-danger">
                                    Please fill the password.
                                </div>
                            )}

                            <Link href="/forgot-password">
                                <a className="pass-forgot">
                                    Forgot your password?
                                </a>
                            </Link>

                            <div className="button login">
                                <button type="submit">
                                    {isLoading ? (
                                        <div
                                            className="spinner-border text-light spinner-border-sm"
                                            role="status"
                                        >
                                            <span className="sr-only">
                                                Loading...
                                            </span>
                                        </div>
                                    ) : (
                                        <span className="m-0">Log In</span>
                                    )}
                                </button>
                            </div>

                            <p className="sign-category">
                                <span>Or sign in with</span>
                            </p>

                            <div className="row gx-md-3 gy-3">
                                <div className="col-md-6">
                                    <button
                                        type="button"
                                        className="btn p-0 w-100"
                                        onClick={loginFb}
                                    >
                                        <div
                                            className="social-media fb-media"
                                            style={{ height: 51.36 }}
                                        >
                                            {isLoadingFb ? (
                                                <div
                                                    className="spinner-border text-light spinner-border-sm"
                                                    role="status"
                                                >
                                                    <span className="sr-only">
                                                        Loading...
                                                    </span>
                                                </div>
                                            ) : (
                                                <>
                                                    <img
                                                        src="/images/inner-page/facebook.png"
                                                        className="img-fluid blur-up lazyload"
                                                        alt=""
                                                    />
                                                    <h6>Facebook</h6>
                                                </>
                                            )}
                                        </div>
                                    </button>
                                </div>
                                <div className="col-md-6">
                                    <button
                                        type="button"
                                        className="btn p-0 w-100"
                                        onClick={loginGoogle}
                                    >
                                        <div
                                            className="social-media google-media"
                                            style={{ height: 51.36 }}
                                        >
                                            {isLoadingGg ? (
                                                <div
                                                    className="spinner-border text-dark spinner-border-sm"
                                                    role="status"
                                                >
                                                    <span className="sr-only">
                                                        Loading...
                                                    </span>
                                                </div>
                                            ) : (
                                                <>
                                                    <img
                                                        src="/images/inner-page/google.png"
                                                        className="img-fluid blur-up lazyload"
                                                        alt=""
                                                    />
                                                    <h6>Google</h6>
                                                </>
                                            )}
                                        </div>
                                    </button>
                                </div>
                            </div>

                            <p>
                                Not a member?{' '}
                                <Link href="/sign-up">
                                    <a className="theme-color">Sign up now</a>
                                </Link>
                            </p>
                        </div>
                    </form>
                </div>
            </div>
            {/* Log In Section End */}
        </>
    );
}

export default Login;
