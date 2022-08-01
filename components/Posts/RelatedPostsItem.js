import Link from 'next/link';
import { useDetailPost } from '../../src/api_minhhieu/detailPostApi';
import { transferDate } from '../../utils/helpers';

const RelatedPostsItem = ({ postSlug }) => {
    const { error, data, isFetching } = useDetailPost(postSlug);

    if (error) return 'An error has occurred: ' + error.message;
    console.log(data);
    return (
        <div>
            {isFetching || !data ? null : (
                <div className="card blog-categority">
                    <Link href={'/blog/posts/' + data?.data[0].slug}>
                        <a className="blog-img">
                            <img
                                src={data.data[0].feature_image_url}
                                alt={data.data[0].title.rendered}
                                className="card-img-top blur-up lazyload bg-img"
                            />
                        </a>
                    </Link>
                    <div className="card-body">
                        <Link href={'/blog/posts/' + data?.data[0].slug}>
                            <a>
                                <h2 className="card-title">
                                    {data.data[0].title.rendered}
                                </h2>
                            </a>
                        </Link>
                        <div className="blog-profile">
                            <div className="image-name">
                                <h3>{data.data[0]._embedded.author[0].name}</h3>
                                <span style={{ color: '#7e7e7e' }}>
                                    {transferDate(data.data[0].date)}
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default RelatedPostsItem;
