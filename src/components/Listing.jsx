import PropTypes from 'prop-types';
import '../App.css';
import Item from "./Item";
import React from "react";

export default function Listing ({items}) {
    console.log(items)

   return (
        <div className="item-list">
            {items.map(item => {
                 return <Item key={item.listing_id}
                      url={item.url}
                      MainImage={item.MainImage}
                      title={item.title}
                      currency_code={item.currency_code}
                      price={item.price}
                      quantity={item.quantity}
                />

                }
            )}
        </div>
    )


}

Listing.defaultProps = {
    items: []
}


Listing.propTypes = {
    items: PropTypes.array
}
