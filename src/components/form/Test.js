import React, { useState } from "react";
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import './Info.css';
const Test = () => {
  const [ setSelectedImage] = useState(null);

  return (
    
    <div>
      <h1>Hello world</h1>
      <hr/>
    <Form>
      <fieldset className="mb-3 mt-2">
        <Form.Group as={Row} className="mb-3 mt-5">
          <Form.Label  column sm={2}>
            Platforme cible :
          </Form.Label>
          <Col sm={10}>
            <Form.Check
              type="radio"
              label="Mobile"
              name="mobile"
              id="formHorizontalRadios1"
            />
            <Form.Check
              type="radio"
              label="Web"
              name="web"
              id="formHorizontalRadios2"
            />
            <Form.Check
              type="radio"
              label="Desktop"
              name="desk"
              id="formHorizontalRadios3"
            />
          </Col>
        </Form.Group>
        <Form.Group as={Row} className="mb-3 mt-5">
          <Form.Label  column sm={2}>
            Upload Image
          </Form.Label>
          <Col sm={10}>
            <input
            type="file"
            name="myImage"
            onChange={(event) => {
              console.log(event.target.files[0]);
              setSelectedImage(event.target.files[0]);
            }}
            />
          </Col>
        </Form.Group>
        <Form.Group as={Row} className="mb-3">
          <Col sm={{ span: 10, offset: 2 }}>
            <Button type="submit">Start</Button>
          </Col>
        </Form.Group>
      </fieldset>
      </Form>
    </div>
  );
};

export default Test;