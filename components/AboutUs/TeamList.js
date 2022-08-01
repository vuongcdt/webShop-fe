import TeamMembers from './TeamMembers';
import { useEffect } from 'react';

const TeamList = ({ about_us_team_list }) => {
    useEffect(() => {
        let slideTeam = $('.slide-5_1').slick({
            dots: true,
            infinite: false,
            speed: 500,
            arrows: false,
            slidesToShow: 5,
            slidesToScroll: 2,
            responsive: [
                {
                    breakpoint: 1200,
                    settings: {
                        slidesToShow: 4,
                    },
                },
                {
                    breakpoint: 992,
                    settings: {
                        slidesToShow: 2,
                    },
                },
                {
                    breakpoint: 420,
                    settings: {
                        slidesToShow: 2,
                    },
                },
            ],
        });

        return () => {
            slideTeam.slick('unslick');
        };
    }, [about_us_team_list]);

    return (
        <div className="product-wrapper leader-section slick-lg-space slide-5_1 ratio_asos">
            {about_us_team_list.map((item, index) => {
                return <TeamMembers key={index} {...item} />;
            })}
        </div>
    );
};

export default TeamList;
