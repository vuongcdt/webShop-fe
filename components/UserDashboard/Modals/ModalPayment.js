import React from 'react';

export default function ModalPayment() {
    return (
        <div className="modal fade payment-modal" id="addPayment">
            <div className="modal-dialog modal-dialog-centered">
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
                            <label htmlFor="name" className="form-label">
                                Card Type
                            </label>
                            <select className="form-select form-select-lg mb-4">
                                <option defaultChecked disabled>
                                    Choose Your Card
                                </option>
                                <option defaultValue="1">Creadit Card</option>
                                <option defaultValue="2">Debit Card</option>
                                <option defaultValue="3">
                                    Debit Card and ATM
                                </option>
                            </select>

                            <div className="mb-4">
                                <label htmlFor="card" className="form-label">
                                    Name On Card
                                </label>
                                <input
                                    type="text"
                                    className="form-control"
                                    id="card"
                                    placeholder="Name card"
                                />
                            </div>
                            <div className="mb-4">
                                <label
                                    htmlFor="cAddress"
                                    className="form-label"
                                >
                                    Card Number
                                </label>
                                <input
                                    type="number"
                                    className="form-control"
                                    id="cAddress"
                                    placeholder="XXXX-XXXX-XXXX-XXXX"
                                />
                            </div>
                            <div className="row">
                                <div className="col-md-8 mb-4">
                                    <label
                                        htmlFor="expiry"
                                        className="form-label"
                                    >
                                        Expiry Date
                                    </label>
                                    <input
                                        type="date"
                                        className="form-control font-light"
                                        id="expiry"
                                    />
                                </div>
                                <div className="col-md-4 mb-4">
                                    <label htmlFor="cvv" className="form-label">
                                        CVV
                                    </label>
                                    <input
                                        type="number"
                                        className="form-control"
                                        id="cvv"
                                        placeholder="XX9"
                                    />
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
                            data-bs-dismiss="modal"
                        >
                            Save Card Details
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
