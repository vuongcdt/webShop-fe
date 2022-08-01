import {useStickyPosts} from '../../src/api_minhhieu/stickyPostsApi';
import { SideBarItemSkeleton } from '../Skeleton_minhhieu';
import SideBarItem from './SideBarItem';
import {useRef, useState} from 'react';
import {useRouter} from 'next/router';
import Link from 'next/link';

function Sidebar({showSearchBox}) {

    const router = useRouter();
    const searchVal = useRef('');
    const [requireKW, setRequireKW] = useState(false);

    const { isLoading, error, data, isFetching } = useStickyPosts();

    if (error) return 'An error has occurred: ' + error.message;

    const handleInputChange = () => {
        if (!searchVal.current.value) {
            setRequireKW(true);
        } else {
            setRequireKW(false);
        }
    }

    const handleSearch = () => {
        if (!searchVal.current.value) {
            setRequireKW(true);
        } else {
            router.push({
                pathname:'/search',
                query:{keyword:searchVal.current.value}
            });
        }
        
    }

    const handleInputKeyDown = (event) => {
        if (event.charCode == 13 || event.keyCode == 13) {
            if (!searchVal.current.value) {
                setRequireKW(true);
            } else {
                router.push({
                    pathname:'/search',
                    query:{keyword:searchVal.current.value}
                });
            }
        }
    }

    return (
        <div className="left-side">
            {/* Search Bar Start */}
            <div className="search-section position-relative" hidden={showSearchBox}>
                <div className='position-absolute bottom-100 mb-1 fw-bold theme-color' hidden={!requireKW}>
                    Please enter keyword 
                </div>
                <div className="input-group search-bar">
                    <input
                        ref={searchVal}
                        type="text"
                        className="form-control search-input"
                        placeholder="Search"
                        onKeyDown={handleInputKeyDown}
                        onChange={handleInputChange}
                    />
                    <button
                        className="input-group-text search-button"
                        id="basic-addon3"
                        onClick={handleSearch}
                    >
                        <i className="fas fa-search text-color"></i>
                    </button>
                </div>
            </div>
            {/* Search Bar End */}

            {/* Popular Post Start */}
            <div className="popular-post mt-4">
                <div className="popular-title">
                    <h3>Popular Posts</h3>
                </div>

                {
                    isLoading
                        ? 
                            Array(5).fill(0).map((item, index) => {
                                return <SideBarItemSkeleton key={index}/>
                            })
                        :
                            data    
                                &&
                                    data.map((item, index) => {
                                        return <SideBarItem key={index} data={[item,index]}/>
                                    })
                }
            </div>
            {/* Popular Post End */}

            {/* Category section Start */}
            <div className="category-section popular-post mt-4">
                <div className="popular-title">
                    <h3>Category</h3>
                </div>
                <ul>
                    <li className="category-box">
                        <Link href="/blog/category/global">
                            <a>
                                <div className="category-product">
                                    <div className="cate-shape">
                                        <i className="fas fa-globe text-color"></i>
                                    </div>

                                    <div className="cate-contain">
                                        <h5 className="text-color">Global</h5>
                                    </div>
                                </div>
                            </a>
                        </Link>
                    </li>
                    <li className="category-box">
                        <Link href="/blog/category/business">
                            <a>
                                <div className="category-product">
                                    <div className="cate-shape">
                                        <i className="fas fa-building text-color"></i>
                                    </div>

                                    <div className="cate-contain">
                                        <h5 className="text-color">Business</h5>
                                    </div>
                                </div>
                            </a>
                        </Link>
                    </li>
                    <li className="category-box">
                        <Link href="/blog/category/entertainment">
                            <a>
                                <div className="category-product">
                                    <div className="cate-shape">
                                        <i className="fas fa-play text-color"></i>
                                    </div>

                                    <div className="cate-contain">
                                        <h5 className="text-color">
                                            Entertainmant
                                        </h5>
                                    </div>
                                </div>
                            </a>
                        </Link>
                    </li>
                    <li className="category-box">
                        <Link href="/blog/category/sports">
                            <a>
                                <div className="category-product">
                                    <div className="cate-shape">
                                        <i className="fas fa-tshirt text-color"></i>
                                    </div>

                                    <div className="cate-contain">
                                        <h5 className="text-color">Sports</h5>
                                    </div>
                                </div>
                            </a>
                        </Link>
                    </li>
                    <li className="category-box">
                        <Link href="/blog/category/health">
                            <a>
                                <div className="category-product">
                                    <div className="cate-shape">
                                        <i className="fas fa-dumbbell text-color"></i>
                                    </div>

                                    <div className="cate-contain">
                                        <h5 className="text-color">Health</h5>
                                    </div>
                                </div>
                            </a>
                        </Link>
                    </li>
                </ul>
            </div>
            {/* Category section End */}
        </div>
    );
}

export default Sidebar;
