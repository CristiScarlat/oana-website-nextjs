import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import Link from "next/link";
import { useRouter } from "next/router";

const Header = () => {
  const router = useRouter();
  return (
    <Navbar
      bg="dark"
      variant="dark"
      expand="lg"
      fixed="top"
      className="justify-content-between ps-3 pe-3"
      style={{ fontSize: "larger" }}
    >
      <Navbar.Brand style={{ fontSize: "14px" }}>
        Phd artist Oana Bolog-Bleich
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav" style={{ flexGrow: 0 }}>
        <Nav className="mr-auto">
          <Link href="/" className="nav-item me-4 li-link">
            <a
              className={`nav-link ${
                router.pathname === "/" ? "active" : ""
              }`}
              aria-current="page"
            >
              Home
            </a>
          </Link>
          {/* <Link href="/">Home</Link> */}
          <Link href="/media" className="nav-item">
            <a
              className={`nav-link ${
                router.pathname === "/media" ? "active" : ""
              }`}
              aria-current="page"
            >
              Interviews and media
            </a>
          </Link>
          <Link href="/about">
            <a
              className={`nav-link ${
                router.pathname === "/about" ? "active" : ""
              }`}
              aria-current="page"
            >
              About me
            </a>
          </Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Header;
