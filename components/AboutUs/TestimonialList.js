import TestimonialItem from './TestimonialItem';
import { useEffect } from 'react';

const TestimonialList = ({ about_us_testimonal_list }) => {
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

        let slideTestimonial = $('.slide-3-1').slick({
            dots: true,
            arrows: false,
            infinite: true,
            slidesToShow: 3,
            slidesToScroll: 2,
            responsive: [
                {
                    breakpoint: 992,
                    settings: {
                        slidesToShow: 3,
                    },
                },
                {
                    breakpoint: 420,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        fade: true,
                    },
                },
            ],
        });

        return () => {
            slideTestimonial.slick('unslick');
        };
    }, [about_us_testimonal_list]);

    return (
        <div className="testimonial-slider product-wrapper slide-3-1 slick-lg-space">
            {about_us_testimonal_list.map((item, index) => {
                return <TestimonialItem key={index} {...item} />;
            })}
        </div>
    );
};

export default TestimonialList;
