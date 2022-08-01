import React from 'react';
import ReviewsProduct from './ReviewsProduct';

function ClothReview({
    description,
    average_rating,
    rating_count,
    id,
    acf: { question_and_answers, specifications, guide },
}) {
    return (
        <div className="container">
            <div className="row gx-4 gy-5">
                <div className="col-12">
                    <div className="cloth-review">
                        <nav>
                            <div
                                className="nav nav-tabs "
                                id="nav-tab"
                                role="tablist"
                            >
                                <button
                                    className="nav-link active"
                                    id="nav-home-tab"
                                    data-bs-toggle="tab"
                                    data-bs-target="#desc"
                                    type="button"
                                >
                                    Description
                                </button>

                                <button
                                    className="nav-link"
                                    id="nav-speci-tab"
                                    data-bs-toggle="tab"
                                    data-bs-target="#speci"
                                    type="button"
                                >
                                    Specifications
                                </button>

                                <button
                                    className="nav-link"
                                    id="nav-size-tab"
                                    data-bs-toggle="tab"
                                    data-bs-target="#nav-guide"
                                    type="button"
                                >
                                    Sizing Guide
                                </button>

                                <button
                                    className="nav-link"
                                    id="nav-question-tab"
                                    data-bs-toggle="tab"
                                    data-bs-target="#question"
                                    type="button"
                                >
                                    Q & A
                                </button>

                                <button
                                    className="nav-link "
                                    id="nav-contact-tab"
                                    data-bs-toggle="tab"
                                    data-bs-target="#review"
                                    type="button"
                                >
                                    Review
                                </button>
                            </div>
                        </nav>

                        <div className="tab-content" id="nav-tabContent">
                            <div
                                className="tab-pane fade show active"
                                id="desc"
                                dangerouslySetInnerHTML={{
                                    __html: description,
                                }}
                            ></div>
                            <div
                                className="tab-pane fade"
                                id="speci"
                                dangerouslySetInnerHTML={{
                                    __html: specifications,
                                }}
                            ></div>
                            <div
                                className="tab-pane fade overflow-auto"
                                id="nav-guide"
                                dangerouslySetInnerHTML={{ __html: guide }}
                            ></div>

                            <div className="tab-pane fade" id="question">
                                <div className="question-answer">
                                    <ul>
                                        {question_and_answers.map(
                                            ({ answer, question }, key) => (
                                                <li key={key}>
                                                    <div className="que">
                                                        <i className="fas fa-question"></i>
                                                        <div className="que-details">
                                                            <h6>{question}</h6>
                                                            <p className="font-light">
                                                                {answer}
                                                            </p>
                                                        </div>
                                                    </div>
                                                </li>
                                            )
                                        )}
                                    </ul>
                                </div>
                            </div>

                            <ReviewsProduct
                                id={id}
                                average_rating={average_rating}
                                rating_count={rating_count}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ClothReview;
