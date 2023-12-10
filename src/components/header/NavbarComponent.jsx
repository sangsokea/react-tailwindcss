import React, { useState } from "react";
import { Navbar } from "flowbite-react";
import { Link } from "react-router-dom";
import { CartIcon } from "../common/icons/Icons";
import { useSelector } from "react-redux";
import { Avatar } from "flowbite-react";
import { selectAvatar } from "../../redux/features/user/userSlice";
export default function NavbarComponent() {
  const avatar = useSelector(selectAvatar);

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

  const items = useSelector((state) => state.cart.total);
  const state = useSelector((state) => state.cart);

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
        {/* Cart Icon */}
        <Navbar.Link as={Link} to="/cart-items">
          <div className="relative">
            <CartIcon className="h-8 w-8" />
            <span className="absolute -top-2 -right-2 bg-red-500 rounded-full text-white text-xs px-1">
              {items}
            </span>
          </div>
        </Navbar.Link>

        {/* create user button */}
        <Navbar.Link as={Link} to="/create-user">
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          create User
          </button>
        </Navbar.Link>

        {/* create user button */}
        <Navbar.Link as={Link} to="/login">
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Login
          </button>
        </Navbar.Link>
        {/* avatar */}
        <div className="flex flex-wrap gap-2">
          <Avatar img={avatar} rounded bordered />
        </div>
      </Navbar.Collapse>
    </Navbar>
  );
}
