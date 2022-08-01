import { useEffect } from 'react';
import { useRouter } from 'next/router';
import SubscribeBox from '../../components/Common/SubscribeBox';
import Head from 'next/head';
import PostCard from '../../components/Posts/PostCard';
import Sidebar from '../../components/Blog/Sidebar';
import { NewPostBlogListSkeleton } from '../../components/Skeleton_minhhieu';
import { useBlogListNewPost } from '../../src/api_minhhieu/bloglistApi';
import Breadcrumb from '../../components/Common/BreadCrumb';

function Blog() {
    useEffect(() => {
        (function ($) {
            'use strict';
            $('.bg-top').parent().addClass('b-top');
            $('.bg-bottom').parent().addClass('b-bottom');
            $('.bg-center').parent().addClass('b-center');
            $('.bg-left').parent().addClass('b-left');
            $('.bg-right').parent().addClass('b-right');
            $('.bg_size_content').parent().addClass('b_size_content');
            $('.bg-img').parent().addClass('bg-size');
            $('.bg-img.blur-up').parent().addClass('blur-up lazyload');
            $('.bg-img').each(function () {
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
    }, []);

    const router = useRouter();
    const page = router.query.page ? router.query.page : 1;

    const { isLoading, error, data, isFetching, refetch } = useBlogListNewPost({
        page,
    });

    useEffect(() => {
        refetch();
    }, [page]);

    if (error) {
        router.push('/404');
    }

    return (
        <>
            <Head>
                <title>Blog Listing</title>
            </Head>
            <Breadcrumb title={'Blog'} />
            {/* Blog Section Start */}
            <section className="left-sidebar-section masonary-blog-section">
                <div className="container">
                    <div className="row g-4">
                        <div className="col-lg-9 col-md-7 order-md-1 ratio_square">
                            <div className="row g-4 g-xl-5">
                                {/* minhhieu */}
                                {isLoading
                                    ? Array(8)
                                          .fill(0)
                                          .map((item, index) => {
                                              return (
                                                  <NewPostBlogListSkeleton
                                                      key={index}
                                                  />
                                              );
                                          })
                                    : data.responseInfo &&
                                      data.responseInfo.map((item, index) => {
                                          return (
                                              <div
                                                  className="col-12"
                                                  key={index}
                                              >
                                                  <PostCard {...item} />
                                              </div>
                                          );
                                      })}
                            </div>
                        </div>

                        <div className="col-lg-3 col-md-5">
                            <Sidebar />
                        </div>
                    </div>
                </div>
            </section>
            {/* Blog Section End */}

            {/* pagination section start */}
            <section className="section-b-space">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <nav className="page-section mt-0">
                                <ul className="pagination">
                                    <li className="page-item">
                                        <div
                                            className="page-link"
                                            onClick={() => {
                                                if (page > 1) {
                                                    router.push({
                                                        pathname: '/blog',
                                                        query: {
                                                            page: page * 1 - 1,
                                                        },
                                                    });
                                                }
                                            }}
                                        >
                                            <span aria-hidden="true">
                                                <i className="fas fa-chevron-left"></i>
                                            </span>
                                        </div>
                                    </li>
                                    {/* minhhieu */}
                                    {!isLoading &&
                                        data?.totalPage &&
                                        Array(data.totalPage * 1)
                                            .fill(0)
                                            .map((item, index) => {
                                                return (
                                                    <li
                                                        className={
                                                            'page-item ' +
                                                            (index + 1 == page
                                                                ? 'active'
                                                                : '')
                                                        }
                                                        key={index}
                                                    >
                                                        <div
                                                            className="page-link"
                                                            onClick={() => {
                                                                router.push({
                                                                    pathname:
                                                                        '/blog',
                                                                    query: {
                                                                        page:
                                                                            index +
                                                                            1,
                                                                    },
                                                                });
                                                            }}
                                                        >
                                                            {index + 1}
                                                        </div>
                                                    </li>
                                                );
                                            })}
                                    <li className="page-item">
                                        <div
                                            className="page-link"
                                            onClick={() => {
                                                if (page < data.totalPage * 1) {
                                                    router.push({
                                                        pathname: '/blog',
                                                        query: {
                                                            page: page * 1 + 1,
                                                        },
                                                    });
                                                }
                                            }}
                                        >
                                            <span aria-hidden="true">
                                                <i className="fas fa-chevron-right"></i>
                                            </span>
                                        </div>
                                    </li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                </div>
            </section>
            {/* pagination section end */}

            <SubscribeBox />
        </>
    );
}

export default Blog;
