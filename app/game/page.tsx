import { Metadata } from 'next'
import RPGChat from '@/components/RPGChat'
import Header from '@/components/Header'
import GameFooter from '@/components/GameFooter'

export const metadata: Metadata = {
  title: 'Cosmic Quest',
  description: 'Embark on an interactive text adventure through the cosmos!',
}

export default function GamePage() {
  return (
    <>
      <Header />
      <div className="min-h-screen bg-gradient-to-b from-black via-purple-900/20 to-black pt-24">
        <div className="container mx-auto px-4 py-8">
          <div className="max-w-4xl mx-auto space-y-8">
            <div className="text-center space-y-4">
              <h1 className="text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
                Cosmic Quest
              </h1>
              <p className="text-lg text-gray-400">
                Embark on an epic text adventure through the cosmos! Make choices, battle cosmic entities,
                collect rare artifacts, and shape your own destiny in this interactive story.
              </p>
            </div>
            
            <div className="relative aspect-[4/3] bg-black/50 rounded-xl overflow-hidden border border-white/10">
              <RPGChat />
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-center">
              <div className="p-6 rounded-lg bg-white/5 backdrop-blur">
                <h2 className="text-xl font-semibold mb-2">How to Play</h2>
                <ul className="text-gray-400">
                  <li>Type your responses or select choices</li>
                  <li>Make strategic decisions</li>
                  <li>Manage your inventory and stats</li>
                  <li>Complete quests and missions</li>
                </ul>
              </div>
              <div className="p-6 rounded-lg bg-white/5 backdrop-blur">
                <h2 className="text-xl font-semibold mb-2">Features</h2>
                <ul className="text-gray-400">
                  <li>Dynamic storylines</li>
                  <li>Character progression</li>
                  <li>Inventory system</li>
                  <li>Multiple endings</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <GameFooter />
    </>
  )
}
