import { useState } from 'react'
import { FaEnvelope, FaCheck, FaTimes, FaDownload, FaFilter, FaReply } from 'react-icons/fa'

interface Message {
  id: string
  name: string
  email: string
  company: string
  phone: string
  subject: string
  message: string
  type: 'demo' | 'contact'
  status: 'new' | 'handled' | 'replied'
  createdAt: string
  assignedTo?: string
}

const Messages = () => {
  const [messages] = useState<Message[]>([
    {
      id: '1',
      name: 'John Doe',
      email: 'john@techcorp.com',
      company: 'Tech Corp Inc.',
      phone: '+1-555-0123',
      subject: 'Demo Request for CRM System',
      message: 'We are interested in scheduling a demo for your CRM system. Our team of 50+ employees needs a comprehensive solution.',
      type: 'demo',
      status: 'new',
      createdAt: '2024-11-06T10:30:00',
      assignedTo: undefined,
    },
    {
      id: '2',
      name: 'Jane Smith',
      email: 'jane@startup.io',
      company: 'Startup Solutions',
      phone: '+1-555-0124',
      subject: 'Pricing Information',
      message: 'Could you provide detailed pricing information for the Enterprise plan? We are a growing startup with 25 employees.',
      type: 'contact',
      status: 'handled',
      createdAt: '2024-11-05T14:20:00',
      assignedTo: 'Sarah',
    },
    {
      id: '3',
      name: 'Mike Johnson',
      email: 'mike@manufacturing.com',
      company: 'ABC Manufacturing',
      phone: '+1-555-0125',
      subject: 'ERP Solution Demo',
      message: 'We are looking for an integrated ERP solution for our manufacturing business. Would love to see a demo.',
      type: 'demo',
      status: 'new',
      createdAt: '2024-11-06T09:15:00',
      assignedTo: undefined,
    },
  ])

  const [selectedMessage, setSelectedMessage] = useState<Message | null>(null)
  const [filterType, setFilterType] = useState<'all' | 'demo' | 'contact'>('all')
  const [filterStatus, setFilterStatus] = useState<'all' | 'new' | 'handled' | 'replied'>('all')

  const filteredMessages = messages.filter(msg => {
    const matchesType = filterType === 'all' || msg.type === filterType
    const matchesStatus = filterStatus === 'all' || msg.status === filterStatus
    return matchesType && matchesStatus
  })

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'new': return 'bg-amber-100 text-amber-700'
      case 'handled': return 'bg-green-100 text-green-700'
      case 'replied': return 'bg-blue-100 text-blue-700'
      default: return 'bg-gray-100 text-gray-700'
    }
  }

  const getTypeColor = (type: string) => {
    return type === 'demo' ? 'bg-purple-100 text-purple-700' : 'bg-blue-100 text-blue-700'
  }

  const formatDate = (dateString: string) => {
    const date = new Date(dateString)
    return date.toLocaleString('en-US', { 
      month: 'short', 
      day: 'numeric', 
      hour: '2-digit', 
      minute: '2-digit' 
    })
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Messages & Requests</h1>
          <p className="text-gray-600 mt-1">Manage demo requests and contact messages</p>
        </div>
        <button className="flex items-center space-x-2 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors">
          <FaDownload />
          <span>Export CSV</span>
        </button>
      </div>

      {/* Filters */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
        <div className="flex items-center space-x-4">
          <FaFilter className="text-gray-400" />
          <div className="flex items-center space-x-2">
            <span className="text-sm font-medium text-gray-700">Type:</span>
            <select
              value={filterType}
              onChange={(e) => setFilterType(e.target.value as any)}
              className="px-3 py-1.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent text-sm"
            >
              <option value="all">All</option>
              <option value="demo">Demo Requests</option>
              <option value="contact">Contact Messages</option>
            </select>
          </div>
          <div className="flex items-center space-x-2">
            <span className="text-sm font-medium text-gray-700">Status:</span>
            <select
              value={filterStatus}
              onChange={(e) => setFilterStatus(e.target.value as any)}
              className="px-3 py-1.5 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent text-sm"
            >
              <option value="all">All</option>
              <option value="new">New</option>
              <option value="handled">Handled</option>
              <option value="replied">Replied</option>
            </select>
          </div>
        </div>
      </div>

      {/* Messages List & Detail View */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Messages List */}
        <div className="lg:col-span-1 bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
          <div className="p-4 border-b border-gray-200">
            <h2 className="font-semibold text-gray-900">Inbox ({filteredMessages.length})</h2>
          </div>
          <div className="divide-y divide-gray-200 max-h-[600px] overflow-y-auto">
            {filteredMessages.map((msg) => (
              <div
                key={msg.id}
                onClick={() => setSelectedMessage(msg)}
                className={`p-4 cursor-pointer hover:bg-gray-50 transition-colors ${
                  selectedMessage?.id === msg.id ? 'bg-amber-50 border-l-4 border-amber-600' : ''
                }`}
              >
                <div className="flex items-start justify-between mb-2">
                  <h3 className="font-semibold text-gray-900 text-sm">{msg.name}</h3>
                  {msg.status === 'new' && (
                    <span className="w-2 h-2 bg-amber-600 rounded-full"></span>
                  )}
                </div>
                <p className="text-xs text-gray-600 mb-1">{msg.email}</p>
                <p className="text-sm text-gray-700 mb-2 line-clamp-2">{msg.subject}</p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2">
                    <span className={`px-2 py-0.5 rounded text-xs font-medium ${getTypeColor(msg.type)}`}>
                      {msg.type === 'demo' ? 'Demo' : 'Contact'}
                    </span>
                    <span className={`px-2 py-0.5 rounded text-xs font-medium ${getStatusColor(msg.status)}`}>
                      {msg.status}
                    </span>
                  </div>
                  <span className="text-xs text-gray-500">{formatDate(msg.createdAt)}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Message Detail */}
        <div className="lg:col-span-2 bg-white rounded-xl shadow-sm border border-gray-200">
          {selectedMessage ? (
            <div className="h-full flex flex-col">
              <div className="p-6 border-b border-gray-200">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h2 className="text-2xl font-bold text-gray-900 mb-2">{selectedMessage.subject}</h2>
                    <div className="flex items-center space-x-3">
                      <span className={`px-3 py-1 rounded-full text-sm font-medium ${getTypeColor(selectedMessage.type)}`}>
                        {selectedMessage.type === 'demo' ? 'Demo Request' : 'Contact Message'}
                      </span>
                      <span className={`px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(selectedMessage.status)}`}>
                        {selectedMessage.status}
                      </span>
                    </div>
                  </div>
                  <button className="p-2 text-gray-400 hover:text-gray-600">
                    <FaTimes />
                  </button>
                </div>

                {/* Contact Info */}
                <div className="bg-gray-50 rounded-lg p-4 space-y-2">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <p className="text-xs text-gray-500 mb-1">Name</p>
                      <p className="font-medium text-gray-900">{selectedMessage.name}</p>
                    </div>
                    <div>
                      <p className="text-xs text-gray-500 mb-1">Company</p>
                      <p className="font-medium text-gray-900">{selectedMessage.company}</p>
                    </div>
                    <div>
                      <p className="text-xs text-gray-500 mb-1">Email</p>
                      <a href={`mailto:${selectedMessage.email}`} className="font-medium text-amber-600 hover:text-amber-700">
                        {selectedMessage.email}
                      </a>
                    </div>
                    <div>
                      <p className="text-xs text-gray-500 mb-1">Phone</p>
                      <a href={`tel:${selectedMessage.phone}`} className="font-medium text-amber-600 hover:text-amber-700">
                        {selectedMessage.phone}
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Message Body */}
              <div className="flex-1 p-6 overflow-y-auto">
                <h3 className="text-sm font-semibold text-gray-700 mb-2">Message</h3>
                <p className="text-gray-700 leading-relaxed">{selectedMessage.message}</p>

                <div className="mt-6 pt-6 border-t border-gray-200">
                  <p className="text-xs text-gray-500">
                    Received: {formatDate(selectedMessage.createdAt)}
                  </p>
                  {selectedMessage.assignedTo && (
                    <p className="text-xs text-gray-500 mt-1">
                      Assigned to: {selectedMessage.assignedTo}
                    </p>
                  )}
                </div>
              </div>

              {/* Actions */}
              <div className="p-6 border-t border-gray-200 flex items-center space-x-3">
                <button className="flex-1 flex items-center justify-center space-x-2 px-4 py-2 bg-gradient-to-r from-amber-500 to-amber-600 text-white rounded-lg hover:from-amber-600 hover:to-amber-700 transition-all shadow-md hover:shadow-lg">
                  <FaReply />
                  <span>Reply via Email</span>
                </button>
                <button className="flex items-center space-x-2 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors shadow-md hover:shadow-lg">
                  <FaCheck />
                  <span>Mark Handled</span>
                </button>
                <button className="p-2 text-gray-600 hover:text-gray-800 hover:bg-gray-100 border border-gray-300 rounded-lg transition-colors">
                  <FaDownload />
                </button>
              </div>
            </div>
          ) : (
            <div className="h-[600px] flex items-center justify-center text-gray-400">
              <div className="text-center">
                <FaEnvelope className="text-6xl mx-auto mb-4" />
                <p className="text-lg">Select a message to view details</p>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default Messages
