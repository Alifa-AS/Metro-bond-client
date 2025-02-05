import React from "react";
import { Footer as FlowbiteFooter } from "flowbite-react";
import { BsFacebook, BsGithub, BsInstagram, BsTwitter } from "react-icons/bs";
import logo from '../../../assets/logo.png'


const CustomFooter = () => {
  return (
    <FlowbiteFooter container className="bg-pink-50 text-gray-700 py-10">
      <div className="w-full max-w-7xl mx-auto px-6">
        {/* Top Section */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {/* Logo & Short Description */}
          <div>
            <FlowbiteFooter.Brand
              src={logo}
              alt="Logo"
              name="METRO"
              className="w-20 h-20"
            />
            <p className="mt-3 text-sm text-gray-600">
              Connecting hearts with trust and reliability. Your perfect match starts here!
            </p>
          </div>

          {/* About Section */}
          <div>
            <FlowbiteFooter.Title title="About" className="text-pink-700" />
            <FlowbiteFooter.LinkGroup col className="space-y-2">
              <FlowbiteFooter.Link href="/bioData" className="hover:text-pink-500">
                BioData
              </FlowbiteFooter.Link>
              <FlowbiteFooter.Link href="/aboutUs" className="hover:text-pink-500">
                About Us
              </FlowbiteFooter.Link>
              <FlowbiteFooter.Link href="/contactUs" className="hover:text-pink-500">
                Contact Us
              </FlowbiteFooter.Link>
            </FlowbiteFooter.LinkGroup>
          </div>

          {/* Follow Us Section */}
          <div>
            <FlowbiteFooter.Title title="Follow Us" className="text-pink-700" />
            <FlowbiteFooter.LinkGroup col className="space-y-2">
              <FlowbiteFooter.Link href="#" className="hover:text-pink-500">Github</FlowbiteFooter.Link>
              <FlowbiteFooter.Link href="#" className="hover:text-pink-500">Discord</FlowbiteFooter.Link>
              <FlowbiteFooter.Link href="#" className="hover:text-pink-500">Youtube</FlowbiteFooter.Link>
            </FlowbiteFooter.LinkGroup>
          </div>

          {/* Legal Section */}
          <div>
            <FlowbiteFooter.Title title="Legal" className="text-pink-700" />
            <FlowbiteFooter.LinkGroup col className="space-y-2">
              <FlowbiteFooter.Link href="#" className="hover:text-pink-500">Privacy Policy</FlowbiteFooter.Link>
              <FlowbiteFooter.Link href="#" className="hover:text-pink-500">Terms &amp; Conditions</FlowbiteFooter.Link>
            </FlowbiteFooter.LinkGroup>
          </div>
        </div>

        <FlowbiteFooter.Divider className="my-6 border-pink-200" />

        {/* Bottom Section */}
        <div className="flex flex-col sm:flex-row items-center justify-between">
          {/* Copyright Text */}
          <FlowbiteFooter.Copyright href="#" by="METRO™" year={2024} className="text-gray-600" />

          {/* Social Icons */}
          <div className="flex space-x-6">
            <FlowbiteFooter.Icon href="#" icon={BsFacebook} className="text-pink-500 hover:text-pink-700" />
            <FlowbiteFooter.Icon href="#" icon={BsInstagram} className="text-pink-500 hover:text-pink-700" />
            <FlowbiteFooter.Icon href="#" icon={BsTwitter} className="text-pink-500 hover:text-pink-700" />
            <FlowbiteFooter.Icon href="#" icon={BsGithub} className="text-pink-500 hover:text-pink-700" />
          </div>
        </div>
      </div>
    </FlowbiteFooter>
  );
};

export default CustomFooter;
