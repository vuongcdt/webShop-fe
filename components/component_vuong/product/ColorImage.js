import React, {
    forwardRef,
    useEffect,
    useImperativeHandle,
    useState,
} from 'react';

function ColorImage({ list_variation = [] }, ref) {
    const [colorSelect, setColorSelect] = useState('');

    const handleClick = (e, product_variation_name) => {
        setColorSelect(product_variation_name);
        const element = document.getElementsByClassName('image-item');
        Array.from(element).map((item) => item.classList.remove('active'));
        e.target.parentElement.classList.add('active');
    };

    useImperativeHandle(ref, () => ({
        getColor: () => colorSelect,
    }));

    return (
        <div className="color-image flex-column align-items-start">
            <h6 className="product-title product-title-2 d-block w-100 ">
                Color
            </h6>

            <div className="image-select">
                <div className="size-box">
                    <ul className="image-section m-0">
                        {list_variation.map(
                            ({ image, product_variation }, index) => (
                                <li
                                    key={index}
                                    className="border rounded image-item"
                                    role="button"
                                    onClick={(e) =>
                                        handleClick(e, product_variation.name)
                                    }
                                >
                                    <img
                                        src={image}
                                        className="img-fluid blur-up lazyload"
                                        alt=""
                                    />
                                </li>
                            )
                        )}
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default forwardRef(ColorImage);
