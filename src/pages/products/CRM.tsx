import ProductDetail from '../../components/products/ProductDetail.tsx'

const CRM = () => {
  const product = {
    title: 'CRM System',
    tagline: 'Transform Your Customer Relationships',
    description: 'Our comprehensive CRM solution helps you manage customer interactions, track sales pipelines, and boost revenue. Built for businesses of all sizes.',
    icon: '📊',
    features: [
      {
        title: 'Contact Management',
        description: 'Store and organize all customer information in one centralized database',
      },
      {
        title: 'Sales Pipeline',
        description: 'Track deals from lead to close with visual pipeline management',
      },
      {
        title: 'Email Integration',
        description: 'Sync emails and track communications directly from your inbox',
      },
      {
        title: 'Analytics & Reports',
        description: 'Get insights with customizable dashboards and detailed reports',
      },
      {
        title: 'Task Automation',
        description: 'Automate repetitive tasks and follow-ups to save time',
      },
      {
        title: 'Mobile Access',
        description: 'Access your CRM data anywhere with our mobile apps',
      },
    ],
    benefits: [
      'Increase sales by 30% on average',
      'Improve customer satisfaction scores',
      'Reduce administrative work by 40%',
      'Better team collaboration',
    ],
  }

  return <ProductDetail product={product} />
}

export default CRM
