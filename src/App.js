import { Line, Pie } from 'react-chartjs-2';
import 'chart.js/auto';
import { motion } from 'framer-motion';
import { Users, TrendingUp, FilePlus, Sun, Moon } from 'lucide-react';
import { useState } from 'react';

function App() {
  const [darkMode, setDarkMode] = useState(false);

  const lineData = {
    labels: ['Jul 1', 'Jul 5', 'Jul 10', 'Jul 15'],
    datasets: [
      {
        label: 'Followers',
        data: [100, 150, 200, 250],
        borderColor: darkMode ? '#22d3ee' : '#3b82f6',
        backgroundColor: darkMode ? 'rgba(34, 211, 238, 0.3)' : 'rgba(59, 130, 246, 0.3)',
        tension: 0.4,
      },
    ],
  };

  const pieData = {
    labels: ['Likes', 'Comments', 'Shares'],
    datasets: [
      {
        data: [300, 50, 100],
        backgroundColor: ['#8b5cf6', '#facc15', '#10b981'],
        hoverOffset: 4,
      },
    ],
  };

  return (
    <div className={`${darkMode ? 'bg-gray-900 text-white' : 'bg-gradient-to-r from-blue-50 to-purple-100'} min-h-screen p-8 transition-colors duration-500`}>
      <div className="max-w-5xl mx-auto">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-4xl font-bold">🚀 Premium Social Media Dashboard</h1>
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="p-2 bg-white/40 backdrop-blur-lg rounded-full shadow hover:scale-110 transition"
          >
            {darkMode ? <Sun className="w-6 h-6 text-yellow-400" /> : <Moon className="w-6 h-6 text-purple-600" />}
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="bg-white/40 backdrop-blur-lg p-6 rounded-xl shadow hover:shadow-xl transition"
          >
            <div className="flex items-center gap-2 mb-2 text-xl font-semibold">
              <Users className="w-6 h-6 text-blue-600" /> Total Followers
            </div>
            <p className="text-3xl font-bold text-blue-600">2,450</p>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="bg-white/40 backdrop-blur-lg p-6 rounded-xl shadow hover:shadow-xl transition"
          >
            <div className="flex items-center gap-2 mb-2 text-xl font-semibold">
              <TrendingUp className="w-6 h-6 text-green-600" /> Engagement Rate
            </div>
            <p className="text-3xl font-bold text-green-600">5.4%</p>
          </motion.div>
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="bg-white/40 backdrop-blur-lg p-6 rounded-xl shadow hover:shadow-xl transition"
          >
            <div className="flex items-center gap-2 mb-2 text-xl font-semibold">
              <FilePlus className="w-6 h-6 text-purple-600" /> New Posts
            </div>
            <p className="text-3xl font-bold text-purple-600">18</p>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="bg-white/50 backdrop-blur-lg p-6 rounded-xl shadow hover:shadow-xl transition mb-8"
        >
          <h2 className="text-xl font-semibold mb-4">Followers Growth</h2>
          <Line data={lineData} />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="bg-white/50 backdrop-blur-lg p-6 rounded-xl shadow hover:shadow-xl transition"
        >
          <h2 className="text-xl font-semibold mb-4">Engagement Breakdown</h2>
          <Pie data={pieData} />
        </motion.div>
      </div>
    </div>
  );
}

export default App;
