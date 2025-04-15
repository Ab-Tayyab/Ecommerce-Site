import axios from "axios";
import {
  ORDER_CREATE_SUCCESS,
  ORDER_CREATE_REQUEST,
  ORDER_CREATE_FAIL,

  ORDER_LIST_REQUEST,
  ORDER_LIST_SUCCESS,
  ORDER_LIST_FAIL,

  ORDER_PAY_REQUEST,
  ORDER_PAY_SUCCESS,
  ORDER_PAY_FAIL,

  ORDER_DELIVER_REQUEST,
  ORDER_DELIVER_SUCCESS,
  ORDER_DELIVER_FAIL,
  
  ORDER_CANCEL_REQUEST,
  ORDER_CANCEL_SUCCESS,
  ORDER_CANCEL_FAIL,

} from "../constants/orderConstants";

import { CART_CLEAR_ITEMS } from "../constants/cartConstants";


export const createOrder = (order) => async (dispatch, getState) => {
  try {
    dispatch({
      type: ORDER_CREATE_REQUEST,
    });
    const {
      userLogin: { userInfo },
    } = getState();
    const config = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${userInfo.token}`,
      },
    };

    const { data } = await axios.post(
      `http://localhost:5000/api/orders`,
      order,
      config
    );
    dispatch({
      type: ORDER_CREATE_SUCCESS,
      payload: data,
    });

    dispatch({ type: CART_CLEAR_ITEMS });
localStorage.removeItem("cartItems");

  } catch (error) {
    dispatch({
      type: ORDER_CREATE_FAIL,
      payload:
        error.responce && error.responce.data.message
          ? error.responce.data.message
          : error.message,
    });
  }
};

export const listOrders = () => async (dispatch, getState) => {
  try {
    dispatch({ type: ORDER_LIST_REQUEST });

    // const { userLogin: { userInfo } } = getState();

    const config = {
      headers: {
        // Authorization: `Bearer ${userInfo.token}`
      }
    };

    const { data } = await axios.get(`http://localhost:5000/api/orders`, config);

    dispatch({ type: ORDER_LIST_SUCCESS, payload: data });
  } catch (error) {
    dispatch({
      type: ORDER_LIST_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message
    });
  }
};


export const payOrder = (id) => async (dispatch) => {
  try {
    dispatch({ type: ORDER_PAY_REQUEST });
    await axios.put(`http://localhost:5000/api/orders/${id}/pay`);
    dispatch({ type: ORDER_PAY_SUCCESS });
  } catch (error) {
    dispatch({
      type: ORDER_PAY_FAIL,
      payload: error.message,
    });
  }
};

export const deliverOrder = (id) => async (dispatch) => {
  try {
    dispatch({ type: ORDER_DELIVER_REQUEST });
    await axios.put(`http://localhost:5000/api/orders/${id}/deliver`);
    dispatch({ type: ORDER_DELIVER_SUCCESS });
  } catch (error) {
    dispatch({
      type: ORDER_DELIVER_FAIL,
      payload: error.message,
    });
  }
};

export const cancelOrder = (id) => async (dispatch) => {
  try {
    dispatch({ type: ORDER_CANCEL_REQUEST });
    await axios.delete(`http://localhost:5000/api/orders/${id}/cancel`);
    dispatch({ type: ORDER_CANCEL_SUCCESS });
  } catch (error) {
    dispatch({
      type: ORDER_CANCEL_FAIL,
      payload: error.message,
    });
  }
};
