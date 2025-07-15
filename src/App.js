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
        borderColor: darkMode ? '#f472b6' : '#6366f1',
        backgroundColor: darkMode ? 'rgba(244, 114, 182, 0.2)' : 'rgba(99, 102, 241, 0.2)',
        tension: 0.5,
      },
    ],
  };

  const pieData = {
    labels: ['Likes', 'Comments', 'Shares'],
    datasets: [
      {
        data: [300, 50, 100],
        backgroundColor: ['#8b5cf6', '#facc15', '#10b981'],
        hoverOffset: 6,
      },
    ],
  };

  return (
    <div className={`${darkMode ? 'bg-gradient-to-br from-gray-900 to-black' : 'bg-gradient-to-br from-pink-50 to-blue-100'} min-h-screen p-10 transition-colors duration-700`}>
      <div className="max-w-6xl mx-auto font-sans">
        <div className="flex justify-between items-center mb-12">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="text-4xl font-extrabold tracking-tight"
          >
            ✨ Ultra Premium Dashboard
          </motion.h1>
          <motion.button
            onClick={() => setDarkMode(!darkMode)}
            whileTap={{ scale: 0.9 }}
            className="p-3 bg-white/30 backdrop-blur-lg rounded-full shadow-xl hover:scale-110 transition"
          >
            {darkMode ? <Sun className="w-6 h-6 text-yellow-400" /> : <Moon className="w-6 h-6 text-purple-600" />}
          </motion.button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          <motion.div whileHover={{ scale: 1.04 }} className="bg-white/20 backdrop-blur-xl p-8 rounded-3xl shadow-2xl transition">
            <div className="flex items-center gap-3 mb-3 text-lg font-semibold">
              <Users className="w-6 h-6 text-blue-600" /> Total Followers
            </div>
            <p className="text-4xl font-bold text-blue-600">2,450</p>
          </motion.div>
          <motion.div whileHover={{ scale: 1.04 }} className="bg-white/20 backdrop-blur-xl p-8 rounded-3xl shadow-2xl transition">
            <div className="flex items-center gap-3 mb-3 text-lg font-semibold">
              <TrendingUp className="w-6 h-6 text-green-500" /> Engagement Rate
            </div>
            <p className="text-4xl font-bold text-green-500">5.4%</p>
          </motion.div>
          <motion.div whileHover={{ scale: 1.04 }} className="bg-white/20 backdrop-blur-xl p-8 rounded-3xl shadow-2xl transition">
            <div className="flex items-center gap-3 mb-3 text-lg font-semibold">
              <FilePlus className="w-6 h-6 text-purple-600" /> New Posts
            </div>
            <p className="text-4xl font-bold text-purple-600">18</p>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="bg-white/20 backdrop-blur-xl p-8 rounded-3xl shadow-2xl mb-10"
        >
          <h2 className="text-2xl font-semibold mb-5">Followers Growth</h2>
          <Line data={lineData} />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2 }}
          className="bg-white/20 backdrop-blur-xl p-8 rounded-3xl shadow-2xl"
        >
          <h2 className="text-2xl font-semibold mb-5">Engagement Breakdown</h2>
          <Pie data={pieData} />
        </motion.div>
      </div>
    </div>
  );
}

export default App;
