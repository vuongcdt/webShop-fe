import { useEffect, useState } from 'react';
import Sidebar from '../../components/Blog/Sidebar';
import SubscribeBox from '../../components/Common/SubscribeBox';
import PostCard from '../../components/Posts/PostCard';
import { useSearchPosts } from '../../src/api_minhhieu/searchPostsApi';
import { useRouter } from 'next/router';
import { NewPostBlogListSkeleton } from '../../components/Skeleton_minhhieu';
import Pagination from '../../components/Blog/Pagination';

function Search() {
    const router = useRouter();
    const page = router.query.page ? router.query.page : 1;
    const { keyword } = router.query;
    const [searchVal, setSearchVal] = useState('');
    const [allowFetch, setAllowFetch] = useState(false);

    const { error, data, refetch, isFetching } = useSearchPosts({
        keyword: keyword,
        page: page,
        allowFetch: allowFetch,
    });

    if (error) {
        router.push('/404');
    }

    useEffect(() => {
        if (keyword) {
            setSearchVal(keyword);
            setAllowFetch(true);
            refetch();
        }
    }, [keyword, page]);

    const handleInputChange = (event) => {
        setSearchVal(event.target.value);
    };

    const handleSearch = () => {
        if (!searchVal) {
        } else {
            router.push({
                pathname: '/search',
                query: { keyword: searchVal },
            });
        }
    };

    const handleInputKeyDown = (event) => {
        if (event.charCode == 13 || event.keyCode == 13) {
            if (!searchVal) {
            } else {
                router.push({
                    pathname: '/search',
                    query: { keyword: searchVal },
                });
            }
        }
    };

    return (
        <>
            <section className="search-section">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="title title1 text-center">
                                <h2>Search For Posts</h2>
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-8 mx-auto">
                            <div className="search-bar">
                                <div className="input-group search-bar w-100 mb-5">
                                    <input
                                        value={searchVal}
                                        type="search"
                                        className="form-control"
                                        placeholder="Search"
                                        onChange={handleInputChange}
                                        onKeyDown={handleInputKeyDown}
                                    />
                                    <button
                                        className="input-group-text"
                                        id="basic-addon3"
                                        onClick={handleSearch}
                                    >
                                        <i className="fas fa-search"></i>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <section className="left-sidebar-section masonary-blog-section mb-5">
                <div className="container">
                    <div className="row g-4">
                        <div className="col-12">
                            <div
                                className="mb-2 h2"
                                style={{ textTransform: 'unset!important' }}
                            >
                                {' '}
                                {keyword
                                    ? `Posts For Keyword: ${keyword}`
                                    : null}
                            </div>
                        </div>
                        <div className="col-lg-9 col-md-7 ratio_square">
                            <div className="row g-4 g-xl-5 pb-5">
                                {!isFetching ? (
                                    data?.responseInfo.length > 0 ? (
                                        data.responseInfo.map((item, index) => {
                                            return (
                                                <div
                                                    className="col-12"
                                                    key={index}
                                                >
                                                    <PostCard {...item} />
                                                </div>
                                            );
                                        })
                                    ) : (
                                        <div
                                            className="theme-color h4"
                                            hidden={keyword ? false : true}
                                        >
                                            No post found
                                        </div>
                                    )
                                ) : (
                                    Array(10)
                                        .fill(0)
                                        .map((item, index) => {
                                            return (
                                                <NewPostBlogListSkeleton
                                                    key={index}
                                                />
                                            );
                                        })
                                )}
                            </div>
                            {data && data.totalPage * 1 !== 0 ? (
                                <div className="row mt-5">
                                    <div className="custom-pagination d-flex justify-content-center align-items-center">
                                        <Pagination
                                            itemsPerPage={15}
                                            data={data}
                                            url={{
                                                pathname: '/search',
                                                query: keyword,
                                            }}
                                        />
                                    </div>
                                </div>
                            ) : null}
                        </div>

                        <div className="col-lg-3 col-md-5">
                            <Sidebar showSearchBox={true} />
                        </div>
                    </div>
                </div>
            </section>

            <SubscribeBox />
        </>
    );
}

export default Search;
