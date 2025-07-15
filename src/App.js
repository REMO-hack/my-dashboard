import { Line } from 'react-chartjs-2';
import 'chart.js/auto';
import { motion } from 'framer-motion';
import { Users, TrendingUp, FilePlus } from 'lucide-react';

function App() {
  const data = {
    labels: ['Jul 1', 'Jul 5', 'Jul 10', 'Jul 15'],
    datasets: [
      {
        label: 'Followers',
        data: [100, 150, 200, 250],
        borderColor: '#3b82f6',
        backgroundColor: 'rgba(59, 130, 246, 0.3)',
        tension: 0.4,
      },
    ],
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-blue-50 to-purple-100 p-8">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl font-bold mb-8 text-center">🚀 Premium Social Media Dashboard</h1>

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
          className="bg-white/50 backdrop-blur-lg p-6 rounded-xl shadow hover:shadow-xl transition"
        >
          <h2 className="text-xl font-semibold mb-4">Followers Growth</h2>
          <Line data={data} />
        </motion.div>
      </div>
    </div>
  );
}

export default App;
