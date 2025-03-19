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
import useAuth from "../../../../hooks/useAuth";
import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../../hooks/UseAxiosSecure";

const AdminDashboard = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();

  const { data: stats = {} } = useQuery({
    queryKey: ["admin-stats"],
    queryFn: async () => {
      const res = await axiosSecure.get("/admin-stats");
      return res.data;
    },
  });

  // Use fallback values (300) if data is not available
  const data = {
    totalBiodata: stats?.biodatas || 300,
    maleBiodata: stats?.maleCount || 300,
    femaleBiodata: stats?.femaleCount || 300,
    premiumBiodata: stats?.premiumPay || 300,
    totalRevenue: stats?.revenue || 2500,
  };

  // Pie Chart Data
  const pieChartData = [
    { name: "Total Biodata", value: data.totalBiodata },
    { name: "Male Biodata", value: data.maleBiodata },
    { name: "Female Biodata", value: data.femaleBiodata },
    { name: "Premium Biodata", value: data.premiumBiodata },
    { name: "Total Revenue", value: data.totalRevenue / 100 },
  ];

  // Colors & Icons
  const COLORS = ["#6366F1", "#31a7a1", "#F59E0B", "#6688ed", "#EC4899"];
  const cardColors = ["#5856d6", "#3399ff", "#f9b115", "#e55353", "#44dbd1"];
  const icons = [FaUsers, FaMale, FaFemale, FaStar, FaMoneyBillWave];
  const titles = [
    "Total Biodata",
    "Male Biodata",
    "Female Biodata",
    "Premium Biodata",
    "Total Revenue",
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 to-pink-100 p-8 text-white">
      <h2 className="text-3xl font-bold text-center mb-8 text-pink-700">
        Admin Dashboard
      </h2>
      <div className="text-indigo-500 px-3 font-semibold py-5 text-lg">
        <span> Hi, Welcome </span>
        {user?.displayName || "Admin"}
      </div>

      {/* Cards Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-6 mb-10">
        {titles.map((title, index) => {
          const Icon = icons[index];

          let value = 0;
          if (title === "Total Biodata") value = data.totalBiodata;
          if (title === "Male Biodata") value = data.maleBiodata;
          if (title === "Female Biodata") value = data.femaleBiodata;
          if (title === "Premium Biodata") value = data.premiumBiodata;
          if (title === "Total Revenue") value = `৳${data.totalRevenue}`;

          return (
            <Card
              key={index}
              className="p-8 border-2 border-gray-200 shadow-xl rounded-lg text-white"
              style={{ backgroundColor: cardColors[index] }}
            >
              <div className="flex items-center space-x-4">
                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-md">
                  <Icon className="text-3xl text-blue-800" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold">{title}</h3>
                  <p className="text-3xl font-bold mt-1">{value}</p>
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
          <Tooltip contentStyle={{ backgroundColor: "#1E293B", color: "#fff" }} />
          <Legend wrapperStyle={{ color: "#fff" }} />
        </PieChart>
      </div>
    </div>
  );
};

export default AdminDashboard;
