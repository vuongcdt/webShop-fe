import { Fragment } from 'react';
import Breadcrumb from '../components/Common/BreadCrumb';
import SubscribeBox from '../components/Common/SubscribeBox';
import Link from 'next/link';

export default function Custom505() {
    return (
        <Fragment>
            <Breadcrumb title={500} />

            {/* 404 Section Start */}
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
                                    <h2>Internal Server Error</h2>
                                    <p>Something went wrong :(</p>
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
            {/* 404 Section End */}

            <SubscribeBox />
        </Fragment>
    );
}
