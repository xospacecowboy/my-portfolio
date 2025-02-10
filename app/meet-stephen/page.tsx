import Link from "next/link"
import Footer from "../../components/Footer"

export default function MeetStephen() {
  return (
    <div className="bg-deep-grey text-white min-h-screen font-space-grotesk">
      <header className="container mx-auto px-6 py-8">
        <Link href="/" className="text-2xl font-bold tracking-tighter">
          STEPHEN
        </Link>
      </header>

      <main className="container mx-auto px-6 py-12">
        <h1 className="text-5xl font-bold mb-12">Meet Stephen</h1>

        <div className="grid gap-8 font-jetbrains-mono">
          <p className="text-lg">
            Stephen Beardslee is a strategic social media leader based in Houston, currently working as a Digital
            Marketing & Social Media Professional.
          </p>

          <p className="text-lg">
            With a background in global social media management at Electronic Arts and experience as a social strategist
            and gaming consultant at Cashmere Agency, Stephen has worked with major brands like Google, Meta, and
            Twitch.
          </p>

          <p className="text-lg">
            Stephen's approach focuses on creating transformative content that is relevant, meaningful, entertaining,
            and inspiring. He believes that good stories are the key to good content and strives to extract meaningful
            narratives from every idea.
          </p>

          {/* Add more paragraphs or sections about Stephen's background, skills, and experiences */}
        </div>
      </main>

      <Footer />
    </div>
  )
}

