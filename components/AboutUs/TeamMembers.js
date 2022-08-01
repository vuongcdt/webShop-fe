import { useEffect } from 'react';

const TeamMembers = ({ image, job, name }) => {
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
    }, []);

    return (
        <div>
            <div className="leader-contain">
                <div className="leader-image">
                    <img
                        src={image}
                        className="img-fluid bg-img w-100"
                        alt=""
                        style={{ height: '20rem' }}
                    />
                    <ul className="social-media">
                        <li>
                            <a href="www.facebook.html">
                                <i className="fab fa-facebook-f"></i>
                            </a>
                        </li>

                        <li>
                            <a href="www.twitter.html">
                                <i className="fab fa-twitter"></i>
                            </a>
                        </li>

                        <li>
                            <a href="www.google.html">
                                <i className="fab fa-google-plus-g"></i>
                            </a>
                        </li>
                    </ul>
                </div>
                <div className="leader-contain">
                    <h3>{name}</h3>
                    <h6>{job}</h6>
                </div>
            </div>
        </div>
    );
};

export default TeamMembers;
