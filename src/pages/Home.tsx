import Hero from '../components/home/Hero.tsx'
import Features from '../components/home/Features.tsx'
import ProductShowcase from '../components/home/ProductShowcase.tsx'
import Stats from '../components/home/Stats.tsx'
import Testimonials from '../components/testimonials/TestimonialList.tsx'
import CTA from '../components/home/CTA.tsx'

const Home = () => {
  return (
    <>
      <Hero />
      <div className="relative z-20 bg-white dark:bg-gray-900" style={{ marginTop: '100vh' }}>
        <Features />
        <ProductShowcase />
        <Stats />
        <Testimonials />
        <CTA />
      </div>
    </>
  )
}

export default Home
