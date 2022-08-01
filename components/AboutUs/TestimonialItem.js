import { useEffect } from "react";

const TestimonialItem = ({ image, website, name, feedback, rating }) => {
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
            <div className="testimonial-contain">
                <div className="textimonial-image">
                    <img src={image} className="img-fluid" alt="" />
                </div>

                <div className="testimonial-details">
                    <ul className="rating">
                        <li>
                            <i className="fas fa-star theme-color"></i>
                        </li>
                        <li>
                            <i className="fas fa-star theme-color"></i>
                        </li>
                        <li>
                            <i className="fas fa-star theme-color"></i>
                        </li>
                        <li>
                            <i className="fas fa-star"></i>
                        </li>
                        <li>
                            <i className="fas fa-star"></i>
                        </li>
                    </ul>
                    <h5 className="details-images">
                        <i className="fas fa-quote-left"></i>
                        {feedback}
                        <i className="fas fa-quote-right"></i>
                    </h5>
                    <h5>
                        <strong>{name}</strong> / {website}
                    </h5>
                </div>
            </div>
        </div>
    );
};

export default TestimonialItem;
