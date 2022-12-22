import { useParams } from "react-router-dom";
import { useReducer, useEffect } from "react";
import axios from "axios";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Rating from "../Components/Rating";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Badge from "react-bootstrap/Badge";
import Loader from "../Components/Loader";

const reducer = (state, action) => {
  switch (action.type) {
    case "LOADING":
      return { ...state, loading: true };
    case "SUCCESS":
      // console.log('PRODUCT SUCCESS',{ ...state, product: action.payload, loading: false });
      return { ...state, product: action.payload, loading: false };
    case "FAILURE":
      return { ...state, error: action.payload, product: {}, loading: false };
    default:
      return state;
  }
};
const ProductScreen = () => {
  const routeParam = useParams();
  const [state, dispatch] = useReducer(reducer, {
    loading: true,
    product: {},
    error: "",
  });
  console.log(routeParam);
  useEffect(() => {
    dispatch({ type: "LOADING" });
    axios
      .get(`http://localhost:5000/product/${routeParam.slug}`)
      .then((res) => {
        console.log(res);
        dispatch({ type: "SUCCESS", payload: res.data });
        console.log("state==", state);
      }).catch(err=>
        dispatch({type:'FAILURE',payload:err.message}));
  }, [routeParam.slug]);

  return (
    <Container>
      <Row>
        {state.loading ? (
          <Loader/>
        ) : state.error ? (
          <div>{state.error}</div>
        ) : (
          <>
            <Col lg={6} md={6} s={12} xs={12}>
              <img
                className="product-large-img"
                src={state?.product.image}
                alt={state.product.slug}
              />
            </Col>
            <Col lg={3} md={3} s={12} xs={12}>
              <h1>{state?.product.name}</h1>
              <hr />
              <Rating
                rating={state?.product.rating}
                numReviews={state?.product.numReviews}
              />
              <hr />
              <div>price - ${state?.product.price}</div>
              <hr />
              <div>Description - {state.product.description}</div>
            </Col>
            <Col lg={3} md={3} s={12} xs={12} className="mt-2">
              <Card>
                <Card.Body>
                  {/* <Card.Title>Card Title</Card.Title> */}
                  <Card.Text>Price : ${state?.product.price};</Card.Text>
                  <hr />
                  <Card.Text>
                    Status : &nbsp;
                    {state?.product.countInStock > 0 ? (
                      <Badge key="success" bg="success">
                        In Stock
                      </Badge>
                    ) : (
                      <Badge key="warning" bg="warning">
                        Not In Stock
                      </Badge>
                    )}
                  </Card.Text>
                  <hr />
                  <Button
                    className="add-to-cart product-pg-add-to-cart"
                    variant="primary"
                  >
                    Add To Cart
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          </>
        )}
      </Row>
    </Container>
  );
};
export default ProductScreen;
