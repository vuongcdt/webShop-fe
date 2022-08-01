function Security() {
    return (
        <div className="tab-pane fade dashboard-security dashboard" id="security">
            <div className="box-head">
                <h3>Delete Your Account</h3>
            </div>
            <div className="security-details">
                <h5 className="font-light mt-3">
                    Hi <span> Mark Enderess,</span>
                </h5>
                <p className="font-light mt-1">We Are Sorry To Here You Would Like To Delete Your Account.</p>
            </div>

            <div className="security-details-1 mb-0">
                <div className="page-title">
                    <h4 className="fw-bold">Note</h4>
                </div>
                <p className="font-light">
                    Deleting your account will permanently remove your profile, personal settings, and all other associated information. Once your account is deleted, You will be logged out and will be unable to log back in.
                </p>

                <p className="font-light mb-4">If you understand and agree to the above statement, and would still like to delete your account, than click below</p>

                <button className="btn btn-solid-default btn-sm fw-bold rounded" data-bs-toggle="modal" data-bs-target="#deleteModal">
                    Delete Your Account
                </button>
            </div>
        </div>
    );
}

export default Security;
