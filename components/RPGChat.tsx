'use client'

import { useState, useRef, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

interface GameState {
  playerName: string
  health: number
  inventory: string[]
  currentLocation: string
  questProgress: number
  credits: number
}

interface Message {
  id: string
  text: string
  type: 'system' | 'player' | 'options'
  options?: string[]
}

const initialGameState: GameState = {
  playerName: '',
  health: 100,
  inventory: [],
  currentLocation: 'Starport',
  questProgress: 0,
  credits: 100
}

const storylines = {
  intro: [
    "🚀 Welcome to Cosmic Quest! What's your name, space traveler? ✨",
    "🌟 Ah, {playerName}! A name that will echo through the stars! Welcome aboard the Starport 🛸",
    "🌌 You find yourself at a bustling space station, where countless adventures await. What would you like to do? 🌠",
  ],
  starport_options: [
    "🏪 Visit the Merchant's Quarter",
    "📋 Head to the Mission Board",
    "🍺 Enter the Cantina",
    "🎒 Check your inventory"
  ],
  merchant: [
    "💫 The Merchant's Quarter is filled with exotic wares from across the galaxy.",
    "✨ A mysterious vendor catches your eye, their stall glowing with strange artifacts..."
  ],
  merchant_options: [
    "⚔️ Browse equipment (10 credits)",
    "🧪 Buy health potion (20 credits)",
    "💎 Ask about rare items",
    "🚶 Return to main area"
  ],
  cantina: [
    "🎵 The Cosmic Cantina is alive with the chatter of beings from a thousand worlds 👽",
    "👥 A group of seasoned space travelers are sharing tales of their adventures 🗣️"
  ],
  cantina_options: [
    "💬 Join the conversation",
    "🍹 Order a drink (5 credits)",
    "👂 Listen for rumors",
    "🚶 Return to main area"
  ],
  mission: [
    "📡 The Mission Board glows with opportunities for the brave.",
    "✨ Several postings catch your attention:"
  ],
  mission_options: [
    "📡 Investigate strange signals (Reward: 50 credits)",
    "🚢 Escort merchant ship (Reward: 30 credits)",
    "🗺️ Search for lost artifacts (Reward: 100 credits)",
    "🚶 Return to main area"
  ]
}

export default function RPGChat() {
  const [gameState, setGameState] = useState<GameState>(initialGameState)
  const [messages, setMessages] = useState<Message[]>([{
    id: '1',
    text: storylines.intro[0],
    type: 'system'
  }])
  const [inputValue, setInputValue] = useState('')
  const [isTyping, setIsTyping] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)

  const scrollToBottom = () => {
    if (messagesEndRef.current) {
      const container = messagesEndRef.current.parentElement;
      if (container) {
        const smoothScroll = () => {
          const targetScroll = container.scrollHeight - container.clientHeight;
          const currentScroll = container.scrollTop;
          const distance = targetScroll - currentScroll;
          
          if (Math.abs(distance) < 1) return;
          
          container.scrollTop = currentScroll + distance * 0.3;
          requestAnimationFrame(smoothScroll);
        };
        
        requestAnimationFrame(smoothScroll);
      }
    }
  }

  useEffect(() => {
    if (messages.length > 0) {
      const timeoutId = setTimeout(scrollToBottom, 50);
      return () => clearTimeout(timeoutId);
    }
  }, [messages]);

  const addMessage = (text: string, type: 'system' | 'player' | 'options', options?: string[]) => {
    setMessages(prev => [...prev, {
      id: Date.now().toString(),
      text,
      type,
      options
    }])
  }

  const handleInput = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputValue.trim()) return;

    const container = messagesEndRef.current?.parentElement;
    if (container) {
      container.style.scrollBehavior = 'smooth';
    }

    // Add player's message
    addMessage(inputValue, 'player')
    setInputValue('')
    setIsTyping(true)

    // Handle different game states
    if (!gameState.playerName) {
      // Set player name
      const newGameState = {
        ...gameState,
        playerName: inputValue
      }
      setGameState(newGameState)
      
      // Continue intro sequence
      await new Promise(resolve => setTimeout(resolve, 1000))
      addMessage(storylines.intro[1].replace('{playerName}', inputValue), 'system')
      await new Promise(resolve => setTimeout(resolve, 1500))
      addMessage(storylines.intro[2], 'system')
      await new Promise(resolve => setTimeout(resolve, 1000))
      addMessage('💭 Choose your action:', 'options', storylines.starport_options)
    } else {
      // Handle different locations and actions
      handleGameAction(inputValue)
    }

    setIsTyping(false)
    
    if (container) {
      container.style.scrollBehavior = 'auto';
    }
  }

  const handleGameAction = async (action: string) => {
    const normalizedAction = action.toLowerCase().trim()
    const normalizedOptions = {
      merchant: storylines.starport_options[0].toLowerCase(),
      cantina: storylines.starport_options[2].toLowerCase(),
      mission: storylines.starport_options[1].toLowerCase(),
      inventory: storylines.starport_options[3].toLowerCase(),
      return: "return to main area"
    }

    switch (normalizedAction) {
      case normalizedOptions.merchant:
        setGameState(prev => ({ ...prev, currentLocation: "Merchant's Quarter" }))
        for (const text of storylines.merchant) {
          await new Promise(resolve => setTimeout(resolve, 1000))
          addMessage(text, 'system')
        }
        await new Promise(resolve => setTimeout(resolve, 1000))
        addMessage('💭 What would you like to do?', 'options', storylines.merchant_options)
        break

      case normalizedOptions.cantina:
        setGameState(prev => ({ ...prev, currentLocation: "Cantina" }))
        for (const text of storylines.cantina) {
          await new Promise(resolve => setTimeout(resolve, 1000))
          addMessage(text, 'system')
        }
        await new Promise(resolve => setTimeout(resolve, 1000))
        addMessage('💭 What would you like to do?', 'options', storylines.cantina_options)
        break

      case normalizedOptions.mission:
        setGameState(prev => ({ ...prev, currentLocation: "Mission Board" }))
        for (const text of storylines.mission) {
          await new Promise(resolve => setTimeout(resolve, 1000))
          addMessage(text, 'system')
        }
        await new Promise(resolve => setTimeout(resolve, 1000))
        addMessage('📝 Available missions:', 'options', storylines.mission_options)
        break

      case normalizedOptions.inventory:
        const inventoryMessage = gameState.inventory.length > 0
          ? `🎒 Your inventory contains: ${gameState.inventory.join(', ')}`
          : "🎒 Your inventory is empty"
        addMessage(`💰 Credits: ${gameState.credits}\n❤️ Health: ${gameState.health}\n${inventoryMessage}`, 'system')
        await new Promise(resolve => setTimeout(resolve, 1000))
        addMessage('💭 What would you like to do?', 'options', storylines.starport_options)
        break

      case normalizedOptions.return:
        setGameState(prev => ({ ...prev, currentLocation: "Starport" }))
        addMessage("🚀 You return to the main area of the Starport.", 'system')
        await new Promise(resolve => setTimeout(resolve, 1000))
        addMessage('💫 What would you like to do?', 'options', storylines.starport_options)
        break

      default:
        handleLocationSpecificAction(action)
    }
  }

  const handleLocationSpecificAction = async (action: string) => {
    switch (gameState.currentLocation) {
      case "Merchant's Quarter":
        handleMerchantAction(action)
        break
      case "Cantina":
        handleCantinaAction(action)
        break
      case "Mission Board":
        handleMissionAction(action)
        break
      default:
        addMessage("I'm not sure what to do with that. Please choose from the available options.", 'system')
        await new Promise(resolve => setTimeout(resolve, 1000))
        addMessage('💭 What would you like to do?', 'options', storylines.starport_options)
    }
  }

  const handleMerchantAction = async (action: string) => {
    switch (action.toLowerCase()) {
      case "buy health potion (20 credits)":
        if (gameState.credits >= 20) {
          setGameState(prev => ({
            ...prev,
            credits: prev.credits - 20,
            health: Math.min(100, prev.health + 30),
            inventory: [...prev.inventory, "Health Potion"]
          }))
          addMessage("🧪 You purchased a health potion. Your health has been restored! ❤️", 'system')
        } else {
          addMessage("❌ You don't have enough credits for that. 💔", 'system')
        }
        break
      default:
        addMessage("🤝 The merchant nods politely.", 'system')
    }
    await new Promise(resolve => setTimeout(resolve, 1000))
    addMessage('💭 What else would you like to do?', 'options', storylines.merchant_options)
  }

  const handleCantinaAction = async (action: string) => {
    switch (action.toLowerCase()) {
      case "order a drink (5 credits)":
        if (gameState.credits >= 5) {
          setGameState(prev => ({
            ...prev,
            credits: prev.credits - 5
          }))
          addMessage("🍹 You enjoy a refreshing space beverage. The bartender shares some interesting gossip... 👀", 'system')
        } else {
          addMessage("❌ You don't have enough credits for a drink. 💔", 'system')
        }
        break
      default:
        addMessage("🎵 The cantina buzzes with activity. 🗣️", 'system')
    }
    await new Promise(resolve => setTimeout(resolve, 1000))
    addMessage('💭 What else would you like to do?', 'options', storylines.cantina_options)
  }

  const handleMissionAction = async (action: string) => {
    if (action.toLowerCase().includes('investigate strange signals')) {
      setGameState(prev => ({
        ...prev,
        credits: prev.credits + 50,
        questProgress: prev.questProgress + 1
      }))
      addMessage("🎉 You successfully investigated the strange signals and earned 50 credits! 💰", 'system')
    }
    await new Promise(resolve => setTimeout(resolve, 1000))
    addMessage('💫 What else would you like to do?', 'options', storylines.mission_options)
  }

  const handleOptionClick = (option: string) => {
    setInputValue(option)
    const fakeEvent = { preventDefault: () => {}, stopPropagation: () => {} } as React.FormEvent
    handleInput(fakeEvent)
  }

  return (
    <div 
      className="absolute inset-0 flex flex-col bg-black/80 text-gray-100" 
      onWheel={(e) => e.stopPropagation()}
      onTouchMove={(e) => e.stopPropagation()}
    >
      <div 
        className="flex-1 overflow-y-auto p-4 space-y-4 no-scrollbar scroll-smooth"
        onScroll={(e) => e.stopPropagation()}
      >
        <AnimatePresence mode="popLayout">
          {messages.map(message => (
            <motion.div
              key={message.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              className={`${
                message.type === 'player'
                  ? 'bg-purple-500/20 ml-auto'
                  : message.type === 'options'
                  ? 'bg-gray-800/50'
                  : 'bg-gray-900/50'
              } rounded-lg p-3 max-w-[80%] space-y-2`}
            >
              {message.type === 'options' ? (
                <div className="space-y-2">
                  <p className="text-gray-400">{message.text}</p>
                  <div className="grid grid-cols-1 gap-2">
                    {message.options?.map((option, index) => (
                      <button
                        key={index}
                        onClick={(e) => {
                          e.preventDefault()
                          e.stopPropagation()
                          handleOptionClick(option)
                        }}
                        className="text-left px-3 py-2 rounded bg-purple-500/20 hover:bg-purple-500/30 transition-colors"
                      >
                        {option}
                      </button>
                    ))}
                  </div>
                </div>
              ) : (
                <p style={{ whiteSpace: 'pre-line' }}>{message.text}</p>
              )}
            </motion.div>
          ))}
        </AnimatePresence>
        {isTyping && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="bg-gray-900/50 rounded-lg p-3 max-w-[80%]"
          >
            <p className="text-gray-400">Typing...</p>
          </motion.div>
        )}
        <div ref={messagesEndRef} />
      </div>

      <form 
        onSubmit={(e) => {
          e.preventDefault()
          e.stopPropagation()
          handleInput(e)
        }} 
        className="p-4 border-t border-white/10"
        onWheel={(e) => e.stopPropagation()}
        onTouchMove={(e) => e.stopPropagation()}
      >
        <div className="flex gap-2">
          <input
            type="text"
            value={inputValue}
            onChange={(e) => {
              e.stopPropagation()
              setInputValue(e.target.value)
            }}
            onWheel={(e) => e.stopPropagation()}
            onTouchMove={(e) => e.stopPropagation()}
            placeholder="Type your response..."
            className="flex-1 bg-white/5 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
          />
          <button
            type="submit"
            onClick={(e) => e.stopPropagation()}
            className="px-4 py-2 bg-purple-600 hover:bg-purple-700 rounded-lg transition-colors"
          >
            Send
          </button>
        </div>
      </form>
    </div>
  )
}
