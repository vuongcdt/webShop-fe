import React, { useEffect } from 'react';
import TeamList from '../../components/AboutUs/TeamList';
import Breadcrumb from '../../components/Common/BreadCrumb';
import SubscribeBox from '../../components/Common/SubscribeBox';
import { useShopInfor } from '../../src/api_minhhieu/shopInforApi';
import TestimonialItem from '../../components/AboutUs/TestimonialList';
import {
    TeamMemberSkeleton,
    TestimonialItemSkeleton,
} from '../../components/Skeleton_minhhieu';

export default function AboutUs() {
    useEffect(() => {
        feather.replace();
    }, []);

    const { isLoading, error, data, refetch, isFetching, isFetched } =
        useShopInfor();

    if (error) console.log('error');

    return (
        <>
            <Breadcrumb title={'About Us'} />
            {/* team leader section Start */}
            <section className="overflow-hidden">
                <div className="container">
                    <div className="row g-5">
                        <div className="col-xl-5 offset-xl-1">
                            <div className="row g-3">
                                <div className="col-md-6">
                                    <img
                                        src="/images/inner-page/review-image/6.jpg"
                                        className="img-fluid rounded-3 about-image"
                                        alt=""
                                    />
                                </div>
                                <div className="col-md-6">
                                    <img
                                        src="/images/inner-page/review-image/7.jpg"
                                        className="img-fluid rounded-3 about-image"
                                        alt=""
                                    />
                                </div>
                                <div className="col-12 ratio_40">
                                    <div>
                                        <img
                                            src="/images/inner-page/review-image/8.jpg"
                                            className="img-fluid rounded-3 team-image bg-img"
                                            alt=""
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="col-xl-5">
                            <div className="about-details">
                                <div>
                                    <h2>WHO WE ARE</h2>
                                    <h3>largest Online fashion destination</h3>
                                    <p>
                                        As a brand that sells loungewear, Voxo
                                        puts craftsmanship at the forefront of
                                        what makes it different. One of the best
                                        ways to use your About Us page is to
                                        illustrate your brand’s value
                                        proposition.
                                    </p>
                                    <p>
                                        Voxo uses a series of pictures, options
                                        of the product to showcase its careful
                                        approach to detail, construction, and
                                        quality. This goes along with the “show
                                        don’t tell” strategy that can make an
                                        About Us page so powerful
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* team leader section End */}

            {/* service section start */}
            <section className="service-section about-page service-style-2 section-b-space">
                <div className="container">
                    <div className="row g-4 g-sm-3">
                        <div className="col-xl-3 col-sm-6">
                            <div className="service-wrap">
                                <div className="service-icon">
                                    <svg>
                                        <use xlinkHref="/svg/icons.svg#customer"></use>
                                    </svg>
                                </div>
                                <div className="service-content">
                                    <h3 className="mb-2">Customer Servcies</h3>
                                    <span className="font-light">
                                        Top notch customer service.
                                    </span>
                                </div>
                            </div>
                        </div>

                        <div className="col-xl-3 col-sm-6">
                            <div className="service-wrap">
                                <div className="service-icon">
                                    <svg>
                                        <use xlinkHref="/svg/icons.svg#shop"></use>
                                    </svg>
                                </div>
                                <div className="service-content">
                                    <h3 className="mb-2">
                                        Pickup At Any Store
                                    </h3>
                                    <span className="font-light">
                                        Free shipping on orders over $65.
                                    </span>
                                </div>
                            </div>
                        </div>

                        <div className="col-xl-3 col-sm-6">
                            <div className="service-wrap">
                                <div className="service-icon">
                                    <svg>
                                        <use xlinkHref="/svg/icons.svg#secure-payment"></use>
                                    </svg>
                                </div>
                                <div className="service-content">
                                    <h3 className="mb-2">Secured Payment</h3>
                                    <span className="font-light">
                                        We accept all major credit cards.
                                    </span>
                                </div>
                            </div>
                        </div>

                        <div className="col-xl-3 col-sm-6">
                            <div className="service-wrap">
                                <div className="service-icon">
                                    <svg>
                                        <use xlinkHref="/svg/icons.svg#return"></use>
                                    </svg>
                                </div>
                                <div className="service-content">
                                    <h3 className="mb-2">Free Returns</h3>
                                    <span className="font-light">
                                        30-days free return policy.
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* service section end */}

            {/* Leader section start */}
            <section className="section-b-space team-leader-section">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="title title1 text-center">
                                <h2>Meet Our Team</h2>
                                <p>
                                    Lorem ipsum dolor sit amet consectetur
                                    adipisicing elit. Libero assumenda hic porro
                                    odio voluptas qui quod sed.
                                </p>
                            </div>
                        </div>
                    </div>
                    {isFetching ? (
                        <TeamMemberSkeleton />
                    ) : (
                        <TeamList {...data.data.acf} />
                    )}
                </div>
            </section>
            {/* leader section End */}

            {/* testimonial section start */}
            <section className="testimonial-section section-b-space">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="title title1 text-center">
                                <h2>Testimonial</h2>
                                <p>
                                    Lorem ipsum dolor sit amet consectetur
                                    adipisicing elit. Libero assumenda hic porro
                                    odio voluptas qui quod sed.
                                </p>
                            </div>
                        </div>
                    </div>
                    {isFetching ? (
                        <TestimonialItemSkeleton />
                    ) : (
                        <TestimonialItem {...data.data.acf} />
                    )}
                </div>
            </section>
            {/* testimonial section end */}

            <SubscribeBox />
        </>
    );
}
