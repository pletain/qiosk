import React from 'react';

const Item = ({ itemData }) => {
    const { itemname, price, quantity, description, imgsrc } = itemData;
    return (
            <div>
                {imgsrc && <img src={imgsrc} />}
                <div>
                    <h2>{itemname}</h2>
                    <h3>{price}</h3>
                    <h3>{quantity}</h3>
                    <p>{description}</p>
                </div>
            </div>
    )
}

export default Item;
