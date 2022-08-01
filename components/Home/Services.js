import SevicesItem from '../Sevices/SevicesItem';

const sevicesData = [
    {
        icon: '/svg/icons.svg#customer',
        title: 'Customer Servcies',
        desc: 'Top notch customer service.',
    },
    {
        icon: '/svg/icons.svg#shop',
        title: 'Pickup At Any Store',
        desc: 'Free shipping on orders over $65.',
    },
    {
        icon: '/svg/icons.svg#secure-payment',
        title: 'Secured Payment',
        desc: 'We accept all major credit cards.',
    },
    {
        icon: '/svg/icons.svg#return',
        title: 'Free Returns',
        desc: '30-days free return policy.',
    },
];

function Services() {
    return (
        <section className="service-section service-style-2 section-b-space">
            <div className="container">
                <div className="row g-4 g-sm-3">
                    {sevicesData.map((item, index) => (
                        <div key={index} className="col-xl-3 col-sm-6">
                            <SevicesItem
                                title={item.title}
                                desc={item.desc}
                                icon={item.icon}
                            />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Services;
