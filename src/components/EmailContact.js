import { useState } from 'react'

export default function EmailContact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    message: ''
  })

  const handleSubmit = async (e) => {
    e.preventDefault()
    // Add your email handling logic here
  }

  return (
    <div className="bg-gray-50 p-8 rounded-2xl shadow-lg mb-16">
      <h2 className="text-3xl font-bold text-gray-900 mb-8">Let's Talk About Your Goals</h2>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <input
            type="text"
            placeholder="Your Name"
            className="p-3 border rounded-lg"
            value={formData.name}
            onChange={(e) => setFormData({...formData, name: e.target.value})}
          />
          <input
            type="email"
            placeholder="Your Email"
            className="p-3 border rounded-lg"
            value={formData.email}
            onChange={(e) => setFormData({...formData, email: e.target.value})}
          />
        </div>
        <input
          type="text"
          placeholder="Company Name"
          className="p-3 border rounded-lg w-full"
          value={formData.company}
          onChange={(e) => setFormData({...formData, company: e.target.value})}
        />
        <textarea
          placeholder="Tell me about your sales challenges..."
          className="p-3 border rounded-lg w-full h-32"
          value={formData.message}
          onChange={(e) => setFormData({...formData, message: e.target.value})}
        />
        <button type="submit" className="bg-red-500 text-white px-8 py-3 rounded-full hover:bg-red-600">
          Send Message
        </button>
      </form>
    </div>
  )
}