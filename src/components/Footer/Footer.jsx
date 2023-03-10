import React from "react";
import "./footer.css";
import { HashLink } from 'react-router-hash-link';

import { Container, Row, Col, ListGroup, ListGroupItem } from "reactstrap";
import { Link } from "react-router-dom";

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer className="footer">
      <Container>
        <Row>
          <Col lg="4" className="mb-4" md="6">
            <div className="logo">
              <div>
                <h1>Furnicraze</h1>
              </div>
            </div>
            <p className="footer__text mt-4">
              Come join the Furniture craze down at furnicraze; where best-in-class products meet can't-be-beat prices.
            </p>
          </Col>

          <Col lg="3" md="3" className="mb-4">
            <div className="footer__quick-links">
              <h4 className="quick__links-title">Top Categories</h4>
              <ListGroup>
                <ListGroupItem className="ps-0 border-0">
                <HashLink smooth to="/home/#trending__products">Trending</HashLink>
                </ListGroupItem>

                <ListGroupItem className="ps-0 border-0">
                <HashLink smooth to="/home/#best__sales">Best Sales</HashLink>
                </ListGroupItem>

                <ListGroupItem className="ps-0 border-0">
                <HashLink smooth to="/home/#new__arrivals">New Arrivals</HashLink>
                </ListGroupItem>

                <ListGroupItem className="ps-0 border-0">
                <HashLink smooth to="/home/#popular__category">Popular</HashLink>
                </ListGroupItem>
              </ListGroup>
            </div>
          </Col>

          <Col lg="2" md="3" className="mb-4">
            <div className="footer__quick-links">
              <h4 className="quick__links-title">Useful Links</h4>
              <ListGroup>
                <ListGroupItem className="ps-0 border-0">
                  <Link to="/shop">Shop</Link>
                </ListGroupItem>

                <ListGroupItem className="ps-0 border-0">
                  <Link to="/cart">Cart</Link>
                </ListGroupItem>

                <ListGroupItem className="ps-0 border-0">
                  <Link to="/login">Login</Link>
                </ListGroupItem>

                <ListGroupItem className="ps-0 border-0">
                  <Link to="/home">Home</Link>
                </ListGroupItem>
              </ListGroup>
            </div>
          </Col>

          <Col lg="3" md="4">
            <div className="footer__quick-links">
              <h4 className="quick__links-title">Contact</h4>
              <ListGroup className="footer__contact">
                <ListGroupItem className="ps-0 border-0 d-flex align-items-center gap-2">
                  <span>
                    <i class="ri-map-pin-line"></i>
                  </span>
                  <p>Boston, MA</p>
                </ListGroupItem>

                <ListGroupItem className="ps-0 border-0 d-flex align-items-center gap-2">
                  <span>
                    <i class="ri-phone-line"></i>
                  </span>
                  <p>860-123-4567</p>
                </ListGroupItem>

                <ListGroupItem className="ps-0 border-0 d-flex align-items-center gap-2">
                  <span>
                    <i class="ri-mail-line"></i>
                  </span>
                  <p>peterwchusid@gmail.com
                    milesechavez@gmail.com
                  </p>
                </ListGroupItem>

                <ListGroupItem className="Scrolltotop">
                <HashLink smooth to="#top">Scroll To Top</HashLink>
                </ListGroupItem>
              </ListGroup>
            </div>
          </Col>

          <Col lg="12">
            <p className="footer__copyright">
              Copyright {year} developed by Peter Chusid & Miles Echavez. All rights reserved.
            </p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
