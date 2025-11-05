# Products Web Frontend

A modern, responsive frontend application for selling software products like CRM, HR Management System, POS, and other business solutions.

## 🚀 Features

- **Modern React Application**: Built with React 18 and Vite for fast development
- **Product Showcase**: Display multiple software products with detailed information
- **Responsive Design**: Works seamlessly on desktop, tablet, and mobile devices
- **Product Categories**: Filter products by category (CRM, HR, POS, etc.)
- **Product Details**: Individual pages for each product with features and pricing
- **Contact Form**: Allow customers to inquire about products
- **About Page**: Company information and mission statement
- **Clean UI/UX**: Professional design with smooth animations and transitions

## 📦 Products Available

1. **CRM System** - Customer Relationship Management
2. **HR Management System** - Human Resources Management
3. **POS System** - Point of Sale Solution
4. **Inventory Management** - Supply Chain Management
5. **Accounting Software** - Financial Management
6. **Project Management Tool** - Team Collaboration

## 🛠️ Tech Stack

- **React 18** - JavaScript library for building user interfaces
- **React Router** - Client-side routing
- **Vite** - Fast build tool and development server
- **CSS3** - Modern styling with custom properties
- **ESLint** - Code quality and consistency

## 📁 Project Structure

```
Products-Web-Frontend/
├── public/                 # Static assets
├── src/
│   ├── components/        # Reusable components
│   │   ├── common/       # Common UI components
│   │   ├── layout/       # Layout components (Header, Footer)
│   │   └── products/     # Product-related components
│   ├── pages/            # Page components
│   │   ├── home/        # Home page
│   │   ├── products/    # Products listing and detail pages
│   │   ├── about/       # About page
│   │   └── contact/     # Contact page
│   ├── assets/          # Images, icons, etc.
│   ├── data/            # Product data and configuration
│   ├── styles/          # Global styles
│   ├── utils/           # Utility functions
│   ├── App.jsx          # Main App component
│   └── main.jsx         # Application entry point
├── index.html           # HTML template
├── package.json         # Project dependencies
└── vite.config.js       # Vite configuration
```

## 🚀 Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone https://github.com/Aro-ceylon-products-web/Products-Web-Frontend.git
cd Products-Web-Frontend
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and visit `http://localhost:5173`

## 📜 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## 🎨 Customization

### Adding New Products

Edit `/src/data/products.js` to add or modify products:

```javascript
{
  id: 'product-id',
  name: 'Product Name',
  category: 'Category',
  tagline: 'Short description',
  description: 'Detailed description',
  features: ['Feature 1', 'Feature 2'],
  price: '$99/month',
  pricing: {
    starter: '$99/month',
    professional: '$199/month',
    enterprise: 'Contact us'
  }
}
```

### Styling

- Global styles: `/src/styles/index.css`
- Component-specific styles: Located alongside each component

### Color Theme

Modify CSS variables in `/src/styles/index.css`:

```css
:root {
  --primary-color: #2563eb;
  --secondary-color: #1e40af;
  --accent-color: #3b82f6;
  /* ... */
}
```

## 📱 Responsive Design

The application is fully responsive and tested on:
- Desktop (1920px and above)
- Laptop (1024px - 1919px)
- Tablet (768px - 1023px)
- Mobile (below 768px)

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## 📄 License

This project is licensed under the MIT License.

## 📧 Contact

For questions or support, please contact:
- Email: info@softwarepro.com
- Website: [Your Website URL]

---

Built with ❤️ for businesses worldwide