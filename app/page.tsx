import Link from "next/link"
import { ArrowUpRight } from "lucide-react"
import Footer from "../components/Footer"

export default function Work() {
  return (
    <div className="bg-deep-grey text-white min-h-screen font-space-grotesk">
      <header className="container mx-auto px-6 py-8">
        <Link href="/" className="text-2xl font-bold tracking-tighter">
          STEPHEN
        </Link>
      </header>

      <main className="container mx-auto px-6 py-12">
        <h1 className="text-5xl font-bold mb-12">Work</h1>

        <div className="grid gap-12">
          <div>
            <h2 className="text-3xl font-bold mb-4">Creative Strategy 🎨</h2>
            <p className="text-lg mb-4 font-jetbrains-mono">
              Tasked with reversing Electronic Arts' negative public image as the perennial "Worst Company in America,"
              I led my team through the implementation of a purpose-driven creative platform...
            </p>
            <Link href="#" className="inline-flex items-center text-lg font-medium text-pastel-blue">
              Read More <ArrowUpRight className="ml-2 w-5 h-5" />
            </Link>
          </div>

          <div>
            <h2 className="text-3xl font-bold mb-4">Community Building 🌟</h2>
            <p className="text-lg mb-4 font-jetbrains-mono">
              Instrumental in reshaping Electronic Arts' public perception, I spearheaded the development of a Discord
              platform. This involved crafting and executing a creative strategy...
            </p>
            <Link href="#" className="inline-flex items-center text-lg font-medium text-pastel-pink">
              Read More <ArrowUpRight className="ml-2 w-5 h-5" />
            </Link>
          </div>

          {/* Add more work items here */}
        </div>
      </main>

      <Footer />
    </div>
  )
}

