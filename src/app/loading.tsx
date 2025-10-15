export default function Loading() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <div className="flex flex-col items-center gap-6">
        <div className="relative w-20 h-20">
          {/* Spinning gradient circle */}
          <div
            className="absolute inset-0 rounded-full bg-gradient-to-tr from-pink via-purple to-cyan animate-spin opacity-75"
            style={{ animationDuration: '1.5s' }}
          ></div>
          <div className="absolute inset-2 rounded-full bg-background"></div>
        </div>

        {/* Animated text */}
        <div className="flex items-center gap-2">
          <span className="text-lg font-medium gradient-text animate-pulse">Loading</span>
          <span className="flex gap-1">
            <span className="w-1.5 h-1.5 bg-pink rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></span>
            <span className="w-1.5 h-1.5 bg-purple rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></span>
            <span className="w-1.5 h-1.5 bg-cyan rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></span>
          </span>
        </div>
      </div>
    </div>
  )
}
