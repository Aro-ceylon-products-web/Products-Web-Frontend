const About = () => {
  return (
    <div className="section-padding bg-white dark:bg-gray-900">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900 dark:text-white">
            About <span className="text-gradient-gold">Aro Ceylon</span>
          </h1>
          <p className="text-xl text-gray-700 dark:text-gray-300 max-w-3xl mx-auto">
            We're on a mission to empower businesses with the tools they need to succeed.
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-8">
          <section>
            <h2 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">Our Story</h2>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              Founded in 2020, Aro Ceylon has grown from a small startup to a leading provider
              of business solutions. We understand the challenges businesses face because we've
              been there ourselves.
            </p>
          </section>

          <section>
            <h2 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">Our Mission</h2>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              To provide world-class business software that's accessible to companies of all sizes,
              helping them streamline operations, increase efficiency, and drive growth.
            </p>
          </section>

          <section>
            <h2 className="text-3xl font-bold mb-4 text-gray-900 dark:text-white">Why Choose Us</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="glass-effect p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-2 text-amber-600 dark:text-amber-400">Expert Support</h3>
                <p className="text-gray-700 dark:text-gray-300">
                  24/7 customer support from experienced professionals
                </p>
              </div>
              <div className="glass-effect p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-2 text-amber-600 dark:text-amber-400">Scalable Solutions</h3>
                <p className="text-gray-700 dark:text-gray-300">
                  Grow your business without worrying about outgrowing your software
                </p>
              </div>
              <div className="glass-effect p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-2 text-amber-600 dark:text-amber-400">Regular Updates</h3>
                <p className="text-gray-700 dark:text-gray-300">
                  Continuous improvements and new features at no extra cost
                </p>
              </div>
              <div className="glass-effect p-6 rounded-lg">
                <h3 className="text-xl font-semibold mb-2 text-amber-600 dark:text-amber-400">Security First</h3>
                <p className="text-gray-700 dark:text-gray-300">
                  Enterprise-grade security to protect your business data
                </p>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}

export default About
