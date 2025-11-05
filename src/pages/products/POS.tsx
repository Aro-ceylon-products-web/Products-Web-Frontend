import ProductDetail from '../../components/products/ProductDetail.tsx'

const POS = () => {
  const product = {
    title: 'POS System',
    tagline: 'Modern Point of Sale for Modern Business',
    description: 'Fast, reliable POS system designed for retail and hospitality. Accept payments, manage inventory, and track sales in real-time.',
    icon: '💳',
    features: [
      {
        title: 'Fast Checkout',
        description: 'Process transactions quickly with intuitive interface',
      },
      {
        title: 'Payment Processing',
        description: 'Accept all payment methods including cards, mobile, and cash',
      },
      {
        title: 'Inventory Sync',
        description: 'Real-time inventory updates across all locations',
      },
      {
        title: 'Sales Reports',
        description: 'Detailed analytics on sales, products, and performance',
      },
      {
        title: 'Customer Management',
        description: 'Build customer profiles and loyalty programs',
      },
      {
        title: 'Multi-Location',
        description: 'Manage multiple stores from a single dashboard',
      },
    ],
    benefits: [
      'Reduce checkout time by 40%',
      'Eliminate stock discrepancies',
      'Increase customer satisfaction',
      'Works online and offline',
    ],
  }

  return <ProductDetail product={product} />
}

export default POS
