import Link from "next/link"
import { Linkedin, Twitter, Instagram } from "lucide-react"

export default function Footer() {
  return (
    <footer className="bg-deep-grey text-white py-12">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <Link href="/" className="text-2xl font-bold tracking-tighter">
              @OXYTOCINS
            </Link>
          </div>
          <nav className="flex space-x-6 mb-6 md:mb-0">
            <Link href="/work" className="hover:text-pastel-blue transition-colors">
              Work
            </Link>
            <Link href="/meet-stephen" className="hover:text-pastel-blue transition-colors">
              Meet Stephen
            </Link>
            <a href="mailto:beardslee.stephen@icloud.com" className="hover:text-pastel-blue transition-colors">
              Contact
            </a>
          </nav>
          <div className="flex space-x-4">
            <a
              href="https://www.linkedin.com/in/stephenbeardslee/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-pastel-blue transition-colors"
            >
              <Linkedin className="w-6 h-6" />
            </a>
            <a
              href="https://twitter.com/yourtwitterhandle"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-pastel-blue transition-colors"
            >
              <Twitter className="w-6 h-6" />
            </a>
            <a
              href="https://www.instagram.com/yourinstagramhandle/"
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

