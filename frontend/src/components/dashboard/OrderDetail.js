import React from "react";

const OrderDetails = ({ order }) => {
    return (
        <div style={{
            width:"500px",
            marginBottom:"20px",
            padding:"10px",
            borderRadius:"5px",
            boxShadow: "rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px"
        }}>
            <h5 textAlign="center">Order Details</h5>
            <p>Order ID: {order._id}</p>
            <p>Payment Method: {order.paymentMethod}</p>
            <p>Total Price: {order.totalPrice}</p>
            <p>Is Paid: {order.isPaid ? "Yes" : "No"}</p>
            <p>Is Delivered: {order.isDelivered ? "Yes" : "No"}</p>
            <h5 textAlign="center">Shipping Address</h5>
            {order.shippingAddress.map((address) => (
                    <p>{address.address},{address.city}, {address.postalCode},{address.country}</p>
            ))}
        </div>
    );
};

export default OrderDetails;
