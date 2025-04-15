import React from "react";
import { useDispatch } from "react-redux";
import { payOrder, deliverOrder, cancelOrder } from "../../actions/orderActions";
import { Button } from "react-bootstrap";

const OrderDetails = ({ order }) => {
    const dispatch = useDispatch();

    const handlePay = () => dispatch(payOrder(order._id));
    const handleDeliver = () => dispatch(deliverOrder(order._id));
    const handleCancel = () => dispatch(cancelOrder(order._id));

    return (
        <div style={{
            width: "500px",
            marginBottom: "20px",
            padding: "10px",
            borderRadius: "5px",
            boxShadow: "rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px"
        }}>
            <h5 textAlign="center">Order Details</h5>
            <p>Order ID: {order._id}</p>
            <p>Payment Method: {order.paymentMethod}</p>
            <p>Total Price: {order.totalPrice}</p>
            <p>Is Paid: {order.isPaid ? "Yes" : "No"}</p>
            <p>Is Delivered: {order.isDelivered ? "Yes" : "No"}</p>
            <h5>Shipping Address</h5>
            <p>
                {order.shippingAddress.address}, {order.shippingAddress.city}, {order.shippingAddress.postalCode}, {order.shippingAddress.country}
            </p>


            <div style={{ display: "flex", gap: "10px", marginTop: "10px" }}>
                <Button onClick={handlePay} disabled={order.isPaid}>Confirm Payment</Button>
                <Button onClick={handleDeliver} disabled={order.isDelivered}>Mark Delivered</Button>
                <Button variant="danger" onClick={handleCancel}>Cancel Order</Button>
            </div>
        </div>
    );
};

export default OrderDetails;
