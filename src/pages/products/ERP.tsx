import ProductDetail from '../../components/products/ProductDetail.tsx'

const ERP = () => {
  const product = {
    title: 'ERP Solution',
    tagline: 'Unify Your Business Operations',
    description: 'Enterprise Resource Planning system that integrates all your business processes. From finance to supply chain, manage everything in one place.',
    icon: '🏢',
    features: [
      {
        title: 'Financial Management',
        description: 'Complete accounting, budgeting, and financial reporting',
      },
      {
        title: 'Inventory Management',
        description: 'Track stock levels, orders, and warehouse operations',
      },
      {
        title: 'Supply Chain',
        description: 'Optimize your supply chain from procurement to delivery',
      },
      {
        title: 'Manufacturing',
        description: 'Plan and manage production processes efficiently',
      },
      {
        title: 'Project Management',
        description: 'Track projects, resources, and profitability',
      },
      {
        title: 'Business Intelligence',
        description: 'Real-time insights and analytics across all departments',
      },
    ],
    benefits: [
      'Increase operational efficiency by 45%',
      'Reduce costs by 20-30%',
      'Improve decision-making with real-time data',
      'Scale easily as your business grows',
    ],
  }

  return <ProductDetail product={product} />
}

export default ERP
