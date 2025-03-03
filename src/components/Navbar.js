import { usePathname } from 'next/navigation'
import Link from 'next/link'
import { useRouter } from 'next/router'

export default function Navbar() {
  const pathname = usePathname()
  const router = useRouter()

  const handleContactClick = () => {
    if (pathname === '/') {
      // If already on home page, just scroll
      document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })
    } else {
      // Navigate to home page then scroll
      router.push('/#contact')
    }
  }

  return (
    <nav className='flex items-center justify-between px-4 py-3 bg-gradient-to-r from-purple-900 to-pink-800 text-white xl:px-20 xl:py-4'>
      <div className="text-sm font-bold xl:text-lg">Sherry Moore Sales Coaching</div>
      <div className="flex space-x-1 xl:justify-evenly xl:space-x-10">
          <Link 
            href="/" 
            className="hover:text-pink-200 transition-colors text-xs xl:text-base"
          >
            Home
          </Link>
        <Link 
          href="/about" 
          className="hover:text-pink-200 transition-colors text-xs xl:text-base"
        >
          About Me
        </Link>
      </div>
      <button 
        onClick={handleContactClick}
        className="bg-pink-600 text-xs text-white px-4 py-2 rounded-full hover:bg-pink-700 transition-colors sm:px-6 xl:px-8 xl:py-3 xl:text-base"
      >
        Transform Your Sales Team Today
      </button>
    </nav>
  )
}