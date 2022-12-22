import "../App.css";
import data from "../data.js";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";
import Navbar from "react-bootstrap/Navbar";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import axios from "axios";
import { useReducer } from "react";
import logger from "use-reducer-logger";
import Product from '../Components/Product';
import Loader from "../Components/Loader";

const HomeScreen = () => {
  // const [products, setProducts] = useState([]);
  const reducer = (state, action) => {
    switch (action.type) {
      case "FETCH_RECORD":
        return { ...state, loading: true };
      case "FETCH_SUCCESS":
        return { ...state, products: action.payload, loading: false };
      case "FETCH_ERROR":
        return { ...state, products: [], error: action.payload };
      default:
        return state;
    }
  };

  const [result, dispatch] = useReducer(logger(reducer), {
    loading: true,
    error: "",
    products: [],
  });
  useEffect(() => {
    dispatch({ type: "FETCH_RECORD" });
    axios
      .get("http://localhost:5000/products")
      .then((res) => {
        dispatch({ type: "FETCH_SUCCESS", payload: res.data });
        console.log("res here", res.data);
        // setProducts(res.data);
      })
      .catch((error) => {
        dispatch({ type: "FETCH_ERROR", payload: error });
      });
  }, []);
  return (
    <div>
      <main>
        <h1>Product list</h1>
      </main>
      <Row>
        {result.loading ? (
          <Loader/>
        ) : (
          result.products.length > 0 &&
          result.products.map((product) => {
            return (
              <Col className="product mb-1" xs={12} md={6} lg={3} key={product.name}>
                <Product key={product.slug} product={product} className="mb-3" />
              </Col>
            );
          })
        )}
      </Row>
    </div>
  );
};
export default HomeScreen;
