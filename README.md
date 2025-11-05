# Aro Ceylon - Business Solutions Platform

A modern frontend application for selling business solutions including CRM, HR, ERP, and POS systems. Built with React, TypeScript, and Tailwind CSS.

## 🚀 Features

- **Responsive Design**: Mobile-first approach with beautiful UI
- **Product Showcase**: Dedicated pages for CRM, HR, ERP, and POS solutions
- **Pricing Plans**: Flexible pricing tiers for businesses of all sizes
- **Contact Form**: Easy-to-use contact form with validation
- **TypeScript**: Type-safe code for better development experience
- **Tailwind CSS**: Utility-first CSS framework for rapid UI development

## 📁 Project Structure

```
aro-ceylon/
├── public/              # Static assets
├── src/
│   ├── assets/         # Images, icons, and other assets
│   │   ├── images/
│   │   └── icons/
│   ├── components/     # React components
│   │   ├── common/     # Reusable components
│   │   ├── forms/      # Form components
│   │   ├── home/       # Home page components
│   │   ├── layout/     # Layout components (Header, Footer)
│   │   ├── pricing/    # Pricing components
│   │   ├── products/   # Product components
│   │   └── testimonials/ # Testimonial components
│   ├── contexts/       # React contexts
│   ├── hooks/          # Custom React hooks
│   ├── pages/          # Page components
│   │   └── products/   # Product detail pages
│   ├── services/       # API services
│   ├── styles/         # Global styles
│   ├── types/          # TypeScript type definitions
│   ├── utils/          # Utility functions
│   ├── App.tsx         # Main app component
│   └── main.tsx        # Entry point
├── index.html
├── package.json
├── tsconfig.json
├── tailwind.config.js
├── postcss.config.js
└── vite.config.ts
```

## 🛠️ Technologies Used

- **React 18** - UI library
- **TypeScript** - Type safety
- **Vite** - Build tool and dev server
- **Tailwind CSS** - Styling
- **React Router** - Routing
- **React Hook Form** - Form handling
- **React Icons** - Icon library
- **Framer Motion** - Animations
- **Zustand** - State management
- **Axios** - HTTP client

## 📦 Installation

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm run dev
```

3. Build for production:
```bash
npm run build
```

4. Preview production build:
```bash
npm run preview
```

## 🌟 Pages

- **Home** (`/`) - Landing page with hero, features, and product showcase
- **Products** (`/products`) - Overview of all products
- **CRM** (`/products/crm`) - CRM system details
- **HR** (`/products/hr`) - HR management system details
- **ERP** (`/products/erp`) - ERP solution details
- **POS** (`/products/pos`) - POS system details
- **Pricing** (`/pricing`) - Pricing plans
- **About** (`/about`) - Company information
- **Contact** (`/contact`) - Contact form and information

## 🎨 Customization

### Colors

Edit `tailwind.config.js` to customize the color scheme:

```javascript
colors: {
  primary: { ... },
  secondary: { ... },
}
```

### Fonts

The project uses:
- **Inter** - Body text
- **Poppins** - Headings

## 📝 Environment Variables

Create a `.env` file in the root directory for any environment-specific variables:

```
VITE_API_URL=your_api_url
VITE_CONTACT_EMAIL=your_email
```

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License.

## 👥 Contact

For questions or support, please contact us at info@aroceylon.com

---

Built with ❤️ by Aro Ceylon Team
