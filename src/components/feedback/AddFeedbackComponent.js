import React, { Component } from "react";
import { Button, Col, Label, Row } from "reactstrap";
import { Control, Errors, Form } from "react-redux-form";

import { baseUrl } from "../../shared/baseUrl";
import "./FeedbackComponent.scss";

const minLength = len => val => val && val.length >= len;
const required = val => val && val.length;
const validEmail = val => /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(val);
const validPhone = val => /^\(?(\d{3})\)?[- ]?(\d{3})[- ]?(\d{4})$/.test(val);

class AddFeedback extends Component {
  constructor(props) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(values) {
    const values_string = JSON.stringify(values);
    alert(JSON.stringify(values_string));
  }

  render() {
    return (
      <div className="feedbk-tabbed-container container">
        <Form model="feedback" onSubmit={values => this.handleSubmit(values)}>
          <Row>
            <Col className="col-12 col-sm-6">
              <Control.text
                model=".name"
                id="name"
                className="form-control feedbk-input-text"
                name="name"
                placeholder="Name"
                validators={{
                  required
                }}
              />
              <Errors
                className="text-danger feedbk-errors"
                model=".name"
                show="touched"
                messages={{
                  required: "Name is required!"
                }}
              />
            </Col>

            <Col className="col-12 col-sm-6" id="feedbk-checkbox-div">
              <Label id="feedbk-checkbox-label">
                <Control.checkbox
                  model=".okToContact"
                  className="form-check-input"
                  id="feedbk-checkbox"
                />
                OK to contact you?
              </Label>
            </Col>
          </Row>

          <Row>
            <Col className="col-12 col-sm-6">
              <Control.text
                model=".email"
                id="email"
                name="email"
                className="form-control feedbk-input-text"
                placeholder="Email Address"
                validators={{
                  required,
                  validEmail
                }}
              />
              <Errors
                className="text-danger feedbk-errors"
                model=".email"
                show="touched"
                messages={{
                  required: "Email address is Required! ",
                  validEmail: "Invalid email address."
                }}
              />
            </Col>

            <Col className="col-12 col-sm-3">
              <Control.text
                model=".phone"
                id="feedbk-phone"
                name="phone"
                className="form-control feedbk-input-text"
                placeholder="Phone Number"
                validators={{
                  required,
                  validPhone
                }}
              />
              <Errors
                className="text-danger feedbk-errors"
                model=".phone"
                show="touched"
                messages={{
                  required: "Phone number is required! ",
                  validPhone: "Invalid phone number."
                }}
              />
            </Col>
          </Row>

          <Row>
            <Col className="col-12">
              <Control.textarea
                model=".message"
                className="form-control"
                id="message"
                name="message"
                rows="8"
                placeholder="Your Feedback Here"
                validators={{
                  required,
                  minLength: minLength(2)
                }}
              />
              <Errors
                className="text-danger feedbk-errors"
                model=".message"
                show="touched"
                messages={{
                  required: "Message content is required! ",
                  minLength: "Did you forget to complete your message?"
                }}
              />
            </Col>
          </Row>

          <Row>
            <Col>
              <Button id="feedbk-done-btn" type="submit">
                Done
              </Button>
            </Col>
          </Row>
        </Form>
      </div>
    );
  }
}

export default AddFeedback;
