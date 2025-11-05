import { useCountAnimation } from '../../hooks/useCountAnimation'

const Stats = () => {
  const stats = [
    { number: 5000, label: 'Happy Clients', suffix: '+' },
    { number: 99.9, label: 'Uptime', suffix: '%', decimals: 1 },
    { number: 24, label: 'Support', suffix: '/7' },
    { number: 50, label: 'Countries', suffix: '+' },
  ]

  return (
    <section className="section-padding bg-gradient-to-br from-amber-500 to-amber-600 text-white">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Trusted by Businesses Worldwide</h2>
          <p className="text-xl text-amber-50">
            Join thousands of companies that trust our solutions
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat) => {
            const StatCounter = () => {
              const { formattedValue, elementRef } = useCountAnimation({
                end: stat.number,
                duration: 2000,
                decimals: stat.decimals || 0,
                suffix: stat.suffix || '',
              })
              
              return (
                <div ref={elementRef} className="text-center">
                  <div className="text-5xl md:text-6xl font-bold mb-2">{formattedValue}</div>
                  <div className="text-lg text-amber-50">{stat.label}</div>
                </div>
              )
            }
            
            return <StatCounter key={stat.label} />
          })}
        </div>
      </div>
    </section>
  )
}

export default Stats
