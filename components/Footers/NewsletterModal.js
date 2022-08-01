import React, { useEffect } from 'react';

export default function NewsletterModal() {
    useEffect(() => {
        (function ($) {
            'use strict';
            $('.bg-top').parent().addClass('b-top');
            $('.bg-bottom').parent().addClass('b-bottom');
            $('.bg-center').parent().addClass('b-center');
            $('.bg-left').parent().addClass('b-left');
            $('.bg-right').parent().addClass('b-right');
            $('.bg_size_content').parent().addClass('b_size_content');
            $('.bg-img').parent().addClass('bg-size');
            $('.bg-img.blur-up').parent().addClass('blur-up lazyload');
            $('.bg-img').each(function () {
                var el = $(this),
                    src = el.attr('src'),
                    parent = el.parent();

                parent.css({
                    'background-image': 'url(' + src + ')',
                    'background-size': 'cover',
                    'background-position': 'center',
                    'background-repeat': 'no-repeat',
                    display: 'block',
                });

                el.hide();
            });
        })(jQuery);
        feather.replace();
    }, []);

    return (
        <div className="modal fade newletter-modal" id="newsletter">
            <div className="modal-dialog modal-dialog-centered">
                <div className="modal-content ">
                    <div className="modal-header">
                        <button
                            type="button"
                            className="btn-close"
                            data-bs-dismiss="modal"
                            aria-label="Close"
                        ></button>
                    </div>

                    <div className="modal-body">
                        <img
                            src="/images/newletter-icon.png"
                            className="img-fluid blur-up lazyload"
                            alt=""
                        />
                        <div className="modal-title">
                            <h2 className="tt-title">
                                Sign up for our Newsletter!
                            </h2>
                            <p className="font-light">
                                Never miss any new updates or products we
                                reveal, stay up to date.
                            </p>
                            <p className="font-light">Oh, and it's free!</p>

                            <div className="input-group mb-3">
                                <input
                                    placeholder="Email"
                                    className="form-control"
                                    type="text"
                                />
                            </div>

                            <div className="cancel-button text-center">
                                <button
                                    className="btn default-theme w-100"
                                    data-bs-dismiss="modal"
                                    type="button"
                                >
                                    Submit
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
