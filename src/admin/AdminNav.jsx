import React, { useRef } from "react";
import { Container, Row } from "reactstrap";
import { motion } from "framer-motion";
import useAuth from "../custom-hooks/useAuth";
import "../styles/admin-nav.css";

import { NavLink  } from "react-router-dom";


const admin__nav = [
  {
    display: "Dashboard",
    path: "/dashboard",
  },
  {
    display: "Products",
    path: "/dashboard/all-products",
  },

  {
    display: "Add Products",
    path: "/dashboard/add-product",
  },
  {
    display: "Orders",
    path: "/dashboard/orders",
  },
  {
    display: "Users",
    path: "/dashboard/users",
  },
];

const AdminNav = () => {
  const { currentUser } = useAuth();
  const menuRef = useRef(null);
  const menuToggle = () => menuRef.current.classList.toggle("active__menu");
  return (
    <>
      <header className="admin__header">
        <div className="admin__nav-top">
          <Container>
            <div className="admin__nav-wrapper-top">
              <div className="logo">
                <h2><NavLink to='home'>Furnicraze</NavLink></h2>
              </div>
            </div>
          </Container>
        </div>
      </header>
      <div className="mobile__menu">
                <span onClick={menuToggle}>
                  <i class="ri-menu-line"></i>
                </span>
              </div>
      <div className="navigation" ref={menuRef} onClick={menuToggle}>
              <motion.ul className="nav__menu">
                {admin__nav.map((item, index) => (
                  <li className="nav__item" key={index}>
                    <NavLink
                      to={item.path}
                      className={navClass =>
                        navClass.isActive ? "nav__active" : ""
                      }
                    >
                      {item.display}
                    </NavLink>
                  </li>
                ))}
              </motion.ul>
              
            </div>
      <section className="admin__menu p-0">
        <Container>
          <Row>
            <div className="admin__navigation">
              <ul className="admin__menu-list">
                {admin__nav.map((item, index) => (
                  <li className="admin__menu-item" key={index}>
                    <NavLink
                      to={item.path}
                      className={navClass =>
                        navClass.isActive ? "admin__menu-active" : ""
                      }
                    >
                      {item.display}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </div>
          </Row>
        </Container>
        
      </section>
    </>
  );
};

export default AdminNav;
