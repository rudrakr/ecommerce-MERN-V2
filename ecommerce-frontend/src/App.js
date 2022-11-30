import logo from "./logo.svg";
import "./App.css";
import data from "./data.js";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";
import Navbar from "react-bootstrap/Navbar";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Homescreen from "./Screens/Homescreen";
import ProductScreen from "./Screens/Product";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar bg="dark" variant="dark">
          <Container>
            <Navbar.Brand href="#home">
              <Link to="/">
                <img
                  alt=""
                  src="data:image/png;base64,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"
                  width="30"
                  height="30"
                  className="d-inline-block align-top"
                />
                Amazona
              </Link>
            </Navbar.Brand>
          </Container>
        </Navbar>
        <Routes>
          <Route path="/" element={<Homescreen />} />
          <Route path="product/:slug" element={<ProductScreen />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
