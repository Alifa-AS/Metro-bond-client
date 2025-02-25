import React from "react";
import { Button, Drawer, Sidebar, TextInput } from "flowbite-react";
import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import {
  HiChartPie,
  HiClipboardList,
  HiHeart,
  HiHome,
  HiInformationCircle,
  HiLogout,
  HiMenu,
  HiPencil,
  HiSearch,
  HiUsers,
} from "react-icons/hi";
import { Helmet } from "react-helmet-async";
import useAuth from "../../../hooks/useAuth";
import { FaCrown } from "react-icons/fa";
import { TiContacts } from "react-icons/ti";
import { MdAddCall, MdDashboardCustomize } from "react-icons/md";
import { toast } from "react-toastify";
import useAdmin from "../../../hooks/useAdmin";

const DashBoard = () => {
  const [isOpen, setIsOpen] = useState(true);
  const handleClose = () => setIsOpen(false);

  const navigate = useNavigate();

  const { logOut } = useAuth();
  const handleLogOut = () => {
    logOut()
      .then(() => {
        Swal.fire({
          title: "Successfully LogOut!",
          icon: "success",
          draggable: true,
        });
        navigate("/");
      })
      .catch((error) => {
        toast.error(error.message, error);
      });
  };

  // get isAdmin value from the database
  const [isAdmin] = useAdmin();

  return (
    <>
      <Helmet>
        <title>Metro || DashBoard </title>
      </Helmet>

      <div className="flex items-center p-4 bg-pink-50 text-white shadow-md">
        <Button
          onClick={() => setIsOpen(true)}
          className="text-xl bg-pink-400 hover:bg-pink-800"
        >
          <HiMenu className="w-6 h-6" />
        </Button>
        <h1 className="ml-4 text-xl font-semibold text-pink-500">Dashboard</h1>
      </div>

      <Drawer
        open={isOpen}
        onClose={handleClose}
        className="bg-white shadow-2xl transition-all duration-300 ease-in-out"
      >
        <Drawer.Header title="DASHBOARD" className="text-pink-800 font-bold" />
        <Drawer.Items>
          <Sidebar
            aria-label="Sidebar"
            className="bg-pink-50 rounded-lg shadow-md"
          >
            <div className="p-4">
              <form className="pb-3">
                <TextInput
                  icon={HiSearch}
                  type="search"
                  placeholder="Search"
                  required
                  className="w-full p-2 border rounded-lg focus:ring focus:ring-pink-300"
                />
              </form>
              
              <Sidebar.Items>
                {isAdmin ? (
                  <>
                    <Sidebar.ItemGroup>
                    <Sidebar.Item
                        as={NavLink}
                        to="/"
                        icon={HiHome}
                        className={({ isActive }) =>
                          isActive
                            ? "hover:bg-pink-100 text-pink-600"
                            : "hover:bg-pink-100"
                        }
                      >
                        Home
                      </Sidebar.Item>

                      <Sidebar.Item
                        as={NavLink}
                        to="/dashboard/adminDashboard"
                        icon={MdDashboardCustomize}
                        className={({ isActive }) =>
                          isActive
                            ? "hover:bg-pink-100 text-pink-600"
                            : "hover:bg-pink-100"
                        }
                      >
                        Admin Dashboard
                      </Sidebar.Item>
                      <Sidebar.Item
                        as={NavLink}
                        to="/dashboard/users"
                        icon={HiPencil}
                        className={({ isActive }) =>
                          isActive
                            ? "hover:bg-pink-100 text-pink-600"
                            : "hover:bg-pink-100"
                        }
                      >
                        Manage Users
                      </Sidebar.Item>

                      <Sidebar.Item
                        as={NavLink}
                        to="/dashboard/approvePremium"
                        icon={FaCrown}
                        className={({ isActive }) =>
                          isActive
                            ? "hover:bg-pink-100 text-pink-600"
                            : "hover:bg-pink-100"
                        }
                      >
                        Approved Premium
                      </Sidebar.Item>
                      <Sidebar.Item
                        as={NavLink}
                        to="/dashboard/approvedContact"
                        icon={MdAddCall}
                        className={({ isActive }) =>
                          isActive
                            ? "hover:bg-pink-100 text-pink-600"
                            : "hover:bg-pink-100"
                        }
                      >
                        Approved Contact Request
                      </Sidebar.Item>
                    </Sidebar.ItemGroup>
                  </>
                ) : (
                  <>
                    <Sidebar.ItemGroup>
                      <Sidebar.Item
                        as={NavLink}
                        to="/"
                        icon={HiHome}
                        className={({ isActive }) =>
                          isActive
                            ? "hover:bg-pink-100 text-pink-600"
                            : "hover:bg-pink-100"
                        }
                      >
                        Home
                      </Sidebar.Item>
                      <Sidebar.Item
                        as={NavLink}
                        to="/dashboard/editBio"
                        icon={HiPencil}
                        className={({ isActive }) =>
                          isActive
                            ? "hover:bg-pink-100 text-pink-600"
                            : "hover:bg-pink-100"
                        }
                      >
                        Edit BioData
                      </Sidebar.Item>

                      <Sidebar.Item
                        as={NavLink}
                        to="/dashboard/viewBio"
                        icon={HiUsers}
                        className={({ isActive }) =>
                          isActive
                            ? "hover:bg-pink-100 text-pink-600"
                            : "hover:bg-pink-100"
                        }
                      >
                        View Bio data
                      </Sidebar.Item>
                      <Sidebar.Item
                        as={NavLink}
                        to="/dashboard/contact-request"
                        icon={HiChartPie}
                        className={({ isActive }) =>
                          isActive
                            ? "hover:bg-pink-100 text-pink-600"
                            : "hover:bg-pink-100"
                        }
                      >
                        My Contact Request
                      </Sidebar.Item>
                      <Sidebar.Item
                        as={NavLink}
                        to="/dashboard/favoriteBio"
                        icon={HiHeart}
                        className={({ isActive }) =>
                          isActive
                            ? "hover:bg-pink-100 text-pink-600"
                            : "hover:bg-pink-100"
                        }
                      >
                        Favorites BioData
                      </Sidebar.Item>
                      <Sidebar.Item
                        as={NavLink}
                        to="/dashboard/createStory"
                        icon={HiClipboardList}
                        className={({ isActive }) =>
                          isActive
                            ? "hover:bg-pink-100 text-pink-600"
                            : "hover:bg-pink-100"
                        }
                      >
                        Create Success Story
                      </Sidebar.Item>
                    </Sidebar.ItemGroup>
                  </>
                )}
                {/* shared  nav links*/}
                <Sidebar.ItemGroup>
                  <Sidebar.Item
                    onClick={handleLogOut}
                    icon={HiLogout}
                    className={({ isActive }) =>
                      isActive
                        ? "flex justify-between hover:bg-red-100 text-red-700"
                        : "flex justify-between hover:bg-red-100 text-red-600"
                    }
                  >
                    LogOut
                  </Sidebar.Item>

                  <Sidebar.Item
                    as={NavLink}
                    to="/aboutUs"
                    icon={HiInformationCircle}                  
                    className={({ isActive }) =>
                      isActive
                        ? "hover:bg-gray-100 text-gray-600"
                        : "hover:bg-gray-100"
                    }
                  >
                    About Us
                  </Sidebar.Item>
                  <Sidebar.Item
                    as={NavLink}
                    to="/contactUs"
                    icon={TiContacts}
                    className={({ isActive }) =>
                      isActive
                        ? "hover:bg-gray-100 text-gray-600"
                        : "hover:bg-gray-100"
                    }
                  >
                   Contact Us
                  </Sidebar.Item>
                </Sidebar.ItemGroup>
              </Sidebar.Items>
            </div>
          </Sidebar>
        </Drawer.Items>
      </Drawer>
    </>
  );
};

export default DashBoard;
