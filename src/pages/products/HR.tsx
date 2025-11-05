import ProductDetail from '../../components/products/ProductDetail.tsx'

const HR = () => {
  const product = {
    title: 'HR Management System',
    tagline: 'Streamline Your Human Resources',
    description: 'Complete HR solution for managing employees, attendance, payroll, and performance. Make HR processes simple and efficient.',
    icon: '👥',
    features: [
      {
        title: 'Employee Database',
        description: 'Maintain comprehensive employee records and documents',
      },
      {
        title: 'Attendance Tracking',
        description: 'Monitor attendance, leaves, and work hours automatically',
      },
      {
        title: 'Payroll Management',
        description: 'Process payroll accurately with automated calculations',
      },
      {
        title: 'Performance Reviews',
        description: 'Conduct and track employee performance evaluations',
      },
      {
        title: 'Recruitment',
        description: 'Manage job postings, applications, and hiring workflow',
      },
      {
        title: 'Self-Service Portal',
        description: 'Empower employees with self-service access',
      },
    ],
    benefits: [
      'Reduce HR admin time by 50%',
      'Eliminate payroll errors',
      'Improve employee engagement',
      'Ensure compliance with regulations',
    ],
  }

  return <ProductDetail product={product} />
}

export default HR
