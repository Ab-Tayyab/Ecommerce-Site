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

export const orderCreateReducer = (state = {}, action) => {
  switch (action.type) {
    case ORDER_CREATE_SUCCESS:
      return {
        loading: true,
      };
    case ORDER_CREATE_REQUEST:
      return {
        loading: false,
        success: true,
        order: action.payload,
      };
    case ORDER_CREATE_FAIL:
      return {
        loading: false,
        success: false,
        error: action.payload,
      };
    default:
      return state;
  }
};


const initialState = {
  orders: [],
  loading: false,
  error: null,
};

export const orderListReducer = (state = initialState, action) => {
  switch (action.type) {
    case ORDER_LIST_REQUEST:
      return { ...state, loading: true };
    case ORDER_LIST_SUCCESS:
      return { ...state, loading: false, orders: action.payload };
    case ORDER_LIST_FAIL:
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};

export const orderStatusReducer = (state = {}, action) => {
  switch (action.type) {
    case ORDER_PAY_REQUEST:
    case ORDER_DELIVER_REQUEST:
    case ORDER_CANCEL_REQUEST:
      return { loading: true };
    case ORDER_PAY_SUCCESS:
    case ORDER_DELIVER_SUCCESS:
    case ORDER_CANCEL_SUCCESS:
      return { loading: false, success: true };
    case ORDER_PAY_FAIL:
    case ORDER_DELIVER_FAIL:
    case ORDER_CANCEL_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};
