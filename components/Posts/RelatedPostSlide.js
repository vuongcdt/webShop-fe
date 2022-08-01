import { useEffect } from 'react';
import { useRelatedPosts } from '../../src/api_minhhieu/relatedPostsApi';
import RelatedPostsItem from './RelatedPostsItem';
import { RelatedPostSkeleton } from '../../components/Skeleton_minhhieu/index';

function RelatedPostSlide({ info }) {
    const { error, data, isFetching } = useRelatedPosts({
        categoryId: info.categoryId,
        excludeId: info.excludeId,
    });

    useEffect(() => {
        if (!data || data.length === 0) {
            return;
        }

        let slideRelatedPost = $('.slide-4').slick({
            dots: true,
            infinite: false,
            speed: 500,
            arrows: false,
            slidesToShow: 4,
            slidesToScroll: 1,
            responsive: [
                {
                    breakpoint: 1200,
                    settings: {
                        slidesToShow: 3,
                    },
                },
                {
                    breakpoint: 992,
                    settings: {
                        slidesToShow: 2,
                    },
                },
                {
                    breakpoint: 420,
                    settings: {
                        slidesToShow: 2,
                    },
                },
            ],
        });

        return () => {
            slideRelatedPost.slick('unslick');
        };
    }, [data]);

    // if (error) return 'An error has occurred: ' + error.message;

    return (
        <section className="section-b-space block-shadow-space ratio3_2 related-post">
            <div className="container">
                {isFetching || !data ? (
                    <div className="row">
                        {Array(4)
                            .fill(0)
                            .map((item, index) => {
                                return <RelatedPostSkeleton key={index} />;
                            })}
                    </div>
                ) : (
                    <div className="slide-4 product-wrapper slick-lg-space">
                        {data.map((item, index) => {
                            return (
                                <RelatedPostsItem
                                    key={index}
                                    postSlug={item.slug}
                                />
                            );
                        })}
                    </div>
                )}
            </div>
        </section>
    );
}

export default RelatedPostSlide;
