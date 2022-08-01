import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useSelector } from 'react-redux';
import Swal from 'sweetalert2';
import { useUpdateCustomerInfor } from '../../../reactQueryHook';
import wooApi from '../../../src/api/woocommerce/wooApi';
import { COUNTRIES } from '../../../utils/data/countries';

function ModalEditBillingAddress({ customerData }) {
    const {
        error,
        isError,
        isIdle,
        isLoading,
        isPaused,
        isSuccess,
        status,
        mutate,
        reset: resetMutation,
    } = useUpdateCustomerInfor();

    const {
        register,
        handleSubmit,
        reset,
        setValue,
        formState: { errors },
    } = useForm();

    useEffect(() => {
        if (customerData) {
            const {
                first_name,
                last_name,
                email,
                phone,
                address_1,
                address_2,
                company,
                city,
                state,
                country,
                postcode,
            } = customerData.data.billing;
            setValue('first_name', first_name);
            setValue('last_name', last_name);
            setValue('email', email);
            setValue('phone', phone);
            setValue('address_1', address_1);
            setValue('address_2', address_2);
            setValue('company', company);
            setValue('city', city);
            setValue('state', state);
            setValue('country', country);
            setValue('postcode', postcode);
        }
    }, [customerData]);

    useEffect(() => {
        if (isError) {
            Swal.fire({
                title: 'Error!',
                text: error,
                icon: 'error',
                confirmButtonText: 'Close',
            });
        }
    }, [isError]);

    useEffect(() => {
        if (isSuccess) {
            resetMutation();
            $('.modal-close-button').click();
            Swal.fire({
                title: 'Success!',
                text: 'Update customer information succesfully!',
                icon: 'success',
                confirmButtonText: 'Close',
            });
        }
    }, [isSuccess]);

    const onSubmit = async (data) => {
        mutate({
            billing: {
                ...data,
            },
        });
    };

    return (
        <div className="modal fade add-address-modal" id="editBilling">
            <div className="modal-dialog modal-dialog-centered modal-lg">
                <div className="modal-content">
                    <div className="modal-header">
                        <button
                            type="button"
                            className="btn-close"
                            data-bs-dismiss="modal"
                        ></button>
                    </div>
                    <div className="modal-body">
                        <form>
                            <div className="row">
                                <div className="col-md-6">
                                    <div className="mb-1">
                                        <label
                                            htmlFor="first_name"
                                            className="form-label font-light"
                                        >
                                            First name
                                        </label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="first_name"
                                            {...register('first_name', {
                                                required: true,
                                                minLength: 3,
                                            })}
                                        />

                                        {errors.first_name?.type ===
                                            'required' && (
                                            <div className="valid-feedback d-block text-danger">
                                                Please fill the first name.
                                            </div>
                                        )}
                                        {errors.first_name?.type ===
                                            'minLength' && (
                                            <div className="valid-feedback d-block text-danger">
                                                Minimum first name length is 3
                                                characters.
                                            </div>
                                        )}
                                    </div>
                                    <div className="mb-1">
                                        <label
                                            htmlFor="last_name"
                                            className="form-label font-light"
                                        >
                                            Last name
                                        </label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="last_name"
                                            {...register('last_name', {
                                                required: true,
                                                minLength: 3,
                                            })}
                                        />

                                        {errors.last_name?.type ===
                                            'required' && (
                                            <div className="valid-feedback d-block text-danger">
                                                Please fill the last name.
                                            </div>
                                        )}
                                        {errors.last_name?.type ===
                                            'minLength' && (
                                            <div className="valid-feedback d-block text-danger">
                                                Minimum last name length is 3
                                                characters.
                                            </div>
                                        )}
                                    </div>
                                    <div className="mb-1">
                                        <label
                                            htmlFor="email"
                                            className="form-label font-light"
                                        >
                                            Email
                                        </label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="email"
                                            {...register('email', {
                                                required: true,
                                                pattern:
                                                    /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
                                            })}
                                        />
                                        {errors.email?.type === 'required' && (
                                            <div className="valid-feedback d-block text-danger">
                                                Please fill the email.
                                            </div>
                                        )}
                                        {errors.email?.type === 'pattern' && (
                                            <div className="valid-feedback d-block text-danger">
                                                Email format incorrect.
                                            </div>
                                        )}
                                    </div>
                                    <div className="mb-1">
                                        <label
                                            htmlFor="phone"
                                            className="form-label font-light"
                                        >
                                            Phone
                                        </label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="phone"
                                            {...register('phone', {
                                                required: true,
                                                pattern:
                                                    /\(?([0-9]{3})\)?([ .-]?)([0-9]{3})\2([0-9]{4})/,
                                            })}
                                        />
                                        {errors.phone?.type === 'required' && (
                                            <div className="valid-feedback d-block text-danger">
                                                Please fill the phone.
                                            </div>
                                        )}
                                        {errors.phone?.type === 'pattern' && (
                                            <div className="valid-feedback d-block text-danger">
                                                Phone format incorrect.
                                            </div>
                                        )}
                                    </div>
                                    <div className="mb-1">
                                        <label
                                            htmlFor="address_1"
                                            className="form-label font-light"
                                        >
                                            Address 1
                                        </label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="address_1"
                                            {...register('address_1', {
                                                required: true,
                                            })}
                                        />
                                        {errors.address_1?.type ===
                                            'required' && (
                                            <div className="valid-feedback d-block text-danger">
                                                Please fill the address 1.
                                            </div>
                                        )}
                                    </div>
                                    <div className="mb-1">
                                        <label
                                            htmlFor="address_2"
                                            className="form-label font-light"
                                        >
                                            Address 2
                                        </label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="address_2"
                                            {...register('address_2', {
                                                required: true,
                                            })}
                                        />
                                        {errors.address_2?.type ===
                                            'required' && (
                                            <div className="valid-feedback d-block text-danger">
                                                Please fill the address 2.
                                            </div>
                                        )}
                                    </div>
                                </div>
                                <div className="col-md-6">
                                    <div className="mb-1">
                                        <label
                                            htmlFor="company"
                                            className="form-label font-light"
                                        >
                                            Company
                                        </label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="company"
                                            {...register('company')}
                                        />
                                    </div>
                                    <div className="mb-1">
                                        <label
                                            htmlFor="state"
                                            className="form-label font-light"
                                        >
                                            State
                                        </label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="state"
                                            {...register('state', {
                                                required: true,
                                            })}
                                        />

                                        {errors.city?.type === 'required' && (
                                            <div className="valid-feedback d-block text-danger">
                                                Please fill the state.
                                            </div>
                                        )}
                                    </div>
                                    <div className="mb-1">
                                        <label
                                            htmlFor="country"
                                            className="form-label font-light"
                                        >
                                            Country
                                        </label>
                                        <select
                                            {...register('country', {
                                                required: true,
                                            })}
                                            className="form-control"
                                            id="country-select"
                                            style={{ width: '100%' }}
                                        >
                                            <option value="">
                                                Select country
                                            </option>
                                            {COUNTRIES.map((country, index) => (
                                                <option key={index} value={country.code}>
                                                    {country.name}
                                                </option>
                                            ))}
                                        </select>
                                        {errors.country?.type ===
                                            'required' && (
                                            <div className="valid-feedback d-block text-danger">
                                                Please fill the country.
                                            </div>
                                        )}
                                    </div>
                                    <div className="mb-1">
                                        <label
                                            htmlFor="city"
                                            className="form-label font-light"
                                        >
                                            City
                                        </label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="city"
                                            {...register('city', {
                                                required: true,
                                            })}
                                        />

                                        {errors.city?.type === 'required' && (
                                            <div className="valid-feedback d-block text-danger">
                                                Please fill the city.
                                            </div>
                                        )}
                                    </div>
                                    <div className="mb-1">
                                        <label
                                            htmlFor="postcode"
                                            className="form-label font-light"
                                        >
                                            Postcode
                                        </label>
                                        <input
                                            type="text"
                                            className="form-control"
                                            id="postcode"
                                            {...register('postcode', {
                                                required: true,
                                            })}
                                        />
                                        {errors.postcode?.type ===
                                            'required' && (
                                            <div className="valid-feedback d-block text-danger">
                                                Please fill the postcode.
                                            </div>
                                        )}
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                    <div className="modal-footer pt-0 text-end d-block">
                        <button
                            type="button"
                            className="btn bg-secondary text-white rounded-1 modal-close-button"
                            data-bs-dismiss="modal"
                        >
                            Close
                        </button>
                        <button
                            className="btn btn-solid-default rounded-1"
                            onClick={handleSubmit(onSubmit)}
                            style={{ minWidth: 146 }}
                        >
                            {isLoading ? (
                                <div
                                    className="spinner-border text-black spinner-border-sm"
                                    role="status"
                                >
                                    <span className="sr-only">Loading...</span>
                                </div>
                            ) : (
                                <span className="m-0">Save Address</span>
                            )}
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ModalEditBillingAddress;
