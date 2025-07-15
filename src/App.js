import React, { useState } from "react";
import { motion } from "framer-motion";
import {
  Home,
  BarChart2,
  Settings,
  Moon,
  Sun,
  User
} from "lucide-react";

export default function App() {
  const [darkMode, setDarkMode] = useState(true);

  return (
    <div className={`${darkMode ? "bg-gray-900 text-white" : "bg-white text-gray-900"} min-h-screen flex`}>
      {/* Sidebar */}
      <div className={`w-64 p-6 space-y-6 ${darkMode ? "bg-gray-800" : "bg-gray-100"} shadow-xl`}>
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

      {/* Main content */}
      <div className="flex-1 p-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <GlassCard title="Users" value="1,024" />
        <GlassCard title="Revenue" value="$12,340" />
        <GlassCard title="Orders" value="320" />
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
