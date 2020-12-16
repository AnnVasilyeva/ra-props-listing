import '../App.css';
import React from "react";

export default function Price ({currency_code, price}) {
    let currencyPrice;
    if (currency_code === 'USD') {
        currencyPrice = `$ ${price}`;
    } else if(currency_code === 'EUR') {
        currencyPrice = `€ ${price}`;
    } else {
        currencyPrice = `${price} GBP`;
    }

 return <p className="item-price">{currencyPrice}</p>
}