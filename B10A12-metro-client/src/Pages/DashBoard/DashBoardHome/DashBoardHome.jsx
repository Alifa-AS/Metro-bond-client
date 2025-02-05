import React from "react";
import { Card } from "flowbite-react";
import Lottie from "lottie-react";
import dashBoardLottie from "../../../assets/lottie/DashBoard2.json";
import { PieChart, Pie, Cell, Tooltip as PieTooltip, Legend } from "recharts";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip as LineTooltip,
  ResponsiveContainer,
} from "recharts";
import DashImg from "../../../assets/Cover/dashBoard2.jpg";

const data = [
  { name: "Jan", value: 400 },
  { name: "Feb", value: 300 },
  { name: "Mar", value: 500 },
  { name: "Apr", value: 700 },
];

const pieData = [
  { name: "New Matches", value: 400 },
  { name: "Messages", value: 300 },
  { name: "Profile Views", value: 300 },
  { name: "Premium Users", value: 200 },
];

const COLORS = ["#4F46E5", "#9333EA", "#F59E0B", "#EF4444"];

const DashBoardHome = () => {
  return (
    <div className="container mx-auto px-8 py-12 bg-gradient-to-r from-blue-50 via-pink-100 to-purple-100">
      {/* Header Section */}
      <div className="relative">
        <img src={DashImg} alt="Dashboard" 
        className="w-full h-80 object-cover rounded-lg shadow-lg" />
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center text-white">
          <h2 className="text-5xl font-bold">Welcome to Your Dashboard</h2>
          <p className="text-lg mt-4">Manage your profile, preferences, and more!</p>
        </div>
      </div>

      {/* Main Dashboard Content */}
      <div className="space-y-12 mt-12">
        <div className="text-center">
          <h2 className="text-3xl font-semibold text-gray-800">
            Track Your Activity & Engagement
          </h2>
          <p className="text-gray-600 mt-2">Insights into your matches, messages, and more.</p>
        </div>

        {/* Cards Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <Card className="shadow-2xl bg-gradient-to-r from-green-300 via-teal-400 to-blue-300 p-6 text-white transition-transform hover:scale-105 transform">
            <h3 className="text-2xl font-bold">$76.00</h3>
            <p className="text-gray-200 mt-2">Premium Membership</p>
          </Card>
          <Card className="shadow-2xl bg-gradient-to-r from-purple-300 via-pink-400 to-indigo-400 p-6 text-white transition-transform hover:scale-105 transform">
            <h3 className="text-2xl font-bold">245 Matches</h3>
            <p className="text-gray-200 mt-2">Recent Matches</p>
          </Card>
          <Card className="shadow-2xl bg-gradient-to-r from-yellow-200 via-red-400 to-orange-400 p-6 text-white transition-transform hover:scale-105 transform">
            <h3 className="text-2xl font-bold">53 New Messages</h3>
            <p className="text-gray-200 mt-2">Message Center</p>
            <button className="mt-4 px-6 py-2 bg-gradient-to-r from-purple-400 to-pink-500 text-white rounded-lg hover:bg-gradient-to-l">
              Check Messages
            </button>
          </Card>
        </div>

        {/* Pie Chart Section */}
        <div className="flex justify-center space-x-12 mb-12">
          <PieChart width={350} height={350}>
            <Pie
              data={pieData}
              cx="50%"
              cy="50%"
              outerRadius={120}
              fill="#8884d8"
              dataKey="value"
              label
            >
              {pieData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
            <PieTooltip />
            <Legend verticalAlign="top" height={36} />
          </PieChart>
          {/* lottie section */}
          <div className="w-96 max-w-lg mx-auto mt-6">
            <Lottie animationData={dashBoardLottie} />
          </div>
        </div>

        {/* Line Chart Section */}
        <div className="bg-gradient-to-r from-purple-300 via-indigo-400 to-pink-400 p-6 rounded-xl shadow-2xl">
          <h3 className="text-2xl font-semibold text-white text-center">
            Monthly Engagement Progress
          </h3>
          <ResponsiveContainer width="100%" height={300}>
            <LineChart data={data}>
              <XAxis dataKey="name" stroke="#fff" />
              <YAxis stroke="#fff" />
              <LineTooltip />
              <Line
                type="monotone"
                dataKey="value"
                stroke="#fff"
                strokeWidth={3}
                dot={{ r: 5 }}
                activeDot={{ r: 8 }}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default DashBoardHome;
