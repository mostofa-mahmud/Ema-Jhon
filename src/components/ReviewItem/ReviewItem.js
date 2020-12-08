import React from 'react';

const ReviewItem = (props) => {
    const {name, quantity, key, price} = props.product;
    const reviewItemStyle={
        borderBottom: '1px solid lightgrey',
        marginBottom: '10px',
        paddingBottom: '10px',
        marginLeft: '50px',
    };
    return (
        <div style={reviewItemStyle} className="review-item">
            <h4>{name}</h4>
            <p>Quantity: {quantity}</p>
            <p>$ {price}</p>
            <br/>
            <button 
                className="main-button"
                onClick={()=> props.removeProduct(key)}
            >Remove</button>
        </div>
    );
};

export default ReviewItem;