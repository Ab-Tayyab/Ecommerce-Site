import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { listProducts, listProductDelete } from "../../actions/productActions";
import { Row, Button } from "react-bootstrap";
import Loader from "../loader/Loader";
import Message from "../message/Message";
import { Link } from "react-router-dom";
const DeleteAndShowProduct = () => {
    const dispatch = useDispatch();

    const productList = useSelector((state) => state.productList);

    const { loading, error, products } = productList;

    const handleDeleteProduct = (id) => {
        if (window.confirm("Are you sure you want to delete this product?")) {
            dispatch(listProductDelete(id))
        }

    }
    useEffect(() => {
        dispatch(listProducts());
    }, [dispatch]);



    const [searchTerm, setSearchTerm] = useState("");
    const [selectedCategory, setSelectedCategory] = useState("all");
    const filteredProducts = products.filter((product) => {
        const nameRegex = new RegExp(searchTerm, "i");
        return (
            nameRegex.test(product.name) &&
            (selectedCategory === "all" || product.category === selectedCategory)
        );
    });
    const handleSearchChange = (event) => {
        setSearchTerm(event.target.value);
    };
    const handleCategoryChange = (event) => {
        setSelectedCategory(event.target.value);
    };
    const categories = [
        "all",
        ...new Set(products.map((product) => product.category)),
    ];

    return (
        <>
            <Link to="/createProduct">
                <Button  style={{
                        marginBottom: "10px",
                        border: "none",
                        background: "#b59677",
                      }}>Create Product</Button>
            </Link>
            <Link to="/orderlist">
                <Button  style={{
                        marginBottom: "10px",
                        border: "none",
                        background: "#b59677",
                        marginLeft:"20px"
                      }}>Order List</Button>
            </Link>
            <h3
                style={{
                    textAlign: "center",
                    paddingTop: "20px",
                    paddingBottom: "20px",
                }}
            >
                {" "}
                All Products
            </h3>
            <div
                style={{
                    display: "flex",
                    justifyContent: "space-between",
                    marginBottom: "20px"
                }}
            >
                <input
                    style={{
                        borderRadius: "5px",
                    }}
                    type="text"
                    placeholder="Search by name"
                    value={searchTerm}
                    onChange={handleSearchChange}
                />
                <select
                    style={{
                        width: "200px",
                        height: "50px",
                        borderRadius: "5px",
                    }}
                    value={selectedCategory}
                    onChange={handleCategoryChange}
                >
                    {categories.map((category) => (
                        <option key={category} value={category}>
                            {category}
                        </option>
                    ))}
                </select>
            </div>
            {loading ? (
                <Loader />
            ) : error ? (
                <Message variant="danger">{error}</Message>
            ) : (
                <Row>
                    {filteredProducts.map((product, index) => (
                        <div
                            key={product._id}
                            style={{
                                width: "100%",
                                display: "flex",
                                justifyContent: "space-between",
                                textAlign: "left",
                                marginBottom: "10px",
                            }}
                        >
                            <h6>{index + 1}</h6>
                            <img src={product.image} width="100px" height="50px" />
                            <div style={{
                                width: "30%",
                                display: "flex",
                                justifyContent: "space-between"
                            }}>
                                <h6>{product.name}</h6>
                                <h6>{product.category}</h6>
                            </div>
                            <i class="fa-solid fa-trash" onClick={() => handleDeleteProduct(product._id)}
                                style={{
                                    cursor: "pointer"
                                }}></i>

                            <Link
                                className="edit"
                                to={`/update/${product._id}`}
                                style={{
                                    textDecoration: "none",
                                    color:"black"
                                }}
                            >
                                <i class="fa-solid fa-edit"
                                    style={{
                                        cursor: "pointer"
                                    }}>
                                </i>
                            </Link>
                        </div>
                    ))}
                </Row>
            )}
        </>
    );
};
export default DeleteAndShowProduct;

