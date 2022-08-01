import Link from 'next/link';
import React from 'react';

export default function PageContentLoading() {
    return (
        <div className="page-content-loading">
            <section className="page-not-found section-b-space">
                <div className="container">
                    <div className="row gx-md-2 gx-0 gy-md-0 gy-3">
                        <div className="col-md-8 m-auto">
                            <div className="page-image">
                                <img
                                    src="/images/inner-page/404.png"
                                    className="img-fluid blur-up lazyload"
                                    alt=""
                                />
                            </div>
                        </div>

                        <div className="col-md-8 mx-auto mt-md-5 mt-3">
                            <div className="page-container pass-forgot">
                                <div>
                                    <h2>Loading...</h2>
                                    <p>
                                        The page you are looking for loading or
                                        an other error occurred. Wait a minutes
                                        or go back, or head over to choose a new
                                        direction.
                                    </p>
                                    <Link href="/">
                                        <a className="btn btn-solid-default">
                                            Back Home Page
                                        </a>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
