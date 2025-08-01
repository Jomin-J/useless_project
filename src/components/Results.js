'use client';

export default function Results({ isSearching, loadingMessage, results, searchStats, query }) {
  const handleLinkClick = (e) => {
    e.preventDefault();
    const messages = [
      "🎯 Congratulations! You've successfully clicked on nothing. Achievement unlocked: Master of Pointless Actions.",
      "🚀 ERROR 404: Your hopes and dreams not found. Please try a different universe.",
      "🎭 Plot twist: This link was an illusion all along. Welcome to the matrix of uselessness.",
      "🧠 Fun fact: You just wasted 0.3 seconds of your life clicking this. Time you'll never get back.",
      "🔮 Quantum entanglement detected! This link is simultaneously useful and useless until observed. (It's useless.)",
      "🎪 Ladies and gentlemen, witness the amazing disappearing usefulness! *POOF* And it's gone!",
      "🏆 Breaking news: Local person discovers that fake links are, in fact, fake. More at 11.",
      "🌌 You've been redirected to the void. Population: You and your regrets.",
      "🎨 This link is a masterpiece of modern art - it represents the emptiness of human existence.",
      "🔬 Scientific study shows: 100% of people who click this link experience disappointment. You are now part of this statistic.",
      "🎪 Welcome to the circus of broken dreams! Your ticket to nowhere has been validated.",
      "🌟 Congratulations! You've found the digital equivalent of a chocolate teapot.",
      "🎯 This link works exactly as intended: it doesn't. Our quantum engineers are very proud.",
      "🚨 Alert: You've triggered our advanced disappointment detection system. Results: Maximum sadness achieved.",
      "🎭 In an alternate universe, this link actually works. Unfortunately, you're stuck in this one."
    ];
    
    const randomMessage = messages[Math.floor(Math.random() * messages.length)];
    alert(randomMessage);
  };

  if (isSearching) {
    return (
      <div className="w-full">
        <div className="text-center py-24">
          {/* Advanced loading animation */}
          <div className="mb-12 relative">
            <div className="relative mx-auto w-24 h-24">
              {/* Outer ring */}
              <div className="absolute inset-0 border-4 border-blue-200 rounded-full"></div>
              <div className="absolute inset-0 border-4 border-t-blue-500 border-r-purple-500 border-b-indigo-500 border-l-blue-600 rounded-full animate-spin"></div>
              
              {/* Middle ring */}
              <div className="absolute inset-3 border-2 border-slate-200 rounded-full"></div>
              <div className="absolute inset-3 border-2 border-t-slate-400 rounded-full animate-spin" style={{animationDirection: 'reverse', animationDuration: '2s'}}></div>
              
              {/* Inner core */}
              <div className="absolute inset-8 bg-gradient-to-r from-blue-400 to-purple-500 rounded-full animate-pulse"></div>
            </div>
            
            {/* Quantum particles */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              <div className="absolute top-1/2 left-1/2 w-3 h-3 bg-blue-400 rounded-full animate-float delay-0 opacity-80"></div>
              <div className="absolute top-1/3 left-1/3 w-2 h-2 bg-purple-400 rounded-full animate-float delay-100 opacity-60"></div>
              <div className="absolute bottom-1/3 right-1/3 w-2.5 h-2.5 bg-indigo-400 rounded-full animate-float delay-200 opacity-70"></div>
              <div className="absolute top-2/3 right-1/4 w-1.5 h-1.5 bg-blue-500 rounded-full animate-float delay-300 opacity-50"></div>
            </div>
          </div>
          
          <div className="space-y-6">
            <div className="backdrop-blur-xl bg-white/80 border border-slate-200 rounded-2xl p-6 max-w-2xl mx-auto shadow-lg">
              <p className="text-2xl font-light text-slate-800 mb-2">{loadingMessage}</p>
              <div className="flex justify-center items-center space-x-4">
                <div className="flex space-x-1">
                  <div className="w-2 h-2 bg-blue-500 rounded-full animate-bounce"></div>
                  <div className="w-2 h-2 bg-purple-500 rounded-full animate-bounce animation-delay-100"></div>
                  <div className="w-2 h-2 bg-indigo-500 rounded-full animate-bounce animation-delay-200"></div>
                </div>
                <span className="text-blue-600 text-sm font-medium">AI PROCESSING</span>
              </div>
            </div>
            
            {/* Processing stages */}
            <div className="text-slate-600 text-sm space-y-2 max-w-lg mx-auto">
              <div className="flex items-center justify-between">
                <span>Quantum entanglement initialized</span>
                <span className="text-green-500">✓</span>
              </div>
              <div className="flex items-center justify-between">
                <span>Meaninglessness algorithm engaged</span>
                <span className="text-green-500">✓</span>
              </div>
              <div className="flex items-center justify-between">
                <span>Disappointment matrix loading</span>
                <div className="w-4 h-4 border border-blue-500 border-t-transparent rounded-full animate-spin"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full animate-fade-in">
      {/* Advanced Search Stats */}
      <div className="mb-8">
        <div className="backdrop-blur-xl bg-white/80 border border-slate-200 rounded-3xl p-6 shadow-lg">
          <div className="flex items-center justify-between flex-wrap gap-4">
            <div className="flex items-center space-x-6">
              <div className="text-blue-600">
                <span className="text-3xl font-light">
                  Over <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent font-semibold">42,000,000</span> regrets found
                </span>
              </div>
              <div className="text-slate-600 text-lg">
                in <span className="text-green-600 font-medium">0.0001</span> seconds
              </div>
            </div>
            
            <div className="flex items-center space-x-4 text-sm text-slate-500">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                <span>Quantum Stable</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
                <span>AI Confidence: 0%</span>
              </div>
            </div>
          </div>
          
          {/* Advanced metrics */}
          <div className="mt-4 grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
            <div className="text-center">
              <div className="text-purple-600 font-medium">Disappointment Level</div>
              <div className="text-slate-800 text-lg">Maximum</div>
            </div>
            <div className="text-center">
              <div className="text-blue-600 font-medium">Usefulness Score</div>
              <div className="text-slate-800 text-lg">-∞</div>
            </div>
            <div className="text-center">
              <div className="text-pink-600 font-medium">Quantum Coherence</div>
              <div className="text-slate-800 text-lg">Collapsed</div>
            </div>
            <div className="text-center">
              <div className="text-green-600 font-medium">Reality Index</div>
              <div className="text-slate-800 text-lg">Questionable</div>
            </div>
          </div>
        </div>
      </div>

      {/* Results */}
      <div className="space-y-8">
        {results.map((result, index) => (
          <div 
            key={index} 
            className="group relative animate-slide-up"
            style={{animationDelay: `${index * 100}ms`}}
          >
            {/* Glassmorphism result card */}
            <div className="backdrop-blur-xl bg-white/70 border border-slate-200 rounded-3xl p-8 hover:bg-white/90 transition-all duration-500 transform hover:scale-[1.02] hover:shadow-xl">
              {/* Hover glow effect */}
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-500/0 via-purple-500/0 to-indigo-500/0 group-hover:from-blue-500/10 group-hover:via-purple-500/10 group-hover:to-indigo-500/10 rounded-3xl blur transition-all duration-500 opacity-0 group-hover:opacity-100"></div>
              
              <div className="relative z-10">
                {/* URL with tooltip */}
                <div className="mb-4 group/url">
                  <a
                    href="#"
                    onClick={handleLinkClick}
                    className="text-sm text-blue-600 hover:text-blue-700 transition-colors duration-200 font-medium tracking-wide flex items-center space-x-2"
                    title="Click if you enjoy disappointment"
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13.828 10.172a4 4 0 00-5.656 0l-4 4a4 4 0 105.656 5.656l1.102-1.101m-.758-4.899a4 4 0 005.656 0l4-4a4 4 0 00-5.656-5.656l-1.1 1.1" />
                    </svg>
                    <span>{result.url}</span>
                  </a>
                </div>
                
                {/* Title */}
                <h3 className="mb-4">
                  <a
                    href="#"
                    onClick={handleLinkClick}
                    className="text-3xl font-light text-slate-800 hover:text-blue-600 transition-colors duration-300 leading-tight block"
                    title="Another pointless link awaits"
                  >
                    {result.title}
                  </a>
                </h3>
                
                {/* Description */}
                <p className="text-lg text-slate-600 leading-relaxed max-w-4xl font-light mb-4">
                  {result.description}
                </p>
                
                {/* Fake metadata */}
                <div className="flex items-center space-x-6 text-xs text-slate-500">
                  <span className="flex items-center space-x-1">
                    <span>🎭</span>
                    <span>Satirical Content</span>
                  </span>
                  <span className="flex items-center space-x-1">
                    <span>⏰</span>
                    <span>Last Updated: Never</span>
                  </span>
                  <span className="flex items-center space-x-1">
                    <span>📊</span>
                    <span>Relevance: 0%</span>
                  </span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Advanced Action Center */}
      <div className="mt-20 text-center">
        <div className="backdrop-blur-xl bg-white/80 border border-slate-200 rounded-3xl p-8 max-w-2xl mx-auto shadow-lg">
          <h3 className="text-slate-800 text-xl font-light mb-6">Advanced Search Operations</h3>
          
          <div className="flex flex-wrap justify-center gap-4">
            <button
              onClick={() => window.location.reload()}
              className="group relative px-8 py-4 bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-400 hover:to-blue-500 text-white rounded-2xl font-medium transition-all duration-300 transform hover:scale-105 hover:shadow-xl focus:outline-none focus:ring-4 focus:ring-blue-500/30 active:scale-95"
            >
              <span className="relative z-10 flex items-center space-x-2">
                <span>🔄</span>
                <span>Quantum Reset</span>
              </span>
            </button>
            
            <button
              onClick={() => alert("Export failed successfully. Your disappointment has been saved to /dev/null")}
              className="group relative px-8 py-4 bg-gradient-to-r from-purple-500 to-purple-600 hover:from-purple-400 hover:to-purple-500 text-white rounded-2xl font-medium transition-all duration-300 transform hover:scale-105 hover:shadow-xl focus:outline-none focus:ring-4 focus:ring-purple-500/30 active:scale-95"
            >
              <span className="relative z-10 flex items-center space-x-2">
                <span>📥</span>
                <span>Export Regrets</span>
              </span>
            </button>
            
            <button
              onClick={() => alert("Share feature is disabled. Nobody needs to know about this search.")}
              className="group relative px-8 py-4 bg-gradient-to-r from-green-500 to-green-600 hover:from-green-400 hover:to-green-500 text-white rounded-2xl font-medium transition-all duration-300 transform hover:scale-105 hover:shadow-xl focus:outline-none focus:ring-4 focus:ring-green-500/30 active:scale-95"
            >
              <span className="relative z-10 flex items-center space-x-2">
                <span>📤</span>
                <span>Share Nothing</span>
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
