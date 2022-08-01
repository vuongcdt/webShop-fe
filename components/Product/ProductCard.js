import { useEffect } from 'react';
import { conventToCurrency, functionJquery } from '../component_vuong/Common';
import RatingDetails from './RatingDetails';
import Link from 'next/link';
import OnSale from '../component_vuong/product/OnSale';
import AddCompare from '../component_vuong/compare/AddCompare';
import { productAdded, productRemove } from '../../store/user/productLiked';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';

function ProductCard(props) {
    const dispatch = useDispatch();
    const productLikedState = useSelector((state) => state.productLiked);
    const {
        id,
        price,
        slug,
        name,
        categories,
        regular_price,
        average_rating,
        on_sale,
        featured,
        back_image,
        front_image,
        acf = {},
        short_description,
        disAction,
        images,
        tags,
        attributes,
        stock_status,
    } = props;
    useEffect(() => {
        functionJquery();
    }, [front_image, acf]);

    const addWislistHandle = () => {
        let isLiked = productLikedState.ids.includes(id);
        if (isLiked) {
            dispatch(productRemove(id));
            toast.warning('Remove product wishlist successfully!', {
                position: 'top-right',
                autoClose: 2000,
                hideProgressBar: true,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
            return;
        }

        dispatch(
            productAdded({
                id,
                image: images[0],
                name,
                price,
                stock_status,
                slug,
            })
        );

        toast.success('Add product to wishlist successfully!', {
            position: 'top-right',
            autoClose: 2000,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
        });
    };

    return (
        <div className="product-box">
            <div className="img-wrapper">
                <div className="front">
                    <Link href={'/product/' + slug}>
                        <a>
                            <img
                                src={front_image || acf.front_image}
                                className="bg-img blur-up lazyload"
                                alt=""
                            />
                        </a>
                    </Link>
                </div>
                <div className="back">
                    <Link href={'/product/' + slug}>
                        <a>
                            <img
                                src={back_image || acf.back_image}
                                className="bg-img blur-up lazyload"
                                alt=""
                            />
                        </a>
                    </Link>
                </div>
                <div className="label-block">
                    {featured && <span className="label label-black">New</span>}
                    <OnSale
                        on_sale={on_sale}
                        price={price}
                        regular_price={regular_price}
                    />
                </div>
                <div hidden={disAction} className="cart-wrap">
                    <ul>
                        <li>
                            <a
                                data-bs-toggle="modal"
                                data-bs-target="#quick-view"
                                data-product={JSON.stringify({
                                    images,
                                    name,
                                    slug,
                                    price,
                                    regular_price,
                                    on_sale,
                                    categories,
                                    average_rating,
                                    tags,
                                    attributes,
                                    short_description,
                                    acf,
                                })}
                            >
                                <i data-feather="eye"></i>
                            </a>
                        </li>
                        <AddCompare inCard item={props} />
                        <li>
                            <a
                                onClick={addWislistHandle}
                                className={`wishlist ${
                                    productLikedState.ids.includes(id)
                                        ? 'liked'
                                        : ''
                                }`}
                            >
                                <i data-feather="heart"></i>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="product-details">
                <div className="rating-details">
                    <Link href={'/product-category/' + categories[0].slug}>
                        <a className="font-light grid-content">
                            {categories[0].name}
                        </a>
                    </Link>
                    <RatingDetails average_rating={average_rating} showNum />
                </div>
                <div className="main-price">
                    <Link href={'/product/' + slug}>
                        <a role="button" className="font-default">
                            <h5>{name}</h5>
                        </a>
                    </Link>
                    <div className="listing-content">
                        <span className="font-light">Jacket</span>
                        <p
                            className="font-light"
                            dangerouslySetInnerHTML={{
                                __html: short_description,
                            }}
                        ></p>
                    </div>
                    <h3 className="theme-color">{conventToCurrency(price)}</h3>
                    <button className="btn listing-content">Add To Cart</button>
                </div>
            </div>
            {props.children}
            <div className="" id="footer-card"></div>
        </div>
    );
}

export default ProductCard;
