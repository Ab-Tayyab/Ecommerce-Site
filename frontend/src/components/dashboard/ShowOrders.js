import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { listOrders } from "../../actions/orderActions";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";

const OrdersList = () => {
    const dispatch = useDispatch();

    const orderList = useSelector((state) => state.orderList);
    const { loading, error, orders } = orderList;

    useEffect(() => {
        dispatch(listOrders());
    }, [dispatch]);

    return (
        <div id="second">
            <Link to="/dashboard">
                <Button style={{
                    marginBottom: "10px",
                    border: "none",
                    background: "#b59677",
                }}>Go to Dashboard</Button>
            </Link>
            <h2>Orders List</h2>
            {loading ? (
                <p>Loading...</p>
            ) : error ? (
                <p>{error}</p>
            ) : (
                <ul style={{
                    width:"100%",
                    display:"flex",
                    justifyContent:"space-around",
                    listStyle:"none"
                }}>
                    {orders.map((order) => (
                        <li key={order._id} style={{
                            border:"1px solid gray",
                            padding:"20px",
                            borderRadius:"5px",
                            boxShadow: "rgba(0, 0, 0, 0.12) 0px 1px 3px, rgba(0, 0, 0, 0.24) 0px 1px 2px"
                        }}>
                            <p>Order ID: {order._id}</p>
                            <p>User ID: {order.user}</p>
                            <p>Total Price: ${order.totalPrice}</p>
                            <p>Is Paid: {order.isPaid ? "Yes" : "No"}</p>
                            <p>Is Delivered: {order.isDelivered ? "Yes" : "No"}</p>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default OrdersList;
