import ProductCard from '../Product/ProductCard';

function ProductGrid({ dataProduct }) {
    const { title, subtitle, products } = dataProduct;
    return (
        <section className="ratio_asos">
            <div className="container">
                <div className="row m-0">
                    <div className="col-sm-12 p-0">
                        <div className="title title-2 text-center">
                            <h2>{title}</h2>
                            <h5 className="text-color">{subtitle}</h5>
                        </div>
                        <div className="product-wrapper product-style-2 row g-sm-4 g-3">
                            {products.map((item, index) => (
                                <div
                                    key={index}
                                    className="col-xl-3 col-lg-4 col-6"
                                >
                                    <ProductCard {...item} />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default ProductGrid;
