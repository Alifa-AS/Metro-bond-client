import React from "react";
import { Card } from "flowbite-react";
import {
  FaUsers,
  FaMale,
  FaFemale,
  FaStar,
  FaMoneyBillWave,
} from "react-icons/fa";
import { PieChart, Pie, Cell, Tooltip, Legend } from "recharts";


const AdminDashboard = () => {
  const data = {
    totalBiodata: 500,
    maleBiodata: 300,
    femaleBiodata: 200,
    premiumBiodata: 100,
    totalRevenue: 25000,
  };

  const chartData = [
    { name: "Jan", value: 100 },
    { name: "Feb", value: 200 },
    { name: "Mar", value: 150 },
    { name: "Apr", value: 300 },
    { name: "May", value: 250 },
    { name: "Jun", value: 400 },
  ];


  const pieChartData = [
    { name: "Total Biodata", value: data.totalBiodata },
    { name: "Male Biodata", value: data.maleBiodata },
    { name: "Female Biodata", value: data.femaleBiodata },
    { name: "Premium Biodata", value: data.premiumBiodata },
    { name: "Total Revenue", value: data.totalRevenue / 100 },
  ];

  const COLORS = ["#6366F1", "#10B981", "#F59E0B", "#EC4899", "#8B5CF6"];
  const cardColors = [
    "#5856d6", // Total Biodata
    "#3399ff", // Male Biodata
    "#f9b115", // Female Biodata
    "#e55353", // Premium Biodata
    "#44dbd1", // Total Revenue
  ];
  const icons = [FaUsers, FaMale, FaFemale, FaStar, FaMoneyBillWave];
  const titles = [
    "Total Biodata",
    "Male Biodata",
    "Female Biodata",
    "Premium Biodata",
    "Total Revenue",
  ];

  return (
    <>
      <div className="min-h-screen bg-gradient-to-br from-pink-50 to-pink-100 p-8 text-white">
        <h2 className="text-3xl font-bold text-center mb-8 text-pink-700">
          Admin Dashboard
        </h2>

        {/* Cards Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-6 mb-10">
          {titles.map((title, index) => {
            const Icon = icons[index];
            return (
                <Card
                key={index}
                className="p-6 border-2 border-gray-200 shadow-xl rounded-lg text-white"
                style={{ backgroundColor: cardColors[index] }} // Custom background color
              >
                <div className="flex items-center space-x-4">
                  {/* Left Side: Icon */}
                  <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-md">
                    <Icon className="text-3xl text-blue-800" />
                  </div>
              
                  {/* Right Side: Text */}
                  <div>
                    <h3 className="text-lg font-semibold">{title}</h3>
                    <p className="text-3xl font-bold mt-1">
                      {title === "Total Revenue"
                        ? `৳${data.totalRevenue}`
                        : data[title.toLowerCase().replace(" ", "")]}
                    </p>
                  </div>
                </div>
              </Card>
              
            );
          })}
        </div>

        {/* Pie Chart Section */}
        <div className="flex justify-center">
          <PieChart width={400} height={400}>
            <Pie
              data={pieChartData}
              cx="50%"
              cy="50%"
              label
              outerRadius={150}
              dataKey="value"
            >
              {pieChartData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index]} />
              ))}
            </Pie>
            <Tooltip
              contentStyle={{ backgroundColor: "#1E293B", color: "#fff" }}
            />
            <Legend wrapperStyle={{ color: "#fff" }} />
          </PieChart>
        </div>
      </div>
    </>
  );
};

export default AdminDashboard;
