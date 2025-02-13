interface GradientTextProps {
  children: React.ReactNode
  className?: string
}

export default function GradientText({ children, className = "" }: GradientTextProps) {
  return (
    <span className={`bg-clip-text text-transparent bg-gradient-to-r from-pastel-pink via-pastel-purple to-pastel-blue ${className}`}>
      {children}
    </span>
  )
}
