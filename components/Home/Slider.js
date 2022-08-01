import React, { useEffect } from 'react';
import { Fragment } from 'react';
import SliderItemClothes from '../Slider/SliderItemClothes';
import SliderItemShoe from '../Slider/SliderItemShoe';

function Slider({ dataSliser }) {
    useEffect(() => {
        let sliderHome = $('.slick-2')
            .slick({
                dots: true,
                infinite: true,
                speed: 500,
                arrows: false,
                autoplay: false,
                slidesToShow: 1,
                slidesToScroll: 1,
                nextArrow:
                    '<div className="custom-arrow next"><span>Next</span><i className="fas fa-chevron-right ms-3"></i></div>',
                prevArrow:
                    '<div className="custom-arrow prev"><i className="fas fa-chevron-left me-3"></i><span>Prev</span></div>',
            })
            .slickAnimation();
        return () => {
            sliderHome.slick('unslick');
        };
    }, []);

    return (
        <Fragment>
            <section className="home-section home-style-2 pt-0">
                <div className="container-fluid p-0">
                    <div className="slick-2 dot-dark">
                        {dataSliser.map((slide, index) => {
                            return slide.type === 'clothes' ? (
                                <SliderItemClothes
                                    slideData={slide}
                                    key={index}
                                />
                            ) : (
                                <SliderItemShoe slideData={slide} key={index} />
                            );
                        })}
                    </div>
                </div>
            </section>
        </Fragment>
    );
}

export default Slider;
