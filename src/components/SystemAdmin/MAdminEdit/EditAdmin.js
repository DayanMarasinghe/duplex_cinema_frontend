
import React, { useState, useEffect } from "react";
import axios from "axios";
import {  useParams, useNavigate } from "react-router-dom";
import { Form, Button } from "react-bootstrap";
import Header from "../Header/Header";

const EditAdmin = () => {
  let navigate = useNavigate();
  const { id } = useParams();
  const [user, setUser] = useState({
    full_name: "",
    address: "",
    nic: "",
    
  });

  const { full_name, address, nic} = user;
  const onInputChange = e => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    loadUser();
  }, []);

  const onSubmit = async e => {
    e.preventDefault();
    await axios.put(`http://localhost:4000/api/users/${id}`, user);
    navigate("/movieadmins");
  };

  const loadUser = async () => {
    const result = await axios.get(`http://localhost:4000/api/users/${id}`);
    setUser(result.data);
  };
  return (
    <div>
    <Header>/</Header>
    <div className="container" style={{ width: 600 }}>
      <div className="loginContainer">
        <h4>Movie Admin Registration</h4>
        <Form onSubmit={e => onSubmit(e)}>
          <Form.Group
            controlId="name"
            style={{ marginBottom: 10, marginTop: 20 }}
          >
            <Form.Label>Name</Form.Label>x``
            <Form.Control
              type="name"
              name = "full_name"
              value={full_name}
              placeholder="Enter name"
              onChange={(e) => onInputChange(e)}
            />
          </Form.Group>

          <Form.Group controlId="address" style={{ marginBottom: 10 }}>
            <Form.Label>Address</Form.Label>
            <Form.Control
              type="text"
              name = "address"
              value={address}
              placeholder="Enter address"
              onChange={(e) => onInputChange(e)}
            />
          </Form.Group>

          <Form.Group controlId="nic" style={{ marginBottom: 10 }}>
            <Form.Label>NIC</Form.Label>
            <Form.Control
              type="text"
              name = "nic"
              value={nic}
              placeholder="Enter NIC"
              onChange={(e) => onInputChange(e)}
            />
          </Form.Group>

          <Button variant="primary" type="submit">
            Save
          </Button>
        </Form>
      </div>
    </div>
  </div>
  );
};

export default EditAdmin;

