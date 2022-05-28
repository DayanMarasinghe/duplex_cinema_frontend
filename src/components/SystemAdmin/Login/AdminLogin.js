import axios from "axios";
import React, {  useState } from "react";
import { Button, Col, Form, Row } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import ErrorMessage from "../ErrorMessage";
import Header from "../Header/Header";
import "./AdminLogin.css";

const AdminLogin = ({ history }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);

  const submitHandler = async (e) => {
    e.preventDefault();

    try {
      const config = {
        Headers: {
          "content-type": "application/json",
        },
      };

      const { data } = await axios.post(
        "http://localhost:4000/api/users/login",
        {
          email,
          password,
        },

        config,
        (window.location.href = "/sysdashboard")
      );

      console.log(data);
      localStorage.setItem("userInfo", JSON.stringify(data));
    } catch (error) {
      setError(error.response.data.message);
    }
  };

  return (
    <div>
      <Header></Header>
      <div
        className="container"
        id="logincss"
        style={{ width: 500, marginTop: 40, marginBottom: 200 }}
      >
        {error && <ErrorMessage variant="danger">{error}</ErrorMessage>}
        <Form onSubmit={submitHandler}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control
              type="email"
              value={email}
              placeholder="Enter email"
              onChange={(e) => setEmail(e.target.value)}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              value={password}
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </Form.Group>

          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
        <Row className="py-3">
          <Col>
            Forgotten Password? <Link to="/forgotpassword">Reset it</Link>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default AdminLogin;
