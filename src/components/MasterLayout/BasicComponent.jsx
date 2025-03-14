import React from "react";
import { Dropdown } from "react-bootstrap";
import { NavLink } from "react-router-dom";
import { useState, useEffect } from "react";

const BasicComponent = (props) => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 992);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 992);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary shadow fixed-top">
        <div className="container-fluid ">
          <NavLink className="navbar-brand fw-5 ms-5">Task Manager</NavLink>
          <div className="d-flex justify-content-between align-item-center">
            <Dropdown>
              <Dropdown.Toggle
                as="button"
                className="btn border-0 p-0 d-lg-none d-lg-block"
              >
                <i className="bi bi-menu-button-fill fs-5"></i>
              </Dropdown.Toggle>

              {isMobile && (
                <Dropdown.Menu className="bg-light shadow rounded-3 p-2 fs-5">
                  <Dropdown.Item as={NavLink} to="/Profile">
                    Service
                  </Dropdown.Item>
                  <Dropdown.Item as={NavLink} to="/Login">
                    Contact Us
                  </Dropdown.Item>
                  <Dropdown.Item as={NavLink} to="/Login">
                    About Us
                  </Dropdown.Item>
                </Dropdown.Menu>
              )}
            </Dropdown>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup ">
              <div className="navbar-nav me-5 gap-4 fs-5">
                <NavLink
                  className="nav-link active"
                  aria-current="page"
                  to="/service"
                >
                  Service
                </NavLink>
                <NavLink className="nav-link" to="/contact">
                  Contact Us
                </NavLink>
                <NavLink className="nav-link" to="/about">
                  About Us
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      </nav>
      <div className="content">{props.children}</div>
    </>
  );
};

export default BasicComponent;
