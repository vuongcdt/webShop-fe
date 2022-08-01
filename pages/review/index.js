import { useRouter } from 'next/router';
import Script from 'next/script';
import { useEffect } from 'react';
import { useQuery, useQueryClient } from 'react-query';
import Breadcrumb from '../../components/Common/BreadCrumb';
import SubscribeBox from '../../components/Common/SubscribeBox';
import {
    errorModal,
    functionJquery,
} from '../../components/component_vuong/Common';
import PagePagination from '../../components/component_vuong/Common/PagePagination';
import PlaceHolderReviewPage from '../../components/component_vuong/review/PlaceHolderReviewPage';
import RatingDetails from '../../components/Product/RatingDetails';
import { fetchApi, fetchApiAllReviews } from '../../src/api/Api_vuong/fetchApi';

function Review() {
    const queryClient = useQueryClient();
    const {
        query: { page = '1' },
    } = useRouter();
    const {
        isLoading,
        data = { headers: {} },
        error,
        isError,
        isFetching,
        isSuccess,
    } = useQuery(['allReviews', page], () => fetchApiAllReviews(page), {
        keepPreviousData: true,
        staleTime: 60000,
    });

    //  useEffect(() => {
    //      queryClient.prefetchQuery(['allReviews', +page + 1 + ''], () =>
    //          fetchApiAllReviews(+page + 1 + '')
    //      );
    //  }, [data, page, queryClient]);

    useEffect(() => {
        errorModal(isError, error);
    }, [error, isError]);

    const totalPages = data.headers['x-wp-totalpages'] || 0;

    useEffect(() => {
        let grid;
        if (data.data && data.data.length > 0 && isSuccess && !isLoading) {
            console.log($('.grid-item'));
            grid = $('.grid').isotope({
                itemSelector: '.grid-item',
            });
        }

        return () => {
            grid && grid.isotope('destroy');
        };
    }, [data, isLoading, isSuccess]);

    return (
        <>
            <Breadcrumb title={'Review'} />

            <section className="review-section section-b-space" id="list-items">
                <div className="container">
                    {isLoading || isError || isFetching ? (
                        <div className="row g-4">
                            <PlaceHolderReviewPage />
                        </div>
                    ) : (
                        <div className="row g-4 grid">
                            {data.data.map(
                                (
                                    {
                                        review,
                                        reviewer_avatar_urls,
                                        reviewer,
                                        rating,
                                    },
                                    key
                                ) => (
                                    <div
                                        key={key}
                                        className="col-lg-4 col-sm-6 grid-item"
                                    >
                                        <div className="review-box">
                                            <div
                                                className="review-name"
                                                dangerouslySetInnerHTML={{
                                                    __html: review,
                                                }}
                                            ></div>
                                            <div className="review-image">
                                                <div className="review-profile">
                                                    <img
                                                        src={
                                                            reviewer_avatar_urls[
                                                                '24'
                                                            ]
                                                        }
                                                        className="img-fluid blur-up lazyload"
                                                        alt=""
                                                    />
                                                </div>
                                                <i className="fas fa-quote-right"></i>
                                                <div className="image-name">
                                                    <h3>{reviewer}</h3>
                                                    <RatingDetails
                                                        average_rating={rating}
                                                    />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                )
                            )}
                        </div>
                    )}
                </div>
            </section>

            <PagePagination totalPages={totalPages} />
            <SubscribeBox />

            <Script
                src="/js/isotope.pkgd.min.js"
                strategy="beforeInteractive"
            ></Script>
            <Script
                src="/js/portfolio-grid.js"
                strategy="afterInteractive"
            ></Script>
        </>
    );
}

export default Review;
