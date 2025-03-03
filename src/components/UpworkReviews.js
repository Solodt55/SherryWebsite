export default function UpworkReviews() {
  return (
    <div className="mb-16">
      <h2 className="text-3xl font-bold text-gray-900 mb-8">Client Reviews</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Add Upwork reviews here - you'll need to implement the API integration */}
        <div className="p-6 bg-white rounded-xl shadow-md">
          <div className="flex items-center mb-4">
            <div className="text-yellow-400">★★★★★</div>
            <div className="ml-2 text-gray-600">5.0</div>
          </div>
          <p className="text-gray-700">Review content will go here...</p>
        </div>
      </div>
    </div>
  )
}