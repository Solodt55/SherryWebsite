import Image from 'next/image'
import EmailContact from '../components/EmailContact'
import { useRef, useMemo, useEffect } from 'react'
import { useRouter } from 'next/router'

export default function MainPage() {
  const emailRef = useRef(null)
  const router = useRouter()

  const scrollToEmail = () => {
    emailRef.current?.scrollIntoView({ behavior: 'smooth' })
  }

  useEffect(() => {
    // Clean up URL if it has a hash
    if (window.location.hash) {
      router.replace('/', undefined, { shallow: true })
    }
  }, [router])

  const yearsOfExperience = useMemo(() => {
    const startDate = new Date('1999-01-01')
    const today = new Date()
    const yearsDiff = (today - startDate) / (365.25 * 24 * 60 * 60 * 1000)
    // Round to nearest 0.5
    const roundedYears = Math.round(yearsDiff * 2) / 2
    // Only show decimal if it's .5
    return roundedYears % 1 === 0 ? Math.floor(roundedYears) : roundedYears.toFixed(1)
  }, [])

  return (
    <div className="max-w-7xl mx-auto px-4 py-8 bg-gradient-to-b from-purple-50 to-pink-50">
      {/* Hero Section */}
      <div className="relative h-[60vh] mb-16 rounded-2xl overflow-hidden">
        <Image
          src="/coaching-computer.jpg"
          alt="Sales Coaching"
          width={3300}
          height={2200}
          className="object-cover brightness-75"
          priority
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center p-4 bg-gradient-to-r from-purple-900/50 to-pink-900/50">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Get Control of Your Sales Potential
          </h1>
          <p className="text-xl md:text-2xl mb-8">
            Increase Your Close Rates with Personalized Coaching
          </p>
          <button 
            onClick={scrollToEmail}
            className="bg-pink-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-pink-700 transition-colors"
          >
            Transform Your Sales Team Today
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
        <div className="space-y-6">
          <h2 className="text-3xl font-bold text-purple-900">
            Stop Struggling & Start Crushing Your Sales Goals!
          </h2>
          <p className="text-gray-700 leading-relaxed">
          <b>Have you ever felt the sting of stagnant sales figures?</b> Does the thought of missed quotas and unfulfilled potential keep you up at night? You're not alone. Countless small business owners grapple with building and motivating a high-performing sales team. <br /> 
          But what if there was a way to convert your sales force from good to great? Imagine a team that consistently exceeds expectations, closing deals and exceeding quotas with confidence. This isn't a pipe dream - it's the reality for businesses that invest in personalized sales coaching.          </p>
          <div className="relative h-[300px] rounded-2xl overflow-hidden">
            <Image
              src="/sales-up-drawing.jpg"
              alt="Sales Growth"
              width={2121}
              height={1414}
              className="object-cover"
            />
          </div>
        </div>
        <div className="bg-white p-8 rounded-2xl shadow-lg border-2 border-pink-100">
          <h3 className="text-2xl font-bold text-purple-900 mb-6">
            Introducing Sherry Moore's Sales Coaching
          </h3>
          <p className="text-gray-700 mb-6">
          <b>I work with small businesses of all industries,</b> from Amazon Ecommerce marketing experts to beauty product companies to established HR consultant businesses to video production companies - I’ve even worked with someone who specializes in probate - with annual revenues between $100k and $15 million. I understand that every business is unique, and so are its sales challenges.<br /> 
          That's why I don't offer a one-size-fits-all approach. Instead, I focus on deep customization, building programs specifically tailored to your team's needs and goals.          </p>
          <div className="relative h-[300px] rounded-xl overflow-hidden mb-6">
            <Image
              src="/team-laptops.jpg"
              alt="Team Collaboration"
              width={5760}
              height={3840}
              className="object-cover"
            />
          </div>
        </div>
      </div>

      {/* Features Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
        <div className="bg-white p-6 rounded-xl shadow-md border-2 border-pink-100">
          <h4 className="text-xl font-semibold text-purple-900 mb-4">Find the Hidden Potential</h4>
          <p className="text-gray-600">
          I go beyond surface-level training. Through in-depth assessments and call recording analysis, I pinpoint strengths and weaknesses within your sales team. This allows me to craft a strategy that maximizes each rep's individual effectiveness.
          </p>
        </div>
        <div className="bg-white p-6 rounded-xl shadow-md border-2 border-pink-100">
          <h4 className="text-xl font-semibold text-purple-900 mb-4">Actionable Strategies</h4>
          <p className="text-gray-600">
          I’m laser-focused on results. I don't waste time on generic sales theory. Instead, I work with you to build a rock-solid sales framework specifically designed for your business and target market. This framework empowers your reps to confidently navigate the sales process, identify customer needs, and close deals consistently.

          </p>
        </div>
        <div className="bg-white p-6 rounded-xl shadow-md border-2 border-pink-100">
          <h4 className="text-xl font-semibold text-purple-900 mb-4">One-on-One Support</h4>
          <p className="text-gray-600">
          Unlike competitors who offer cookie-cutter solutions, I prioritize individualized coaching. Your sales reps receive ongoing support and mentorship, ensuring their development keeps pace with the ever-evolving sales landscape. This personalized approach fosters a strong coach-rep relationship, maximizing both engagement and learning.
          </p>
        </div>
      </div>

      {/* Bonus Resources Section */}
      <div className="bg-gradient-to-r from-purple-100 to-pink-100 p-8 rounded-2xl mb-16">
        <h3 className="text-2xl font-bold text-purple-900 mb-6">Bonus Resources for Faster Growth</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="space-y-6">
            <div className="space-y-4">
              <h4 className="text-xl font-semibold text-purple-900">Comprehensive Tools & Resources</h4>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>Custom-built sales frameworks tailored to your industry</li>
                <li>Proven, effective sales scripts and templates</li>
                <li>Advanced upselling and cross-selling strategies</li>
                <li>Customized sales techniques for your specific business</li>
                <li>On-demand training library with recorded sessions</li>
                <li>New hire onboarding materials and documentation</li>
                <li>Performance tracking and analytics tools</li>
                <li>Team collaboration and communication frameworks</li>
              </ul>
            </div>
            <div className="space-y-4">
              <h4 className="text-xl font-semibold text-purple-900">Long-Term Benefits</h4>
              <ul className="list-disc list-inside text-gray-700 space-y-2">
                <li>Enhanced team performance and motivation</li>
                <li>Improved employee satisfaction and retention</li>
                <li>Stronger team culture and morale</li>
                <li>Streamlined onboarding for new sales representatives</li>
                <li>Consistent sales process across your organization</li>
                <li>Increased close rates and revenue growth</li>
              </ul>
            </div>
          </div>
          <div className="relative h-[300px] rounded-xl overflow-hidden">
            <Image
              src="/helping-computer.jpg"
              alt="Sales Support"
              width={6046}
              height={4031}
              className="object-cover"
            />
          </div>
        </div>
      </div>

      {/* Experience Section */}
      <div className="text-center mb-16">
        <h2 className="text-3xl font-bold text-purple-900 mb-8">
          {yearsOfExperience} Years of Sales Excellence used to help you take on anything
        </h2>
        <div className="relative h-[400px] rounded-2xl overflow-hidden">
          <Image
            src="/smiling-headset.jpg"
            alt="Professional Sales Coach"
            width={3600}
            height={2025}
            className="object-cover"
          />
        </div>
      </div>

      {/* Contact Form */}
      <div ref={emailRef} id="contact">
        <EmailContact />
      </div>
    </div>
  )
}