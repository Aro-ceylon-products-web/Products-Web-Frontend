import { useState } from 'react'
import { FaPlus, FaEdit, FaTrash, FaEye, FaEyeSlash, FaSearch } from 'react-icons/fa'

interface Product {
  id: string
  title: string
  description: string
  icon: string
  category: string
  status: 'draft' | 'live' | 'hidden'
  requiresAssessment: boolean
  createdAt: string
}

const Products = () => {
  const [products, setProducts] = useState<Product[]>([
    {
      id: '1',
      title: 'CRM System',
      description: 'Manage customer relationships and grow your sales',
      icon: '📊',
      category: 'Sales Tools',
      status: 'live',
      requiresAssessment: false,
      createdAt: '2024-01-15',
    },
    {
      id: '2',
      title: 'HR Management',
      description: 'Streamline HR processes and empower your team',
      icon: '👥',
      category: 'HR Tools',
      status: 'live',
      requiresAssessment: true,
      createdAt: '2024-01-20',
    },
    {
      id: '3',
      title: 'ERP Solution',
      description: 'Integrate all your business operations',
      icon: '🏢',
      category: 'Enterprise Solutions',
      status: 'live',
      requiresAssessment: true,
      createdAt: '2024-02-01',
    },
    {
      id: '4',
      title: 'POS System',
      description: 'Modern point-of-sale for retail success',
      icon: '💳',
      category: 'Retail Tools',
      status: 'live',
      requiresAssessment: false,
      createdAt: '2024-02-10',
    },
  ])

  const [searchTerm, setSearchTerm] = useState('')
  const [filterStatus, setFilterStatus] = useState<'all' | 'live' | 'draft' | 'hidden'>('all')
  const [showAddModal, setShowAddModal] = useState(false)

  const filteredProducts = products.filter(product => {
    const matchesSearch = product.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         product.description.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesStatus = filterStatus === 'all' || product.status === filterStatus
    return matchesSearch && matchesStatus
  })

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'live': return 'bg-green-100 text-green-700'
      case 'draft': return 'bg-yellow-100 text-yellow-700'
      case 'hidden': return 'bg-gray-100 text-gray-700'
      default: return 'bg-gray-100 text-gray-700'
    }
  }

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Product Management</h1>
          <p className="text-gray-600 mt-1">Manage your products and solutions</p>
        </div>
        <button
          onClick={() => setShowAddModal(true)}
          className="flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-amber-500 to-amber-600 text-white rounded-lg hover:from-amber-600 hover:to-amber-700 transition-all"
        >
          <FaPlus />
          <span>Add Product</span>
        </button>
      </div>

      {/* Filters */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
        <div className="flex flex-col md:flex-row md:items-center md:justify-between space-y-4 md:space-y-0">
          {/* Search */}
          <div className="relative flex-1 max-w-md">
            <FaSearch className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Search products..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
            />
          </div>

          {/* Status Filter */}
          <div className="flex items-center space-x-2">
            <span className="text-sm font-medium text-gray-700">Status:</span>
            <select
              value={filterStatus}
              onChange={(e) => setFilterStatus(e.target.value as any)}
              className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
            >
              <option value="all">All</option>
              <option value="live">Live</option>
              <option value="draft">Draft</option>
              <option value="hidden">Hidden</option>
            </select>
          </div>
        </div>
      </div>

      {/* Products Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredProducts.map((product) => (
          <div key={product.id} className="bg-white rounded-xl shadow-sm border border-gray-200 hover:shadow-md transition-shadow overflow-hidden">
            <div className="p-6">
              {/* Icon & Status */}
              <div className="flex items-start justify-between mb-4">
                <div className="text-5xl">{product.icon}</div>
                <span className={`px-3 py-1 rounded-full text-xs font-medium ${getStatusColor(product.status)}`}>
                  {product.status}
                </span>
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold text-gray-900 mb-2">{product.title}</h3>
              <p className="text-gray-600 text-sm mb-3 line-clamp-2">{product.description}</p>
              
              {/* Category */}
              <span className="inline-block px-2 py-1 bg-blue-100 text-blue-700 rounded text-xs font-medium mb-3">
                {product.category}
              </span>

              {/* Assessment Badge */}
              {product.requiresAssessment && (
                <div className="mb-3">
                  <span className="inline-block px-2 py-1 bg-purple-100 text-purple-700 rounded text-xs font-medium">
                    Requires Assessment
                  </span>
                </div>
              )}

              {/* Meta */}
              <p className="text-xs text-gray-500 mb-4">Created: {product.createdAt}</p>

              {/* Actions */}
              <div className="flex items-center space-x-2">
                <button className="flex-1 flex items-center justify-center space-x-2 px-3 py-2 bg-amber-50 text-amber-700 rounded-lg hover:bg-amber-100 transition-colors">
                  <FaEdit />
                  <span className="text-sm font-medium">Edit</span>
                </button>
                <button className="p-2 text-gray-600 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors">
                  {product.status === 'hidden' ? <FaEyeSlash /> : <FaEye />}
                </button>
                <button className="p-2 text-gray-600 hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors">
                  <FaTrash />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Empty State */}
      {filteredProducts.length === 0 && (
        <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-12 text-center">
          <div className="text-6xl mb-4">📦</div>
          <h3 className="text-xl font-bold text-gray-900 mb-2">No products found</h3>
          <p className="text-gray-600 mb-6">Try adjusting your search or filters</p>
          <button
            onClick={() => {
              setSearchTerm('')
              setFilterStatus('all')
            }}
            className="px-6 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors"
          >
            Clear Filters
          </button>
        </div>
      )}

      {/* Add Product Modal Placeholder */}
      {showAddModal && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-xl shadow-2xl border border-gray-200 max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6 border-b border-gray-200">
              <h2 className="text-2xl font-bold text-gray-900">Add New Product</h2>
            </div>
            <div className="p-6">
              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Product Title</label>
                  <input
                    type="text"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                    placeholder="Enter product title"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Description</label>
                  <textarea
                    rows={3}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                    placeholder="Enter product description"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Icon (Emoji)</label>
                  <input
                    type="text"
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent"
                    placeholder="📊"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Category</label>
                  <select className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-amber-500 focus:border-transparent">
                    <option>Sales Tools</option>
                    <option>HR Tools</option>
                    <option>Enterprise Solutions</option>
                    <option>Retail Tools</option>
                  </select>
                </div>
                <div>
                  <label className="flex items-center space-x-2">
                    <input type="checkbox" className="rounded text-amber-600 focus:ring-amber-500" />
                    <span className="text-sm font-medium text-gray-700">Requires Business Assessment</span>
                  </label>
                </div>
              </div>
            </div>
            <div className="p-6 border-t border-gray-200 flex items-center justify-end space-x-3">
              <button
                onClick={() => setShowAddModal(false)}
                className="px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-lg transition-colors"
              >
                Cancel
              </button>
              <button className="px-4 py-2 bg-gradient-to-r from-amber-500 to-amber-600 text-white rounded-lg hover:from-amber-600 hover:to-amber-700 transition-all shadow-md hover:shadow-lg">
                Add Product
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default Products
