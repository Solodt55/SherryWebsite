import Navbar from './Navbar'

export default function Layout({ children }) {
  return (
    <div className="min-h-screen min-w-screen bg-white">
      <Navbar />
      {children}
    </div>
  )
}