import PropTypes from 'prop-types';
import '../App.css';
import React from "react";
import Quantity from "./Quantity";
import Price from "./Price";


export default function Item ({url, MainImage, title, currency_code, price, quantity}) {

    return (
        <div className="item">
            <div className="item-image">
                <a href={url}>
                    <img src={MainImage ? MainImage.url_570xN : ''} alt={title}/>
                </a>
            </div>
            <div className="item-details">
                <p className="item-title">{title.length > 50 ? title.slice(0, 51) + '...' : title}</p>
                <Price currency_code={currency_code} price={price}/>
                <Quantity quantity={quantity}/>
            </div>
        </div>
    )

}

Item.propTypes = {
    url: PropTypes.string,
    MainImage: PropTypes.object,
    title: PropTypes.string,
    currency_code: PropTypes.string,
    price: PropTypes.string,
    quantity: PropTypes.number,
}

