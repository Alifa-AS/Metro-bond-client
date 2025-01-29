import React from 'react';
import { Button, Drawer, Sidebar, TextInput } from "flowbite-react";
import { useState } from "react";
import {
  HiChartPie,
  HiClipboard,
  HiCollection,
  HiHeart,
  HiHome,
  HiInformationCircle,
  HiLogin,
  HiPencil,
  HiSearch,
  HiUsers,
  HiViewBoards,
} from "react-icons/hi";

const DashBoard = () => {
  const [isOpen, setIsOpen] = useState(true);

  const handleClose = () => setIsOpen(false);

  return (
    <>
      <div className="flex min-h-[50vh] items-start justify-start">
        <Button onClick={() => setIsOpen(true)}>
            =
        </Button>
      </div>
      <Drawer open={isOpen} onClose={handleClose}>
        <Drawer.Header title="MENU" titleIcon={() => <></>} />
        <Drawer.Items>
          <Sidebar
            aria-label="Sidebar with multi-level dropdown example"
            className="[&>div]:bg-transparent [&>div]:p-0"
          >
            <div className="flex h-full flex-col justify-between py-2">
              <div>
                <form className="pb-3 md:hidden">
                  <TextInput icon={HiSearch} type="search" placeholder="Search" required size={32} />
                </form>
                <Sidebar.Items>
                  <Sidebar.ItemGroup>
                    <Sidebar.Item href="/" icon={HiHome}>
                      Home
                    </Sidebar.Item>
                    <Sidebar.Item href="editBio" icon={HiPencil}>
                      Edit Bio_data
                    </Sidebar.Item>
                    <Sidebar.Item href="/e-commerce/products" icon={HiChartPie}>
                      My Contact Request
                    </Sidebar.Item>
                    <Sidebar.Item href="/users/list" icon={HiClipboard}>
                      View Bio data
                    </Sidebar.Item>
                    <Sidebar.Item href="/users/list" icon={HiHeart}>
                      Favorites Biodata
                    </Sidebar.Item>
                    <Sidebar.Item href="/users/list" icon={HiUsers}>
                      Create Success Story
                    </Sidebar.Item>
                    </Sidebar.ItemGroup>
                  <Sidebar.ItemGroup>
                    <Sidebar.Item href="/authentication/sign-in" icon={HiLogin}>
                     LogOut
                    </Sidebar.Item>
                    <Sidebar.Item href="/authentication/sign-up" icon={HiPencil}>
                      Register
                    </Sidebar.Item>
                  
                    <Sidebar.Item href="https://github.com/themesberg/flowbite-react/" >
                      Docs
                    </Sidebar.Item>
                    <Sidebar.Item href="https://flowbite-react.com/" icon={HiCollection}>
                      Components
                    </Sidebar.Item>
                    <Sidebar.Item href="https://github.com/themesberg/flowbite-react/issues" icon={HiInformationCircle}>
                      Help
                    </Sidebar.Item>
                  </Sidebar.ItemGroup>
                </Sidebar.Items>
              </div>
            </div>
          </Sidebar>
        </Drawer.Items>
      </Drawer>
    </>
  );
}

export default DashBoard;