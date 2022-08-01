import { useEffect } from 'react';
import Skeleton from 'react-loading-skeleton';
import { toast } from 'react-toastify';
import { useMyWishList } from '../../../../../../reactQueryHook';

function WishListSummary() {
    const { isLoading, isError, data, error , isFetching} = useMyWishList();
    useEffect(() => {
        if (isError) {
            toast.error(error, {
                position: 'bottom-left',
                autoClose: 2000,
                hideProgressBar: true,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
        }
    }, [isError]);
    return (
        <div className="order-box">
            <div className="order-box-image">
                <img
                    src="/images/svg/wishlist.png"
                    className="img-fluid blur-up lazyload"
                    alt=""
                />
            </div>
            <div className="order-box-contain">
                <img
                    src="/images/svg/wishlist1.png"
                    className="img-fluid blur-up lazyload"
                    alt=""
                />
                <div>
                    <h5 className="font-light">wishlist</h5>
                    <h3>
                        {isLoading || isError || isFetching ? (
                            <Skeleton width={80} />
                        ) : (
                            data.data.length
                        )}
                    </h3>
                </div>
            </div>
        </div>
    );
}

export default WishListSummary;
