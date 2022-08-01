import { useEffect } from 'react';
import Skeleton from 'react-loading-skeleton';
import { toast } from 'react-toastify';
import { useCustomerInfor } from '../../../../../reactQueryHook';
import ModalEditShippingAddress from '../../../Modals/ModalEditShippingAddress';

function ShippingAddress() {
    const { isLoading, isError, data, error , isFetching} = useCustomerInfor();
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
        <>
            <h6 className="font-light fw-bold">Shipping Address</h6>
            <div className="mb-3">
                {isLoading || isError || isFetching? (
                    <Skeleton count={10} height={20} />
                ) : (
                    <>
                        <h6 className="font-light">
                            First Name: {data.data.shipping.first_name}
                        </h6>
                        <h6 className="font-light">
                            Last Name: {data.data.shipping.last_name}
                        </h6>
                        <h6 className="font-light">
                            Phone: {data.data.shipping.phone}
                        </h6>
                        <h6 className="font-light">
                            Address 1: {data.data.shipping.address_1}
                        </h6>
                        <h6 className="font-light">
                            Address 2: {data.data.shipping.address_2}
                        </h6>
                        <h6 className="font-light">
                            Company: {data.data.shipping.company}
                        </h6>
                        <h6 className="font-light">
                            City: {data.data.shipping.city}
                        </h6>
                        <h6 className="font-light">
                            State: {data.data.shipping.state}
                        </h6>
                        <h6 className="font-light">
                            Country: {data.data.shipping.country}
                        </h6>
                        <h6 className="font-light">
                            Postcode: {data.data.shipping.postcode}
                        </h6>
                    </>
                )}
            </div>
            <button
                className="btn btn-danger btn-sm"
                data-bs-toggle="modal"
                data-bs-target="#editShipping"
            >
                Edit Address
            </button>

            <ModalEditShippingAddress customerData={data} />
        </>
    );
}

export default ShippingAddress;
