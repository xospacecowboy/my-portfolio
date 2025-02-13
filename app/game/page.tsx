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
            
            <div className="relative aspect-[16/10] max-w-3xl mx-auto bg-black/50 rounded-xl overflow-hidden border border-white/10">
              <RPGChat />
            </div>
            
            <div className="max-w-3xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="group p-6 rounded-xl bg-gradient-to-br from-purple-900/50 via-black to-pink-900/30 backdrop-blur border border-white/10 hover:border-white/20 transition-all duration-300 hover:shadow-lg hover:shadow-purple-500/10">
                  <h2 className="text-xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-400 group-hover:from-purple-300 group-hover:to-pink-300 transition-all">
                    🎮 How to Play
                  </h2>
                  <ul className="text-gray-400 space-y-3">
                    <li className="flex items-center space-x-2 group-hover:text-gray-300 transition-all">
                      <span className="w-1.5 h-1.5 rounded-full bg-purple-400"></span>
                      <span>Type your responses or select choices</span>
                    </li>
                    <li className="flex items-center space-x-2 group-hover:text-gray-300 transition-all">
                      <span className="w-1.5 h-1.5 rounded-full bg-pink-400"></span>
                      <span>Make strategic decisions that affect your journey</span>
                    </li>
                    <li className="flex items-center space-x-2 group-hover:text-gray-300 transition-all">
                      <span className="w-1.5 h-1.5 rounded-full bg-purple-400"></span>
                      <span>Manage your inventory and character stats</span>
                    </li>
                    <li className="flex items-center space-x-2 group-hover:text-gray-300 transition-all">
                      <span className="w-1.5 h-1.5 rounded-full bg-pink-400"></span>
                      <span>Complete quests and unlock new areas</span>
                    </li>
                  </ul>
                </div>
                
                <div className="group p-6 rounded-xl bg-gradient-to-br from-pink-900/50 via-black to-purple-900/30 backdrop-blur border border-white/10 hover:border-white/20 transition-all duration-300 hover:shadow-lg hover:shadow-pink-500/10">
                  <h2 className="text-xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-pink-400 to-purple-400 group-hover:from-pink-300 group-hover:to-purple-300 transition-all">
                    ✨ Features
                  </h2>
                  <ul className="text-gray-400 space-y-3">
                    <li className="flex items-center space-x-2 group-hover:text-gray-300 transition-all">
                      <span className="w-1.5 h-1.5 rounded-full bg-pink-400"></span>
                      <span>Rich storylines with branching paths</span>
                    </li>
                    <li className="flex items-center space-x-2 group-hover:text-gray-300 transition-all">
                      <span className="w-1.5 h-1.5 rounded-full bg-purple-400"></span>
                      <span>Character progression system</span>
                    </li>
                    <li className="flex items-center space-x-2 group-hover:text-gray-300 transition-all">
                      <span className="w-1.5 h-1.5 rounded-full bg-pink-400"></span>
                      <span>Interactive inventory management</span>
                    </li>
                    <li className="flex items-center space-x-2 group-hover:text-gray-300 transition-all">
                      <span className="w-1.5 h-1.5 rounded-full bg-purple-400"></span>
                      <span>Multiple unique endings to discover</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <GameFooter />
    </>
  )
}
