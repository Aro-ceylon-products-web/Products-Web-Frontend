import { FaBox, FaEnvelope, FaStar, FaUsers, FaChartLine, FaArrowUp, FaArrowDown } from 'react-icons/fa'
import { useTheme } from '../../contexts/ThemeContext'

const Dashboard = () => {
  const { isDarkMode } = useTheme()
  const stats = [
    {
      title: 'Total Products',
      value: '12',
      change: '+2',
      trend: 'up',
      icon: FaBox,
      color: 'from-blue-500 to-blue-600',
    },
    {
      title: 'Demo Requests',
      value: '48',
      change: '+12',
      trend: 'up',
      icon: FaEnvelope,
      color: 'from-amber-500 to-amber-600',
    },
    {
      title: 'Feedback Count',
      value: '156',
      change: '+8',
      trend: 'up',
      icon: FaStar,
      color: 'from-purple-500 to-purple-600',
    },
    {
      title: 'Active Visitors',
      value: '2,543',
      change: '-5%',
      trend: 'down',
      icon: FaUsers,
      color: 'from-green-500 to-green-600',
    },
  ]

  const recentMessages = [
    { id: 1, name: 'John Doe', email: 'john@company.com', subject: 'Demo Request for CRM', time: '2 mins ago', type: 'demo', unread: true },
    { id: 2, name: 'Jane Smith', email: 'jane@business.com', subject: 'Pricing inquiry', time: '15 mins ago', type: 'contact', unread: true },
    { id: 3, name: 'Mike Johnson', email: 'mike@startup.io', subject: 'ERP Solution questions', time: '1 hour ago', type: 'demo', unread: false },
    { id: 4, name: 'Sarah Williams', email: 'sarah@enterprise.com', subject: 'Enterprise plan details', time: '3 hours ago', type: 'contact', unread: false },
  ]

  const recentActivities = [
    { id: 1, action: 'New product added', detail: 'AI-Powered Analytics', time: '30 mins ago', icon: FaBox },
    { id: 2, action: 'Feedback published', detail: 'Tech Solutions Inc.', time: '1 hour ago', icon: FaStar },
    { id: 3, action: 'Pricing updated', detail: 'Professional Plan', time: '2 hours ago', icon: FaChartLine },
    { id: 4, action: 'Content updated', detail: 'Homepage hero section', time: '5 hours ago', icon: FaEnvelope },
  ]

  return (
    <div className="space-y-6">
      {/* KPI Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <div key={index} className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 hover:shadow-md transition-shadow">
            <div className="flex items-center justify-between mb-4">
              <div className={`p-3 rounded-lg bg-gradient-to-br ${stat.color} shadow-md`}>
                <stat.icon className="text-2xl text-white" />
              </div>
              <div className={`flex items-center text-sm font-medium ${
                stat.trend === 'up' ? 'text-green-600' : 'text-red-600'
              }`}>
                {stat.trend === 'up' ? <FaArrowUp className="mr-1" /> : <FaArrowDown className="mr-1" />}
                {stat.change}
              </div>
            </div>
            <h3 className="text-gray-600 text-sm font-medium mb-1">{stat.title}</h3>
            <p className="text-3xl font-bold text-gray-900">{stat.value}</p>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Recent Messages */}
        <div className="lg:col-span-2 bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-bold text-gray-900">Recent Messages</h2>
            <button className="text-amber-600 hover:text-amber-700 text-sm font-medium transition-colors">
              View All
            </button>
          </div>
          <div className="space-y-4">
            {recentMessages.map((message) => (
              <div
                key={message.id}
                className={`p-4 rounded-lg border ${
                  message.unread 
                    ? 'bg-amber-50 border-amber-200' 
                    : 'bg-gray-50 border-gray-200'
                } hover:shadow-sm transition-shadow cursor-pointer`}
              >
                <div className="flex items-start justify-between mb-2">
                  <div className="flex-1">
                    <div className="flex items-center space-x-2">
                      <h3 className="font-semibold text-gray-900">{message.name}</h3>
                      {message.unread && (
                        <span className="px-2 py-0.5 bg-amber-600 text-white text-xs rounded-full">
                          New
                        </span>
                      )}
                    </div>
                    <p className="text-sm text-gray-600">{message.email}</p>
                  </div>
                  <span className="text-xs text-gray-500">{message.time}</span>
                </div>
                <p className="text-sm text-gray-700">{message.subject}</p>
                <span className={`inline-block mt-2 px-2 py-1 text-xs rounded ${
                  message.type === 'demo' 
                    ? 'bg-blue-100 text-blue-700' 
                    : 'bg-green-100 text-green-700'
                }`}>
                  {message.type === 'demo' ? 'Demo Request' : 'Contact'}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Recent Activity */}
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <h2 className="text-xl font-bold text-gray-900 mb-6">Recent Activity</h2>
          <div className="space-y-4">
            {recentActivities.map((activity) => (
              <div key={activity.id} className="flex items-start space-x-3">
                <div className="p-2 bg-amber-50 rounded-lg border border-amber-100">
                  <activity.icon className="text-amber-600" />
                </div>
                <div className="flex-1">
                  <h3 className="text-sm font-semibold text-gray-900">{activity.action}</h3>
                  <p className="text-sm text-gray-600">{activity.detail}</p>
                  <span className="text-xs text-gray-500">{activity.time}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Chart Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <h2 className="text-xl font-bold text-gray-900 mb-6">Monthly Signups</h2>
          <div className="h-64 flex items-end justify-between space-x-2">
            {[45, 52, 38, 65, 48, 72, 58, 85, 67, 78, 92, 105].map((height, index) => (
              <div key={index} className="flex-1 flex flex-col items-center">
                <div
                  className="w-full bg-gradient-to-t from-amber-500 to-amber-400 rounded-t-lg hover:from-amber-600 hover:to-amber-500 transition-all cursor-pointer shadow-sm"
                  style={{ height: `${(height / 105) * 100}%` }}
                  title={`${height} signups`}
                />
                <span className="text-xs text-gray-500 mt-2">
                  {['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'][index]}
                </span>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
          <h2 className="text-xl font-bold text-gray-900 mb-6">Traffic Overview</h2>
          <div className="space-y-4">
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-medium text-gray-700">Total Visits</span>
                <span className="text-lg font-bold text-gray-900">15,842</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div className="bg-gradient-to-r from-blue-500 to-blue-600 h-2 rounded-full" style={{ width: '75%' }} />
              </div>
            </div>
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-medium text-gray-700">Page Views</span>
                <span className="text-lg font-bold text-gray-900">48,256</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div className="bg-gradient-to-r from-purple-500 to-purple-600 h-2 rounded-full" style={{ width: '90%' }} />
              </div>
            </div>
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-medium text-gray-700">Bounce Rate</span>
                <span className="text-lg font-bold text-gray-900">32%</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div className="bg-gradient-to-r from-red-500 to-red-600 h-2 rounded-full" style={{ width: '32%' }} />
              </div>
            </div>
            <div>
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-medium text-gray-700">Avg. Session</span>
                <span className="text-lg font-bold text-gray-900">4:32</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2">
                <div className="bg-gradient-to-r from-green-500 to-green-600 h-2 rounded-full" style={{ width: '68%' }} />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
        <h2 className="text-xl font-bold text-gray-900 mb-6">Quick Actions</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <button className="p-4 border-2 border-dashed border-gray-300 rounded-lg hover:border-amber-500 hover:bg-amber-50 transition-all">
            <FaBox className="text-2xl text-amber-600 mx-auto mb-2" />
            <span className="text-sm font-medium text-gray-700">Add Product</span>
          </button>
          <button className="p-4 border-2 border-dashed border-gray-300 rounded-lg hover:border-amber-500 hover:bg-amber-50 transition-all">
            <FaStar className="text-2xl text-amber-600 mx-auto mb-2" />
            <span className="text-sm font-medium text-gray-700">Add Feedback</span>
          </button>
          <button className="p-4 border-2 border-dashed border-gray-300 rounded-lg hover:border-amber-500 hover:bg-amber-50 transition-all">
            <FaEnvelope className="text-2xl text-amber-600 mx-auto mb-2" />
            <span className="text-sm font-medium text-gray-700">View Messages</span>
          </button>
          <button className="p-4 border-2 border-dashed border-gray-300 rounded-lg hover:border-amber-500 hover:bg-amber-50 transition-all">
            <FaChartLine className="text-2xl text-amber-600 mx-auto mb-2" />
            <span className="text-sm font-medium text-gray-700">View Reports</span>
          </button>
        </div>
      </div>
    </div>
  )
}

export default Dashboard
