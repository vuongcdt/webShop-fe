import { useSelector } from 'react-redux';
import Breadcrumb from '../../components/Common/BreadCrumb';
import SubscribeBox from '../../components/Common/SubscribeBox';
import WislistItem from '../../components/Wislist/WislistItem';

function WishList() {
    const wishListState = useSelector((state) => state.productLiked);

    return (
        <>
            <Breadcrumb title={'Wislist'} />

            {/* Cart Section Start */}
            <section className="wish-list-section section-b-space">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-12 table-responsive">
                            <table className="table cart-table wishlist-table">
                                <thead>
                                    <tr className="table-head">
                                        <th scope="col">image</th>
                                        <th scope="col">product name</th>
                                        <th scope="col">price</th>
                                        <th scope="col">availability</th>
                                        <th scope="col">action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {wishListState.ids.length > 0 ? (
                                        wishListState.ids.map((item, index) => (
                                            <WislistItem
                                                key={index}
                                                {...wishListState.entities[
                                                    item
                                                ]}
                                            />
                                        ))
                                    ) : (
                                        <tr>
                                            <td colSpan={5}>
                                                <p className="alert alert-warning">
                                                    Your wislist empty !!
                                                </p>
                                            </td>
                                        </tr>
                                    )}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </section>
            {/* Cart Section End */}

            <SubscribeBox />
        </>
    );
}

export default WishList;
