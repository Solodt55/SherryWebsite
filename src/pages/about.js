import Image from 'next/image'

export default function About() {
  return (
    <div className="px-4 py-8 max-w-7xl mx-auto bg-gradient-to-b from-purple-50 to-pink-50">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
        {/* Image Section */}
        <div className="relative w-full aspect-square max-w-md mx-auto md:sticky md:top-8">
          <Image
            src="/sherry-moore.jpg"
            alt="Sherry Moore"
            fill
            className="rounded-2xl object-cover shadow-xl border-4 border-pink-100"
            priority
          />
        </div>

        {/* Content Section */}
        <div className="space-y-8">
          <h1 className="text-4xl font-bold text-purple-900">About Sherry Moore</h1>
          
          <p className="text-lg text-gray-700 leading-relaxed bg-white p-6 rounded-xl shadow-md border-2 border-pink-100">
            With over 26.5 years of experience, I specialize in sales, appointment setting, 
            strategy development, management, coaching, and process building. My comprehensive 
            approach helps businesses transform their sales operations and achieve sustainable growth.
          </p>

          <div className="space-y-4 bg-white p-6 rounded-xl shadow-md border-2 border-pink-100">
            <h2 className="text-2xl font-semibold text-purple-900">Professional Experience</h2>
            <p className="text-gray-700">
              My career spans prominent organizations including AT&T Yellow Pages, 
              Verizon Yellow Pages, U-Haul, and many others, where I've developed 
              and implemented successful sales strategies.
            </p>
          </div>

          <div className="space-y-4 bg-white p-6 rounded-xl shadow-md border-2 border-pink-100">
            <h2 className="text-2xl font-semibold text-purple-900">Notable Clients</h2>
            <ul className="list-disc list-inside text-gray-700 space-y-2">
              <li>AFLAC</li>
              <li>Northwestern Mutual</li>
              <li>Lockton Companies</li>
              <li>Uber Works</li>
              <li>Stolon Superfoods (Trinity Frozen Foods)</li>
              <li>EMRG Media</li>
              <li>The Butter Group</li>
              <li>Vin Dicarlo</li>
            </ul>
          </div>

          <div className="space-y-4 bg-gradient-to-r from-purple-100 to-pink-100 p-6 rounded-xl shadow-md">
            <h2 className="text-2xl font-semibold text-purple-900">Industry Expertise</h2>
            <p className="text-gray-700">
              My diverse experience spans multiple industries including:
            </p>
            <ul className="grid grid-cols-2 gap-3 text-gray-700">
              {[
                'SaaS', 'Insurance', 'Digital Marketing', 'Advertisement',
                'Waste Management', 'Food Industry', 'Event Planning',
                'Technical Furniture', 'Affiliate Marketing', 'Healthcare',
                'Roofing', 'Staffing', 'E-commerce', 'IT Solutions'
              ].map((industry) => (
                <li key={industry} className="flex items-center space-x-2">
                  <span className="text-pink-500">•</span>
                  <span>{industry}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}