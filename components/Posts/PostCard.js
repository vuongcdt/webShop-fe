import { useQuery } from 'react-query';
import { BLOG_LIST } from '../../utils/api_minhhieu';
import Link from 'next/link';
import { useEffect } from 'react';
import Skeleton from 'react-loading-skeleton';

function PostCard({ id, title, excerpt, slug }) {
    const { isLoading, error, data, isFetching } = useQuery(
        ['media', id],
        async () => {
            const res = await fetch(BLOG_LIST + id + '?_embed');

            const data = await res.json();

            return data;
        }
    );

    useEffect(() => {
        if (!isFetching && !isLoading) {
            (function ($) {
                'use strict';
                $('.masonary-blog .bg-img').each(function () {
                    var el = $(this),
                        src = el.attr('src'),
                        parent = el.parent();
                    parent.css({
                        'background-image': 'url(' + src + ')',
                        'background-size': 'cover',
                        'background-position': 'center',
                        'background-repeat': 'no-repeat',
                        display: 'block',
                    });

                    el.hide();
                });
            })(jQuery);
            feather.replace();
        }
    }, [isLoading, isFetching]);

    if (error) return 'An error has occurred: ' + error.message;

    return (
        <div className="masonary-blog box-shadow">
            {isFetching || isLoading ? (
                <Skeleton className="ratio ratio-4x3"></Skeleton>
            ) : (
                <Link href={`/blog/posts/${slug}`}>
                    <a className="bg-size">
                        <img
                            src={data.feature_image_url}
                            className="card-img-top bg-img image-fit blur-up lazyload"
                            alt=""
                        />
                    </a>
                </Link>
            )}

            <div className="card-body card-body-width">
                {/* <h6 className="masonary-name">PRODUCT UPDATE</h6> */}
                <Link href={`/blog/posts/${slug}`}>
                    <a>
                        <h2 className="card-title">{title.rendered}</h2>
                    </a>
                </Link>
                <p
                    className="font-light"
                    dangerouslySetInnerHTML={{ __html: excerpt.rendered }}
                ></p>
                <div className="blog-profile">
                    <div className="image-profile">
                        <img
                            src={
                                !isLoading
                                    ? data?._embedded.author[0].avatar_urls[
                                          '24'
                                      ]
                                    : null
                            }
                            className="img-fluid blur-up lazyload"
                            alt=""
                        />
                    </div>

                    <div className="image-name">
                        <h3>{!isLoading && data?._embedded.author[0].name}</h3>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default PostCard;
