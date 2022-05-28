import React from "react";
import "./Register.css";
import { Form, Button } from "react-bootstrap";
import { useState } from "react";
//import { Routes, Route, useNavigate } from "react-router-dom";
import ErrorMessage from "../ErrorMessage";
import axios from "axios";
import Header from "../Header/Header";

const AdminRegister = () => {
  const [email, setEmail] = useState("");
  const [full_name, setFullname] = useState("");
  const [address, setAddress] = useState("");
  const [nic, setNic] = useState("");
  const [password, setPassword] = useState("");
  const [confirmpassword, setConfirmPassword] = useState("");
  const [message, setMessage] = useState(null);
  const [error, setError] = useState(false);

  const submitHandler = async (e) => {
    e.preventDefault();

    if (password !== confirmpassword) {
      setMessage("Passwords do not match");
    } else {
      setMessage(null);
      try {
        const config = {
          Headers: {
            "content-type": "application/json",
          },
        };

        const { data } = await axios.post("http://localhost:4000/api/users/adminregister",
          {
            full_name, address, nic, email, password,
          },
          config
        );

        console.log(data);

        localStorage.setItem("userInfo", JSON.stringify(data));
      } catch (error) {
        setError(error.response.data.message);
      }
    }
  };

  return (
    <div>
      <Header>/</Header>
      <div className="container"  id="logincss" style={{ width: 600 }}>
        <div className="loginContainer">
          {error && <ErrorMessage variant="danger">{error}</ErrorMessage>} 
          {message && <ErrorMessage variant="danger">{message}</ErrorMessage>}
          <h4>Movie Admin Registration</h4>
          <Form onSubmit={submitHandler}>
            <Form.Group
              controlId="name"
              style={{ marginBottom: 10, marginTop: 20 }}
            >
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="name"
                value={full_name}
                placeholder="Enter name"
                onChange={(e) => setFullname(e.target.value)}
              />
            </Form.Group>

            <Form.Group controlId="address" style={{ marginBottom: 10 }}>
              <Form.Label>Address</Form.Label>
              <Form.Control
                type="text"
                value={address}
                placeholder="Enter address"
                onChange={(e) => setAddress(e.target.value)}
              />
            </Form.Group>

            <Form.Group controlId="nic" style={{ marginBottom: 10 }}>
              <Form.Label>NIC</Form.Label>
              <Form.Control
                type="text"
                value={nic}
                placeholder="Enter NIC"
                onChange={(e) => setNic(e.target.value)}
              />
            </Form.Group>

            <Form.Group controlId="formBasicEmail" style={{ marginBottom: 10 }}>
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                value={email}
                placeholder="Enter email"
                onChange={(e) => setEmail(e.target.value)}
              />
            </Form.Group>

            <Form.Group
              controlId="formBasicPassword"
              style={{ marginBottom: 10 }}
            >
              <Form.Label>Password</Form.Label>
              <Form.Control
                type="password"
                value={password}
                placeholder="Password"
                onChange={(e) => setPassword(e.target.value)}
              />
            </Form.Group>

            <Form.Group
              controlId="confirmPassword"
              style={{ marginBottom: 20 }}
            >
              <Form.Label>Confirm Password</Form.Label>
              <Form.Control
                type="password"
                value={confirmpassword}
                placeholder="Confirm Password"
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
            </Form.Group>

            <Button variant="primary" type="submit">
              Register
            </Button>
          </Form>
        </div>
      </div>
    </div>
  );
};

export default AdminRegister;
