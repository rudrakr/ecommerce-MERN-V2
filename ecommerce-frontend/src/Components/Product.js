import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Rating from './Rating';

const Product = (props) => {
  console.log("props here", props);
  const product = props.product;
  return (
    <Card>
      <Card.Img variant="top" src={product.image} alt={product.description} />
      <Card.Body>
        <Card.Title>
          <Link to={`/product/${product.slug}`}>{product.name}</Link>
        </Card.Title>
        {/* <FontAwesomeIcon icon="fa-solid fa-star" /> */}
        <Rating rating={product.rating} numReviews={product.numReviews}/>
        <Card.Text>
          <strong>${product.price}</strong>
        </Card.Text>
        <Button className="add-to-cart" variant="primary">Add to cart</Button>
      </Card.Body>
    </Card>
  );
};
export default Product;
