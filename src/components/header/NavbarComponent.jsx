import React from "react";
import { Navbar } from 'flowbite-react';

export default function NavbarComponent() {
  return (
    <Navbar fluid rounded className="bg-gradient-to-r from-indigo-500">
      <Navbar.Brand   href="https://flowbite-react.com">
        <img
          src="/src/assets/react.svg"
          className="h-6 mr-3 sm:h-9"
          alt="Flowbite React Logo"
        />
        <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">
          Flowbite React
        </span>
      </Navbar.Brand>
      <Navbar.Toggle />
      <Navbar.Collapse>
        <Navbar.Link href="#" active>
          Home
        </Navbar.Link>
        <Navbar.Link  href="#">
          About
        </Navbar.Link>
        <Navbar.Link href="#">Services</Navbar.Link>
        <Navbar.Link href="#">Pricing</Navbar.Link>
        <Navbar.Link href="#">Contact</Navbar.Link>
      </Navbar.Collapse>
    </Navbar>
  );
}
