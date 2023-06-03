import { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateProduct } from '../../actions/productActions';
import { Form, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { useParams } from "react-router";
import { listProductDetail } from '../../actions/productActions';


const UpdateProduct = () => {

    const { id } = useParams()
    const productsDetails = useSelector((state) => state.productsDetails)
    const { product } = productsDetails
    const [name, setName] = useState(product.name || '');
    const [image, setImage] = useState(product.image || '');
    const [description, setDescription] = useState(product.description || '');
    const [brand, setBrand] = useState(product.brand || '');
    const [category, setCategory] = useState(product.category || '');
    const [price, setPrice] = useState(product.price || 0);
    const [countInStock, setCountInStock] = useState(product.countInStock || 0);
    const [rating, setRating] = useState(product.rating || 0);
    const [numReviews, setNumReviews] = useState(product.numReviews || 0);

    const dispatch = useDispatch();

    const productUpdate = useSelector((state) => state.productUpdate);
    const { loading, error, success } = productUpdate;
    useEffect(() => {
        dispatch(listProductDetail(id))
    }, [dispatch, id])

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(
            updateProduct(id, {
                name,
                image,
                description,
                brand,
                category,
                price,
                countInStock,
                rating,
                numReviews
            })
        );
        alert("Product Update Successfully")
    };
    return (
        <>
            <Link to="/dashboard">
                <Button style={{
                    marginBottom: "10px",
                    border: "none",
                    background: "#b59677",
                }}>Go to Dashboard</Button>
            </Link>
            {loading && <p>Loading...</p>}
            {error && <p>{error}</p>}
            {success && <p>Product updated successfully</p>}
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

                <Button type="submit" style={{
                    width: "100%",
                    marginTop: "10px",
                    border: "none",
                    background: "#b59677",
                }}>
                    Update Product
                </Button>
            </Form>
        </>
    );
};

export default UpdateProduct