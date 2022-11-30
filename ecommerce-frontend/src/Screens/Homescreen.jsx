import "../App.css";
import data from "../data.js";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";
import Navbar from "react-bootstrap/Navbar";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

const HomeScreen = ()=>{
    return(
    <Container fluid>
    <div>
      <main>
        <h1>Product list</h1>
      </main>
      <Row>
        {data.products.map((product) => {
          return (
            <Col className="product" xs={12} md={3} key={product.name}>
              <img
                className="product-img"
                src={product.image}
                alt={product.description}
              ></img>
              <p>
                <Link to={`/product/${product.slug}`}>{product.name}</Link>
              </p>
              <p>
                <strong>${product.price}</strong>
              </p>
              <p>
                <Button variant="info">Add to cart</Button>
              </p>
            </Col>
          );
        })}
      </Row>
    </div>
  </Container>
    );
}
export default HomeScreen;