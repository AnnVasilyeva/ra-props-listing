import '../App.css';
import React from "react";

export default function Quantity ({quantity}) {
    let classChange;
    if (quantity <= 10) {
        classChange = 'low';
    } else if (quantity <= 20) {
        classChange = 'medium';
    } else {
        classChange = 'high';
    }

    return <p className={`item-quantity level-${classChange}`}>{quantity} left</p>
}