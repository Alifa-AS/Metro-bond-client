import React, { useContext } from "react";
import { Avatar, Dropdown, Navbar as FlowbiteNavbar } from "flowbite-react";
import logo from "../../../assets/logo.png";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../../../providers/AuthProvider";
import { toast } from "react-toastify";
import Swal from "sweetalert2";
import userIcon from "../../../assets/user.png";
import DataTheme from "./DataTheme";

const CustomNavbar = () => {
  const { user, logOut } = useContext(AuthContext);

  const handleLogOut = () => {
    logOut()
      .then(() => {
        Swal.fire({
          title: "Successfully LogOut!",
          icon: "success",
          draggable: true,
        });
      })
      .catch((error) => {
        toast.error(error.message, error);
      });
  };

  return (
    <div>
      {/* <FlowbiteNavbar
        fluid
        
        className="fixed z-10 bg-opacity-30 w-full bg-black text-yellow-200"
      > */}
      <FlowbiteNavbar
        fluid
        className="fixed top-0 left-0 z-50 w-full bg-opacity-30 bg-black text-yellow-200"
      >
        <FlowbiteNavbar.Brand>
          <img src={logo} className="mr-3 sm:h-9 h-9" alt="Logo" />
          <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
            M<span className="text-pink-500">etr</span>O
          </span>
        </FlowbiteNavbar.Brand>
        <div className="flex md:order-2 gap-4">
          <DataTheme />
          <Dropdown
            arrowIcon={false}
            inline
            label={
              <Avatar
                alt="User settings"
                img={user?.photoURL || userIcon}
                rounded
              />
            }
          >
            <Dropdown.Header>
              {user ? (
                <>
                  <span className="block text-sm">{user?.displayName}</span>
                  <span className="block truncate text-sm font-medium">
                    {user?.email}
                  </span>
                </>
              ) : (
                <span className="block text-sm text-gray-500">Guest</span>
              )}
            </Dropdown.Header>
            <Dropdown.Divider />
            {user ? (
              <Dropdown.Item onClick={handleLogOut}>Log Out</Dropdown.Item>
            ) : (
              <Dropdown.Item as={NavLink} to="/login">
                Login
              </Dropdown.Item>
            )}
          </Dropdown>

          <FlowbiteNavbar.Toggle />
        </div>
        <FlowbiteNavbar.Collapse>
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? "text-pink-500 font-bold" : "text-white"
            }
          >
            Home
          </NavLink>

          <NavLink
            to="/bioData"
            className={({ isActive }) =>
              isActive ? "text-pink-500 font-bold" : "text-white"
            }
          >
            Bio-Data
          </NavLink>

          <NavLink
            to="/aboutUs"
            className={({ isActive }) =>
              isActive ? "text-pink-500 font-bold" : "text-white"
            }
          >
            About Us
          </NavLink>

          <NavLink
            to="/contactUs"
            className={({ isActive }) =>
              isActive ? "text-pink-500 font-bold" : "text-white"
            }
          >
            Contact Us
          </NavLink>

          {user && (
            <NavLink
              to="/dashboard"
              className={({ isActive }) =>
                isActive ? "text-pink-500 font-bold" : "text-white"
              }
            >
              Dashboard
            </NavLink>
          )}
        </FlowbiteNavbar.Collapse>
      </FlowbiteNavbar>
    </div>
  );
};

export default CustomNavbar;
