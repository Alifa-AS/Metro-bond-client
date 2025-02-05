import React from "react";
import { Button, Drawer, Sidebar, TextInput } from "flowbite-react";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import {
  HiChartPie,
  HiClipboardList,
  HiCollection,
  HiHeart,
  HiHome,
  HiInformationCircle,
  HiLogout,
  HiMenu,
  HiPencil,
  HiSearch,
  HiUsers,
} from "react-icons/hi";

const DashBoard = () => {
  const [isOpen, setIsOpen] = useState(true);

  const handleClose = () => setIsOpen(false);

  return (
    <>
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
                <Sidebar.ItemGroup>
                  <Sidebar.Item
                    as={NavLink}
                    to="/logout"
                    icon={HiLogout}
                    className={({ isActive }) =>
                      isActive
                        ? "hover:bg-red-100 text-red-700"
                        : "hover:bg-red-100 text-red-600"
                    }
                  >
                    LogOut
                  </Sidebar.Item>
                  
                  <Sidebar.Item
                    as={NavLink}
                    to="https://flowbite-react.com/"
                    icon={HiCollection}
                    className={({ isActive }) =>
                      isActive
                        ? "hover:bg-gray-100 text-gray-600"
                        : "hover:bg-gray-100"
                    }
                  >
                    Components
                  </Sidebar.Item>
                  <Sidebar.Item
                    as={NavLink}
                    to="https://github.com/flowbite-react/issues"
                    icon={HiInformationCircle}
                    className={({ isActive }) =>
                      isActive
                        ? "hover:bg-gray-100 text-gray-600"
                        : "hover:bg-gray-100"
                    }
                  >
                    Help
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
