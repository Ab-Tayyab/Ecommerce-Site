import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { listOrders, cancelOrder } from "../../actions/orderActions";
import { Table, Button, Spinner, Alert } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const Profile = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const orderList = useSelector((state) => state.orderList);
  const { loading, error, orders } = orderList;

  const userLogin = useSelector((state) => state.userLogin);
  const { userInfo } = userLogin;

  const orderCancel = useSelector((state) => state.orderCancel);
  const { success: cancelSuccess } = orderCancel || {};


  useEffect(() => {
    if (!userInfo) {
      navigate("/login");
    } else {
      dispatch(listOrders());
    }
  }, [dispatch, userInfo, navigate, cancelSuccess]);

  const handleCancel = (id) => {
    if (window.confirm("Are you sure you want to cancel this order?")) {
      dispatch(cancelOrder(id));
    }
  };

  return (
    <div className="container mt-4">
      <h2>My Orders</h2>
      {loading ? (
        <Spinner animation="border" />
      ) : error ? (
        <Alert variant="danger">{error}</Alert>
      ) : (
        <Table striped bordered hover responsive className="table-sm mt-3">
          <thead>
            <tr>
              <th>ID</th>
              <th>Date</th>
              <th>Total</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {orders
              ?.filter((order) => order.user === userInfo._id)
              .map((order) => (
                <tr key={order._id}>
                  <td>{order._id}</td>
                  <td>{order.createdAt?.substring(0, 10)}</td>
                  <td>${order.totalPrice}</td>
                  <td>
                    {order.isDelivered ? (
                      <span className="text-success">Delivered</span>
                    ) : (
                      <span className="text-warning">Not Delivered</span>
                    )}
                  </td>
                  <td>
                    <Button
                      variant="danger"
                      size="sm"
                      onClick={() => handleCancel(order._id)}
                      disabled={order.isDelivered}
                    >
                      Cancel Order
                    </Button>
                  </td>
                </tr>
              ))}
          </tbody>
        </Table>
      )}
    </div>
  );
};

export default Profile;
