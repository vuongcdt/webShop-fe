function Pay() {
    return (
        <div className="tab-pane fade dashboard" id="pay">
            <div className="box-head">
                <h3>Card & Payment</h3>
                <button className="btn btn-solid-default btn-sm fw-bold ms-auto" data-bs-toggle="modal" data-bs-target="#addPayment">
                    <i className="fas fa-plus"></i>
                    Add New Card
                </button>
            </div>

            <div className="card-details-section">
                <div className="row g-4">
                    <div className="col-lg-4 col-sm-6">
                        <div className="payment-card-detail">
                            <div className="card-details">
                                <div className="card-number">
                                    <h4>XXXX - XXXX - XXXX - 2548</h4>
                                </div>

                                <div className="valid-detail">
                                    <div className="title">
                                        <span>valid</span>
                                        <span>thru</span>
                                    </div>
                                    <div className="date">
                                        <h3>12/23</h3>
                                    </div>
                                    <div className="primary">
                                        <span className="badge bg-pill badge-light">primary</span>
                                    </div>
                                </div>

                                <div className="name-detail">
                                    <div className="name">
                                        <h5>mark jecno</h5>
                                    </div>
                                    <div className="card-img">
                                        <img src="/images/payment-icon/1.jpg" className="img-fluid blur-up lazyloaded" alt="" />
                                    </div>
                                </div>
                            </div>

                            <div className="edit-card">
                                <a data-bs-toggle="modal" data-bs-target="#addPayment" href="undefined">
                                    <i className="far fa-edit"></i> edit
                                </a>
                                <a href="undefined">
                                    <i className="far fa-minus-square"></i>
                                    delete
                                </a>
                            </div>
                        </div>

                        <div className="edit-card-mobile">
                            <a data-bs-toggle="modal" data-bs-target="#addPayment" href="undefined">
                                <i className="far fa-edit"></i> edit
                            </a>
                            <a href="undefined">
                                <i className="far fa-minus-square"></i>
                                delete
                            </a>
                        </div>
                    </div>

                    <div className="col-lg-4 col-sm-6">
                        <div className="payment-card-detail">
                            <div className="card-details card-visa">
                                <div className="card-number">
                                    <h4>XXXX - XXXX - XXXX - 2548</h4>
                                </div>

                                <div className="valid-detail">
                                    <div className="title">
                                        <span>valid</span>
                                        <span>thru</span>
                                    </div>
                                    <div className="date">
                                        <h3>12/23</h3>
                                    </div>
                                    <div className="primary">
                                        <span className="badge bg-pill badge-light">primary</span>
                                    </div>
                                </div>

                                <div className="name-detail">
                                    <div className="name">
                                        <h5>mark jecno</h5>
                                    </div>
                                    <div className="card-img">
                                        <img src="/images/payment-icon/2.jpg" className="img-fluid blur-up lazyloaded" alt="" />
                                    </div>
                                </div>
                            </div>

                            <div className="edit-card">
                                <a data-bs-toggle="modal" data-bs-target="#addPayment" href="undefined">
                                    <i className="far fa-edit"></i> edit
                                </a>
                                <a href="undefined">
                                    <i className="far fa-minus-square"></i>
                                    delete
                                </a>
                            </div>
                        </div>

                        <div className="edit-card-mobile">
                            <a data-bs-toggle="modal" data-bs-target="#addPayment" href="undefined">
                                <i className="far fa-edit"></i> edit
                            </a>
                            <a href="undefined">
                                <i className="far fa-minus-square"></i>
                                delete
                            </a>
                        </div>
                    </div>

                    <div className="col-lg-4 col-sm-6">
                        <div className="payment-card-detail">
                            <div className="card-details dabit-card">
                                <div className="card-number">
                                    <h4>XXXX - XXXX - XXXX - 2548</h4>
                                </div>

                                <div className="valid-detail">
                                    <div className="title">
                                        <span>valid</span>
                                        <span>thru</span>
                                    </div>
                                    <div className="date">
                                        <h3>12/23</h3>
                                    </div>
                                    <div className="primary">
                                        <span className="badge bg-pill badge-light">primary</span>
                                    </div>
                                </div>

                                <div className="name-detail">
                                    <div className="name">
                                        <h5>mark jecno</h5>
                                    </div>
                                    <div className="card-img">
                                        <img src="/images/payment-icon/3.jpg" className="img-fluid blur-up lazyloaded" alt="" />
                                    </div>
                                </div>
                            </div>

                            <div className="edit-card">
                                <a data-bs-toggle="modal" data-bs-target="#addPayment" href="undefined">
                                    <i className="far fa-edit"></i> edit
                                </a>
                                <a href="undefined">
                                    <i className="far fa-minus-square"></i>
                                    delete
                                </a>
                            </div>
                        </div>

                        <div className="edit-card-mobile">
                            <a data-bs-toggle="modal" data-bs-target="#addPayment" href="undefined">
                                <i className="far fa-edit"></i> edit
                            </a>
                            <a href="undefined">
                                <i className="far fa-minus-square"></i>
                                delete
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Pay;
