import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { Card, Row, Col, Image, ListGroup, Button } from 'react-bootstrap'
import Rating from '../homeProduct/Rating'
import { useNavigate, useParams } from "react-router";
import Loader from '../loader/Loader';
import Message from '../message/Message';
import { useDispatch, useSelector } from 'react-redux'
import { listProductDetail } from '../../actions/productActions';
import { Form } from 'react-bootstrap';
import { addToCart } from '../../actions/cartActions';
import Toast from 'react-bootstrap/Toast';
import ToastContainer from 'react-bootstrap/ToastContainer'
import RelatedProducts from '../relatedProducts/RelatedProducts';


const Detail = () => {
  const [show, setShow] = useState(false);
  const [qty, setQty] = useState(1)
  let navigate = useNavigate()


  const { id } = useParams()
  const dispatch = useDispatch()
  const productsDetails = useSelector((state) => state.productsDetails)
  const { loading, error, product } = productsDetails

  // var category = product.map((p)=>{
  //   return p.category
  // })
  useEffect(() => {
    dispatch(listProductDetail(id))
  }, [dispatch, id])

  const addToCartHandler = () => {
    // navigate(`/cart/${id}?qty=${qty}`);
    dispatch(addToCart(id, qty));

  }

  const notify = () => {
    setShow(true)
  }
  const handleSubmit = () => {
    addToCartHandler()
    notify()
  }


  return (
    <>
      <ToastContainer position='middle-center'>
        <Toast bg='success' onClose={() => setShow(false)} show={show} delay={1000} autohide>
          <Toast.Header>
            <strong className="me-auto">Item Add Successfully</strong>
          </Toast.Header>
        </Toast>
      </ToastContainer>
      <Link to="/" className='btn btn-light my-3 mb-5'>
        Go to Home
      </Link>
      {
        loading ? (
          <Loader />
        ) : error ? (
          <Message variant="danger">{error}</Message>
        ) : (
          <Row>
            <Col md="6">
              <Image src={product?.image} alt={product?.name} fluid style={{
                height: "320px"
              }} />
            </Col >
            <Col md={3}>
              <ListGroup variant='flush'>
                <ListGroup.Item>
                  <h3>
                    {product?.name}
                  </h3>
                </ListGroup.Item>

                <ListGroup.Item>
                  <Rating
                    value={product?.rating}
                    text={`${product?.numReviews} reviews`} />
                </ListGroup.Item>

                <ListGroup.Item>
                  Price: ${product?.price}
                </ListGroup.Item>

                <ListGroup.Item style={{
                  textAlign:"justify"
                }}>
                  Description: {product?.description}
                </ListGroup.Item>
              </ListGroup>
            </Col>

            <Col md={3}>
              <Card>
                <ListGroup variant='flush'>
                  <ListGroup.Item>
                    <Row>
                      <Col>Price</Col>
                      <Col>${product?.price}</Col>
                    </Row>
                  </ListGroup.Item>

                  <ListGroup.Item>
                    <Row>
                      <Col>Status</Col>
                      <Col>${product?.countInStock > 0 ? `${product?.countInStock} In A Stock` : 'Out of Stock'}</Col>
                    </Row>
                  </ListGroup.Item>

                  {
                    product.countInStock > 0 && (

                      <ListGroup.Item>
                        <Row>
                          <Col>Qty</Col>
                          <Col>
                            <Form.Control
                              as='select'
                              value={qty}
                              onChange={(e) => setQty(e.target.value)}
                            >
                              {[...Array(product.countInStock).keys()].map(
                                (x) =>
                                (

                                  <option key={x + 1} value={x + 1}>
                                    {x + 1}
                                  </option>
                                ))
                              }

                            </Form.Control>
                          </Col>
                        </Row>
                      </ListGroup.Item>
                    )
                  }

                  <ListGroup.Item>
                    <Button className='btn-block'
                      type='button'
                      disabled={product?.countInStock === 0}
                      onClick={handleSubmit}
                      style={{
                        width: "100%",
                        marginBottom: "10px",
                        border: "none",
                        background: "#b59677",
                      }}
                    >
                      Add to Cart
                    </Button>
                    <Link to="/cart">
                      <Button className='btn-block'
                        type='button'
                        style={{
                          width: "100%",
                          background: " #878787",
                          border: "none",
                        }}
                      >
                        View Cart
                      </Button>
                    </Link>
                  </ListGroup.Item>
                </ListGroup>
              </Card>
            </Col>
          </Row>
        )
      }

      <RelatedProducts category={product.category}/>

    </>
  )
}

export default Detail

