import React, { forwardRef, useImperativeHandle, useState } from 'react';

function SelectSize({ attributes }, ref) {
    const [sizeSelect, setSizeSelect] = useState('');
    const [qty, setQty] = useState(1);
    const handleClick = (item, key, e) => {
        setSizeSelect(item);
        const element = document.getElementsByClassName('size-item');
        Array.from(element).map((item) => item.classList.remove('active'));
        e.target.parentElement.classList.add('active');
    };

    useImperativeHandle(ref, () => ({
        getSize: () => sizeSelect,
        getQty: () => qty,
    }));

    const plusQty = () => {
        setQty((prev) => {
            if (prev >= 99) {
                return 99;
            } else {
                return prev + 1;
            }
        });
    };

    const minusQty = () => {
        setQty((prev) => {
            if (prev <= 1) {
                return 1;
            } else {
                return prev - 1;
            }
        });
    };

    const changeQty = (qtyNumber) => {
        if (qtyNumber >= 99) {
            setQty(99);
        } else {
            setQty(qtyNumber);
        }
    };

    return (
        <div
            id="selectSize"
            className="addeffect-section product-description border-product"
        >
            <h6 className="product-title product-title-2 d-block">Size</h6>
            <div className="size-box">
                <ul>
                    {attributes
                        .filter((item) => item.name === 'Size')[0]
                        .options.map((item, key) => (
                            <li
                                className="size-item"
                                key={key}
                                onClick={(e) => handleClick(item, key, e)}
                            >
                                <a>{item}</a>
                            </li>
                        ))}
                </ul>
            </div>

            <h6 className="product-title product-title-2 d-block">quantity</h6>

            <div className="qty-box">
                <div className="input-group">
                    <span className="input-group-prepend">
                        <button
                            type="button"
                            className="btn quantity-left-minus"
                            data-type="minus"
                            data-field=""
                            onClick={minusQty}
                        >
                            <i className="fas fa-minus"></i>
                        </button>
                    </span>
                    <input
                        type="text"
                        name="quantity"
                        className="form-control input-number"
                        value={qty}
                        onChange={(e) => {
                            changeQty(Number(e.target.value));
                        }}
                    />
                    <span className="input-group-prepend">
                        <button
                            type="button"
                            className="btn quantity-right-plus"
                            data-type="plus"
                            data-field=""
                            onClick={plusQty}
                        >
                            <i className="fas fa-plus"></i>
                        </button>
                    </span>
                </div>
            </div>
        </div>
    );
}

export default forwardRef(SelectSize);
