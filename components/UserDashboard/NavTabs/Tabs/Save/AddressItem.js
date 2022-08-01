import React, { Fragment } from 'react';
import Skeleton from 'react-loading-skeleton';
import ModalEditAddress from '../../../Modals/ModalEditAddress';

export default function AddressItem({
    addressData,
    addressRow,
    onClickRemove,
    onClickSubmitEdit,
    isLoadingEdit,
    isFetching,
    editModaAddresslKey,
}) {
    const { address_title, billing_information } = addressData;

    return (
        <Fragment>
            <div className="save-details">
                <div className="save-name">
                    {isFetching ? <Skeleton /> : <h5>{address_title}</h5>}
                </div>

                <div className="save-address">
                    {isFetching ? (
                        <Skeleton count={3} />
                    ) : (
                        <Fragment>
                            <p className="font-light">
                                {billing_information.address_1}
                            </p>
                            <p className="font-light">
                                {billing_information.city}
                            </p>
                            <p className="font-light">
                                {billing_information.postal_code}
                            </p>
                        </Fragment>
                    )}
                </div>

                <div className="mobile">
                    {isFetching ? (
                        <Skeleton className="mb-4" />
                    ) : (
                        <p className="font-light mobile">
                            Mobile No. {billing_information.phone}
                        </p>
                    )}
                </div>

                <div className="button">
                    <button
                        className="btn btn-sm btn-warning me-2"
                        data-bs-toggle="modal"
                        data-bs-target={editModaAddresslKey}
                    >
                        Edit
                    </button>
                    <button
                        onClick={() => {
                            onClickRemove(addressRow);
                        }}
                        className="btn btn-sm btn-danger"
                    >
                        Remove
                    </button>
                </div>
            </div>

            <ModalEditAddress
                editModaAddresslKey={editModaAddresslKey}
                addressData={addressData}
                addressRow={addressRow}
                onClickSubmitEdit={onClickSubmitEdit}
                isLoadingEdit={isLoadingEdit}
            />
        </Fragment>
    );
}
