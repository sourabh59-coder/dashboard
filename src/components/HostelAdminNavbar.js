import React from 'react';
import { FaUser, FaHome, FaUsers, FaBed, FaClipboardList, FaFileInvoice, FaEnvelope, FaBell, FaBars } from 'react-icons/fa';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link } from 'react-router-dom';
function HostelAdminNavbar() {
  // Function to handle sidebar opening action
  const openSidebar = () => {
    // Implement your sidebar opening logic here
  };

  return (
    <Navbar expand="lg" className="bg-primary" variant="dark" style={{ padding: '8px' }}>
      <Container fluid>
        <Navbar.Brand href="#"><FaBars size={24} onClick={openSidebar} /></Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '50px', fontSize: '16px' }}
            navbarScroll
          >
            <Nav.Link href="/"><FaHome size={24} /> Home</Nav.Link>
            <NavDropdown title={<div><FaUsers size={24} /> Visitors</div>} id="visitors-dropdown">
              <Link to = "/visitors-per-day"><NavDropdown.Item href="/visitors-per-day">Number of visitors per day</NavDropdown.Item></Link>
              <NavDropdown.Item href="/visitors-per-country">Number of visitors per country</NavDropdown.Item>
              <NavDropdown.Item href="/visitors-by-age">Number of visitors of different age group</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="/rooms"><FaBed size={24} /> Rooms</Nav.Link>
            <Nav.Link href="/bookings"><FaClipboardList size={24} /> Bookings</Nav.Link>
            <Nav.Link href="/invoices"><FaFileInvoice size={24} /> Invoices</Nav.Link>
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-light">Search</Button>
          </Form>
          <Nav>
            <div className="d-flex align-items-center">
              <Nav.Link href="/messages">
                <FaEnvelope size={20} />
              </Nav.Link>
              <Nav.Link href="/notifications">
                <FaBell size={20} />
              </Nav.Link>
              <NavDropdown
                title={
                  <div className="d-flex align-items-center">
                    <FaUser size={20} className="me-2" />
                    <span>Sourabh</span>
                  </div>
                }
                id="profile-dropdown"
              >
                <NavDropdown.Item>Account Settings</NavDropdown.Item>
                <NavDropdown.Item>Update Account</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item>Logout</NavDropdown.Item>
              </NavDropdown>
            </div>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default HostelAdminNavbar;
