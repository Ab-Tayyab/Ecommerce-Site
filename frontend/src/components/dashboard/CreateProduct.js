import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { createProduct } from "../../actions/productActions";
import { Form, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

const CreateProduct = () => {
    const dispatch = useDispatch();

    const [name, setName] = useState("");
    const [image, setImage] = useState("");
    const [description, setDescription] = useState("");
    const [brand, setBrand] = useState("");
    const [category, setCategory] = useState("");
    const [price, setPrice] = useState(0);
    const [countInStock, setCountInStock] = useState(0);
    const [rating, setRating] = useState(0);
    const [numReviews, setNumReviews] = useState(0);

    const handleSubmit = (event) => {
        event.preventDefault();
        const product = {
            name,
            image,
            description,
            brand,
            category,
            price,
            countInStock,
            rating,
            numReviews,
        };
        dispatch(createProduct(product));
        setName("");
        setImage("");
        setDescription("");
        setBrand("");
        setCategory("");
        setPrice(0);
        setCountInStock(0);
        setRating(0);
        setNumReviews(0);
    };

    return (
        <>
            <Link to="/dashboard">
                <Button >Go to Dashboard</Button>
            </Link>
            <h1 style={{
                textAlign:"center"
            }}>Create New Product</h1>
            <Form onSubmit={handleSubmit}>
                <Form.Group controlId="name">
                    <Form.Label>Name</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Enter product name"
                        value={name}
                        onChange={(event) => setName(event.target.value)}
                    />
                </Form.Group>

                <Form.Group controlId="image">
                    <Form.Label>Image</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Enter image URL"
                        value={image}
                        onChange={(event) => setImage(event.target.value)}
                    />
                </Form.Group>

                <Form.Group controlId="description">
                    <Form.Label>Description</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Enter product description"
                        value={description}
                        onChange={(event) => setDescription(event.target.value)}
                    />
                </Form.Group>

                <Form.Group controlId="brand">
                    <Form.Label>Brand</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Enter product brand"
                        value={brand}
                        onChange={(event) => setBrand(event.target.value)}
                    />
                </Form.Group>

                <Form.Group controlId="category">
                    <Form.Label>Category</Form.Label>
                    <Form.Control
                        type="text"
                        placeholder="Enter product category"
                        value={category}
                        onChange={(event) => setCategory(event.target.value)}
                    />
                </Form.Group>

                <Form.Group controlId="price">
                    <Form.Label>Price</Form.Label>
                    <Form.Control
                        type="number"
                        placeholder="Enter product price"
                        value={price}
                        onChange={(event) => setPrice(event.target.value)}
                    />
                </Form.Group>

                <Form.Group controlId="countInStock">
                    <Form.Label>Count in Stock</Form.Label>
                    <Form.Control
                        type="number"
                        placeholder="Enter count in stock"
                        value={countInStock}
                        onChange={(event) => setCountInStock(event.target.value)}
                    />
                </Form.Group>

                <Form.Group controlId="rating">
                    <Form.Label>Rating</Form.Label>
                    <Form.Control
                        type="number"
                        placeholder="Enter product rating"
                        value={rating}
                        onChange={(event) => setRating(event.target.value)}
                    />

                </Form.Group>

                <Form.Group controlId="numReviews">
                    <Form.Label>Number of Reviews</Form.Label>
                    <Form.Control
                        type="number"
                        placeholder="Enter number of reviews"
                        value={numReviews}
                        onChange={(event) => setNumReviews(event.target.value)}
                    />
                </Form.Group>

                <Button variant="primary" type="submit">
                    Create Product
                </Button>
            </Form>
        </>
    );
}

export default CreateProduct