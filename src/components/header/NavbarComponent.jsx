import React, { useState } from "react";
import { Navbar } from "flowbite-react";
import { Link } from "react-router-dom";
export default function NavbarComponent() {
  const [navbarList, setNavbarList] = useState([
    {
      title: "Home",
      url: "/",
      active: true,
    },
    {
      title: "About",
      url: "/about",
      active: false,
    },
    {
      title: "Services",
      url: "/service",
      active: false,
    },
    {
      title: "Contact",
      url: "/contact",
      active: false,
    },
  ]);

  const handleClick = (item) => {
    setNavbarList((preValuse) => {
      // set new value and keep old value
      return preValuse.map((value) => {
        if (value.title === item.title) {
          return {
            ...value,
            active: true,
          };
        } else {
          return {
            ...value,
            active: false,
          };
        }
      });
    });
  };

  return (
    <Navbar fluid rounded className="bg-gradient-to-r from-indigo-500">
      <Navbar.Brand href="https://flowbite-react.com">
        <img
          src="/src/assets/react.svg"
          className="h-6 mr-3 sm:h-9"
          alt="Flowbite React Logo"
        />
        <span className="self-center text-xl font-semibold whitespace-nowrap dark:text-white">
          Flowbite React
        </span>
        z
      </Navbar.Brand>
      <Navbar.Toggle />
      <Navbar.Collapse>
        {navbarList.map((item, index) => {
          return (
            <Navbar.Link
              onClick={() => {
                handleClick(item);
              }}
              key={index}
              as={Link}
              to={item.url}
              active={item.active}
            >
              {item.title}
            </Navbar.Link>
          );
        })}
      </Navbar.Collapse>
    </Navbar>
  );
}
