import "./App.css";
import { Container, Nav, Navbar, Row, Col } from "react-bootstrap";
import { useState } from "react";
import data from "./data";
import { Routes, Route, Link, useNavigate, Outlet } from "react-router-dom";
function App() {
  let [shoes, setShoes] = useState({ data });
  let navigate = useNavigate();
  return (
    <div className="App">
      <Navbar bg="light" data-bs-theme="light">
        <Container>
          <Link to="/">
            <Navbar.Brand href="#home">Shop</Navbar.Brand>
          </Link>
          <Nav className="me-auto">
            <Link to="/detail">
              <Nav.Link href="#home">Home</Nav.Link>
            </Link>

            <Nav.Link href="#features">Cart</Nav.Link>
            <Nav.Link
              onClick={() => {
                navigate("/");
              }}
            >
              Pricing
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      <Routes>
        <Route path="/detail" element={<Card2 />} />
        <Route
          path="/"
          element={
            <div>
              {" "}
              <Card className="title" shoes={shoes.data[0]} i={1} />
              <Card className="title" shoes={shoes.data[1]} i={2} />
              <Card className="title" shoes={shoes.data[2]} i={3} />
            </div>
          }
        />
        <Route path="*" element={<div>404페이지</div>}></Route>
        <Route path="/about" element={<About />} />
        <Route
          path="/event"
          element={
            <div>
              <h1>오늘의 이벤트</h1>
              <Outlet />
            </div>
          }
        >
          <Route
            path="one"
            element={
              <div>
                <Event />
              </div>
            }
          ></Route>
          <Route
            path="two"
            element={
              <div>
                <Event2 />
              </div>
            }
          ></Route>
        </Route>
      </Routes>
      <div className="main-bg"></div>
    </div>
  );
}
const Event2 = () => {
  return (
    <div>
      <h2>생일 기념 쿠폰 받기</h2>
    </div>
  );
};
const Event = () => {
  return (
    <div>
      <h2>첫 주문시 양배추즙 서비스</h2>
    </div>
  );
};
const About = () => {
  return (
    <>
      <h4>회사정보임</h4>
    </>
  );
};
const Card = (props) => {
  return (
    <>
      <img
        src={"https://codingapple1.github.io/shop/shoes" + props.i + ".jpg"}
        width="80%"
      />
      <h4>{props.shoes.title}</h4>
      <p>{props.shoes.content}</p>
    </>
  );
};
const Card2 = () => {
  return (
    <>
      <div>나는 상세페이지 이니깐 다른 것은 들어오지 마라.</div>
    </>
  );
};
export default App;
