import Link from 'next/link';
import Head from 'next/head';
import Sidebar from '../../../components/Blog/Sidebar';
import SubscribeBox from '../../../components/Common/SubscribeBox';
import RelatedPostSlide from '../../../components/Posts/RelatedPostSlide';
import AuthorBox from '../../../components/Posts/AuthorBox';
import CommentList from '../../../components/Posts/Comments/CommentList';
import CommentBox from '../../../components/Posts/Comments/CommentBox';
import { useDetailPost } from '../../../src/api_minhhieu/detailPostApi';
import { useRouter } from 'next/router';
import { DetailPostSkeleton } from '../../../components/Skeleton_minhhieu/index';
import { transferDate } from '../../../utils/helpers';
import Breadcrumb from '../../../components/Common/BreadCrumb';

function BlogDetail() {
    // Lấy id bài viết từ url
    const router = useRouter();
    const { slug } = router.query;

    //Get data bài viết
    const { isLoading, error, data, isFetching } = useDetailPost(slug);

    if (error) {
        router.push('/404');
    }

    console.log(data);

    return (
        <>
            <Head>
                <title>{data?.data[0].title.rendered}</title>
            </Head>

            <Breadcrumb
                title={data?.data[0].title.rendered}
                bredcrumbList={[
                    {
                        title: 'Blog',
                        href: '/blog',
                    },
                ]}
            ></Breadcrumb>

            {/* Details Blog Section Start */}
            <section className="masonary-blog-section">
                <div className="container">
                    <div className="row g-4">
                        <div className="col-lg-9 col-md-8 order-md-1 ratio_square">
                            <div className="row g-4">
                                <div className="col-12">
                                    {isFetching || !data ? (
                                        <DetailPostSkeleton />
                                    ) : (
                                        <>
                                            <div className="blog-details">
                                                <div className="blog-image-box">
                                                    <img
                                                        src={
                                                            data.data[0]
                                                                .feature_image_url
                                                        }
                                                        alt=""
                                                        className="card-img-top"
                                                    />
                                                </div>

                                                <div className="blog-detail-contain">
                                                    <span className="font-light">
                                                        {transferDate(
                                                            data.data[0].date
                                                        )}
                                                    </span>
                                                    <h2 className="card-title">
                                                        {
                                                            data.data[0].title
                                                                .rendered
                                                        }
                                                    </h2>
                                                    <div
                                                        dangerouslySetInnerHTML={{
                                                            __html: data.data[0]
                                                                .content
                                                                .rendered,
                                                        }}
                                                    ></div>
                                                </div>
                                            </div>

                                            <AuthorBox
                                                {...data.data[0].author_meta}
                                            />

                                            <CommentBox
                                                postId={data.data[0].id}
                                            />

                                            <CommentList
                                                postId={data.data[0].id}
                                            />
                                        </>
                                    )}
                                </div>
                            </div>
                        </div>

                        <div className="col-lg-3 col-md-4">
                            <Sidebar />
                        </div>
                    </div>
                </div>
            </section>

            {isLoading || !data ? null : (
                <RelatedPostSlide
                    info={{
                        categoryId: data.data[0].categories[0],
                        excludeId: data.data[0].id,
                    }}
                />
            )}

            <SubscribeBox />
        </>
    );
}

export default BlogDetail;
