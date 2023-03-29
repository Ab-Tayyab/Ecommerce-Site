import React, { useState, useEffect } from "react";
import { Link, useParams, useLocation, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
    Button,
    Offcanvas
} from "react-bootstrap";
import Message from "../message/Message";
import { addToCart, removeFromCart } from "../../actions/cartActions";

const CartDrawer = () => {
    const [isOpen, setIsOpen] = useState(false);

    const handleOpen = () => {
        setIsOpen(true);
    };

    const handleClose = () => {
        setIsOpen(false);
    };

    const { id: productId } = useParams();
    const location = useLocation();
    const navigate = useNavigate();
    const qty = location.search ? Number(location.search.split("=")[1]) : 1;
    const dispatch = useDispatch();
    const cart = useSelector((state) => state.cart);
    const { cartItems } = cart;

    useEffect(() => {
        if (productId) {
            dispatch(addToCart(productId, qty));
        }
    }, [dispatch, productId, qty]);

    const removeFromCartHandler = (id) => {
        dispatch(removeFromCart(id));
    };

    const chackoutHandler = () => {
        navigate("/login?redirect=/shipping");
    };

    function onClickHandler() {
        chackoutHandler();
        handleClose();
    }

    return (
        <>
            <div onClick={handleOpen} style={{
                cursor: "pointer",
                marginTop: "10px"
            }}>
                <div style={{
                    display: "flex"
                }}>
                    <i className="fas fa-shopping-cart" style={{
                        fontSize: "30px",
                        marginLeft: "20px",
                        color: "#b59677"
                    }}>
                    </i>
                </div>
            </div>
            <Offcanvas show={isOpen} onHide={handleClose} placement="end" style={{ width: '350px' }}>
                <Offcanvas.Header closeButton>
                    <Offcanvas.Title>Shopping Cart</Offcanvas.Title>
                </Offcanvas.Header>
                <Offcanvas.Body>
                    <div>
                        <div md={8}>
                            {cartItems.length === 0 ? (
                                <Message>
                                    Your Cart Is Empty! 
                                    <Link to="/allitems" onClick={handleClose} style={{
                                        color:"#b59677"
                                    }}> Go Back</Link>
                                </Message>
                            ) : (
                                <div>
                                    <div>
                                        {cartItems.map((item, index) => (
                                            <div key={item.product}>
                                                <div style={{
                                                    display: "flex",
                                                    justifyContent: "space-around"
                                                }}>
                                                    <div style={{
                                                        marginRight: "10px"
                                                    }}>

                                                        <img src={item.image} alt={item.name} fluid rounded
                                                            style={{
                                                                height: "150px", width: "140px"
                                                            }}
                                                        />
                                                    </div>
                                                    <div>
                                                        <h6>
                                                            {item.name}
                                                        </h6>
                                                        <p>
                                                            RS: {item.price}
                                                        </p>
                                                        <div style={{
                                                            width: "150px",
                                                            display: "flex",
                                                            justifyContent: "space-around",
                                                            border: "1px solid black",
                                                            alignItems: "center"
                                                        }} >
                                                            <Button
                                                                variant="light"
                                                                disabled={item.qty === 1}
                                                                onClick={() => dispatch(addToCart(item.product, item.qty - 1))}
                                                            >
                                                                -
                                                            </Button>
                                                            <span fontSize="40px">{item.qty}</span>
                                                            <Button
                                                                variant="light"
                                                                disabled={item.qty === item.countInStock}
                                                                onClick={() => dispatch(addToCart(item.product, item.qty + 1))}
                                                            >
                                                                +
                                                            </Button>
                                                        </div>
                                                        <div style={{
                                                            border: "1px solid black",
                                                            marginTop: "20px",
                                                            width: "40px",
                                                            height: "40px",
                                                            display: "flex",
                                                            alignItems: "center",
                                                            justifyContent: "center"
                                                        }}>
                                                            <i className="fas fa-trash"
                                                                onClick={() => removeFromCartHandler(item.product)}

                                                            ></i>
                                                        </div>
                                                    </div>
                                                </div>

                                            </div>
                                        ))}
                                    </div>
                                    <div style={{
                                        marginTop: "30px"
                                    }}>
                                        <div style={{
                                            display: "flex",
                                            justifyContent: "space-around",
                                            width: "320px"
                                        }}>
                                            <h6>
                                                SubTotal :
                                            </h6>
                                            <p>
                                                RS:
                                                {cartItems
                                                    .reduce((acc, item) => acc + item.qty * item.price, 0)
                                                    .toFixed(2)}
                                            </p>
                                        </div>
                                        <p>Taxes, shipping and discounts codes calculated at checkout</p>
                                        <Link to="/cart">
                                            <Button
                                                onClick={handleClose}
                                                style={{
                                                    background: " #878787",
                                                    border: "none",
                                                    width: "100%",
                                                    marginBottom: "10px"
                                                }}
                                            >
                                                View Cart
                                            </Button>
                                        </Link>
                                        <Button
                                            type="button"
                                            className="btn-block"
                                            disabled={cartItems.length === 0}
                                            onClick={onClickHandler}
                                            style={{
                                                background: "#b59677",
                                                border: "none",
                                                width: "100%"
                                            }}
                                        >
                                            Proceed To Checkout
                                        </Button>
                                    </div>
                                </div>
                            )}
                        </div>

                    </div>
                </Offcanvas.Body>
            </Offcanvas>
        </>
    );
};

export default CartDrawer;
