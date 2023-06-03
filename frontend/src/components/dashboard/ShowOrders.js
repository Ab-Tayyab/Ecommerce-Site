import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { listOrders } from "../../actions/orderActions";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import OrderDetails from "./OrderDetail";

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
                <div style={{
                    display: "flex",
                    flexWrap: "wrap",
                    width:"100%",
                    justifyContent:"space-between"
                }}>
                    {
                        orders.map((order) => (
                            <OrderDetails order={order} />
                        ))
                    }
                </div>
            )}
        </div>
    );
};

export default OrdersList;
