import React, { useState } from "react";
import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";
import { motion } from "framer-motion";
import { Home, BarChart2, Settings, Moon, Sun, User } from "lucide-react";

const data = [
  { name: "Users", value: 400 },
  { name: "Revenue", value: 300 },
  { name: "Orders", value: 300 },
  { name: "Others", value: 200 },
];
const COLORS = ["#4f46e5", "#06b6d4", "#f59e0b", "#ef4444"];

export default function App() {
  const [darkMode, setDarkMode] = useState(true);

  return (
    <div className={`${darkMode ? "bg-gray-900 text-white" : "bg-gray-50 text-gray-900"} min-h-screen flex relative`}>
      {/* Animated Gradient Background */}
      <motion.div
        className="absolute inset-0 z-0"
        style={{
          background: "radial-gradient(circle at 30% 30%, rgba(79,70,229,0.4), transparent 60%)",
        }}
        animate={{ scale: [1, 1.2, 1] }}
        transition={{ duration: 10, repeat: Infinity }}
      />
      <motion.div
        className="absolute inset-0 z-0"
        style={{
          background: "radial-gradient(circle at 70% 70%, rgba(6,182,212,0.4), transparent 60%)",
        }}
        animate={{ scale: [1, 1.3, 1] }}
        transition={{ duration: 12, repeat: Infinity }}
      />

      {/* Sidebar */}
      <div className={`relative z-10 w-64 p-6 space-y-6 ${darkMode ? "bg-gray-800/80" : "bg-white/70"} backdrop-blur-xl rounded-r-3xl shadow-xl`}>
        <div className="text-3xl font-bold tracking-wider">Vyoma</div>
        <nav className="space-y-4">
          <NavItem icon={<Home />} label="Home" />
          <NavItem icon={<BarChart2 />} label="Analytics" />
          <NavItem icon={<User />} label="Profile" />
          <NavItem icon={<Settings />} label="Settings" />
        </nav>
        <button
          onClick={() => setDarkMode(!darkMode)}
          className="flex items-center space-x-2 mt-8 bg-indigo-600 text-white px-4 py-2 rounded-full hover:bg-indigo-500 transition"
        >
          {darkMode ? <Sun /> : <Moon />}
          <span>Toggle Mode</span>
        </button>
      </div>

      {/* Main Content */}
      <div className="relative z-10 flex-1 p-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <GlassCard title="Users" value="1,024" />
        <GlassCard title="Revenue" value="$12,340" />
        <GlassCard title="Orders" value="320" />

        <motion.div
          className="col-span-1 md:col-span-2 lg:col-span-3 backdrop-blur-xl bg-white/10 p-8 rounded-2xl shadow-lg border border-white/20"
          whileHover={{ scale: 1.02 }}
        >
          <h2 className="text-2xl font-semibold mb-4">Traffic Analysis</h2>
          <div className="h-64">
            <ResponsiveContainer>
              <PieChart>
                <Pie
                  data={data}
                  cx="50%"
                  cy="50%"
                  innerRadius={60}
                  outerRadius={100}
                  fill="#8884d8"
                  dataKey="value"
                  label
                >
                  {data.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                  ))}
                </Pie>
              </PieChart>
            </ResponsiveContainer>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

function NavItem({ icon, label }) {
  return (
    <div className="flex items-center space-x-3 hover:text-indigo-400 transition cursor-pointer">
      {icon}
      <span className="text-lg">{label}</span>
    </div>
  );
}

function GlassCard({ title, value }) {
  return (
    <motion.div
      className="backdrop-blur-xl bg-white/10 p-6 rounded-2xl shadow-lg border border-white/20"
      whileHover={{ scale: 1.05 }}
    >
      <div className="text-xl font-semibold">{title}</div>
      <div className="text-3xl font-bold mt-2">{value}</div>
    </motion.div>
  );
}
