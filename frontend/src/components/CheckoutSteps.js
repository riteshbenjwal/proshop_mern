import React from "react";
import { Nav } from "react-bootstrap";
import {Link} from 'react-router-dom'

const CheckoutSteps = ({ step1, step2, step3, step4 }) => {
  return (
    <Nav className="justify-content-center mb-4">
      <Nav.Item>
        {
          // if step1 is true, then show the link
          step1 ? (
            <Nav.Link as={Link} to="/login">
              Sign In
            </Nav.Link>
          ) : (
            // else show the text
            <Nav.Link disabled>Sign In</Nav.Link>
          )
        }
      </Nav.Item>
      <Nav.Item>
        {
          // if step1 is true, then show the link
          step2 ? (
            <Nav.Link as={Link} to="/shipping">
              Shipping
            </Nav.Link>
          ) : (
            // else show the text
            <Nav.Link disable>Shipping</Nav.Link>
          )
        }
      </Nav.Item>
      <Nav.Item>
        {
          // if step1 is true, then show the link
          step3 ? (
            <Nav.Link as={Link} to="/payment">
              Payment
            </Nav.Link>
          ) : (
            // else show the text
            <Nav.Link disabled>Payment</Nav.Link>
          )
        }
      </Nav.Item>
      <Nav.Item>
        {
          // if step1 is true, then show the link
          step4 ? (
            <Nav.Link as={Link} to="/placeorder">
              Place Order
            </Nav.Link>
          ) : (
            // else show the text
            <Nav.Link disabled>Place Order</Nav.Link>
          )
        }
      </Nav.Item>
    </Nav>
  );
};

export default CheckoutSteps;
