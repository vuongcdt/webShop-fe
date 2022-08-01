import { useQuery } from 'react-query';
import { BLOG_LIST } from '../../utils/api_minhhieu';
import { useEffect } from 'react';
import Skeleton from 'react-loading-skeleton';
import Link from 'next/link';

function PostCardMansory({
    id,
    title,
    excerpt,
    slug,
    feature_image_url,
    author_meta,
}) {
    return (
        <div className="card masonary-blog" style={{ height: '100%' }}>
            <Link href={`/blog/posts/${slug}`}>
                <a className="w-100">
                    {!feature_image_url ? (
                        <Skeleton className="ratio ratio-4x3"></Skeleton>
                    ) : (
                        <img
                            src={feature_image_url}
                            alt=""
                            className="card-img-top blur-up lazyload"
                        />
                    )}
                </a>
            </Link>
            <div className="card-body">
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
                            src={author_meta.author_avatar}
                            className="img-fluid blur-up lazyload"
                            alt=""
                        />
                    </div>

                    <div className="image-name">
                        <h3>{author_meta.author_name}</h3>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default PostCardMansory;
