import { Line } from 'react-chartjs-2';
import 'chart.js/auto';

function App() {
  // Chart data
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
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold mb-8 text-center">📊 Social Media Dashboard</h1>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <div className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition">
            <h2 className="text-xl font-semibold mb-2">Total Followers</h2>
            <p className="text-3xl font-bold text-blue-600">2,450</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition">
            <h2 className="text-xl font-semibold mb-2">Engagement Rate</h2>
            <p className="text-3xl font-bold text-green-600">5.4%</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition">
            <h2 className="text-xl font-semibold mb-2">New Posts</h2>
            <p className="text-3xl font-bold text-purple-600">18</p>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition">
          <h2 className="text-xl font-semibold mb-4">Followers Growth</h2>
          <Line data={data} />
        </div>
      </div>
    </div>
  );
}

export default App;
