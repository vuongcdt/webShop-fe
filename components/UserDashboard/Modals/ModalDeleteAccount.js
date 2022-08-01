import React, { Fragment } from 'react';

export default function ModalDeleteAccount() {
    return (
        <Fragment>
            <div className="modal delete-account-modal fade" id="deleteModal">
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                        <div className="modal-header">
                            <button
                                type="button"
                                className="btn-close"
                                data-bs-dismiss="modal"
                            ></button>
                        </div>
                        <div className="modal-body pb-3 text-center mt-4">
                            <h4>
                                Are you sure you want to delete your account?
                            </h4>
                        </div>
                        <div className="modal-footer d-block text-center mb-4">
                            <button
                                className="btn btn-solid-default btn-sm fw-bold rounded"
                                data-bs-target="#doneModal"
                                data-bs-toggle="modal"
                                data-bs-dismiss="modal"
                            >
                                Yes Delete account
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </Fragment>
    );
}
