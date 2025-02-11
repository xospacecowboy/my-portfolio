import Link from "next/link"
import { Linkedin, Instagram } from "lucide-react"

// Custom Threads Icon
const Threads = ({ className }: { className?: string }) => (
  <svg
    className={className}
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
  >
    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z"/>
  </svg>
)

export default function Footer() {
  return (
    <footer className="bg-deep-grey text-white py-12">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <Link href="/" className="text-2xl font-bold tracking-tighter">
              HOME
            </Link>
          </div>
          <nav className="flex space-x-6 mb-6 md:mb-0">
            <Link href="/work" className="hover:text-pastel-blue transition-colors">
              PORTFOLIO
            </Link>
            <Link href="/meet-stephen" className="hover:text-pastel-blue transition-colors">
              ABOUT
            </Link>
            <a href="mailto:beardslee.stephen@icloud.com" className="hover:text-pastel-blue transition-colors">
              MAIL
            </a>
          </nav>
          <div className="flex space-x-4">
            <a
              href="https://www.linkedin.com/in/stephen-beardslee/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-pastel-blue transition-colors"
            >
              <Linkedin className="w-6 h-6" />
            </a>
            <a
              href="https://www.threads.net/@oxytocins"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-pastel-blue transition-colors"
            >
              <Threads className="w-6 h-6" />
            </a>
            <a
              href="https://www.instagram.com/oxytocins/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-pastel-blue transition-colors"
            >
              <Instagram className="w-6 h-6" />
            </a>
          </div>
        </div>
        <div className="mt-8 text-center text-sm font-jetbrains-mono">
          © {new Date().getFullYear()} Stephen Beardslee. All rights reserved.
        </div>
      </div>
    </footer>
  )
}

