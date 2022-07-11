import React, { Component } from 'react'
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import './Info.css';

export class InfoProjet extends Component {
  render() {
    return (
    <Form>
      <fieldset>
        <Form.Group as={Row} className="mb-3 mt-5">
          <Form.Label  column sm={2}>
            Platforme cible :
          </Form.Label>
          <Col sm={10}>
            <Form.Check
              type="radio"
              label="Mobile"
              name="formHorizontalRadios"
              id="formHorizontalRadios1"
            />
            
            <Form.Check
              type="radio"
              label="Web"
              name="formHorizontalRadios"
              id="formHorizontalRadios2"
            />
            <Form.Check
              type="radio"
              label="Desktop"
              name="formHorizontalRadios"
              id="formHorizontalRadios1"
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
    )
  }
}

{/* <h1>Upload and Display Image usign React Hook's</h1>
{selectedImage && (
  <div>
  <img alt="not fount" width={"250px"} src={URL.createObjectURL(selectedImage)} />
  <br />
  <button onClick={()=>setSelectedImage(null)}>Remove</button>
  </div>
)}
<br />

<br /> 
<input
  type="file"
  name="myImage"
  onChange={(event) => {
    console.log(event.target.files[0]);
    setSelectedImage(event.target.files[0]);
  }}
/> */}

export default InfoProjet