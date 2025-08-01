'use client';

import { useState, useEffect, useRef } from 'react';

const uselessSuggestions = [
  "why does nothing work",
  "meaning of existence (spoiler: there isn't one)",
  "how to be productive (wrong place)",
  "best search engines (not this one)",
  "how to find answers (try somewhere else)",
  "what is the point of anything",
  "where did I go wrong in life",
  "is this real life or just fantasy",
  "why do I keep searching for nothing",
  "how to escape existential dread"
];

const filters = {
  timeWasted: [
    { value: "last_hour", label: "Last Hour", icon: "⏰" },
    { value: "last_day", label: "Last Day", icon: "📅" },
    { value: "forever", label: "Forever", icon: "♾️" }
  ],
  relevance: [
    { value: "irrelevant", label: "Irrelevant", icon: "🎭" },
    { value: "less_irrelevant", label: "Less Irrelevant", icon: "🤔" },
    { value: "utterly_random", label: "Utterly Random", icon: "🎲" }
  ],
  resultType: [
    { value: "broken_links", label: "Broken Links", icon: "🔗" },
    { value: "existential_memes", label: "Existential Memes", icon: "😵" },
    { value: "placeholder_text", label: "Placeholder Text", icon: "📝" }
  ]
};

export default function SearchBox({ query, setQuery, onSearch, onConfused, isSearching }) {
  const [showSuggestions, setShowSuggestions] = useState(false);
  const [showFilters, setShowFilters] = useState(false);
  const [selectedFilters, setSelectedFilters] = useState({
    timeWasted: "forever",
    relevance: "irrelevant",
    resultType: "broken_links"
  });
  const [cursorVisible, setCursorVisible] = useState(true);
  const searchInputRef = useRef(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setCursorVisible(prev => !prev);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      setShowSuggestions(false);
      onSearch();
    }
  };

  const handleInputChange = (e) => {
    setQuery(e.target.value);
    setShowSuggestions(e.target.value.length > 0);
  };

  const handleSuggestionClick = (suggestion) => {
    setQuery(suggestion);
    setShowSuggestions(false);
    searchInputRef.current?.focus();
  };

  const handleFilterChange = (category, value) => {
    setSelectedFilters(prev => ({
      ...prev,
      [category]: value
    }));
  };

  const getTooltipMessage = (category, value) => {
    const tooltips = {
      timeWasted: {
        last_hour: "Only the freshest disappointments",
        last_day: "Yesterday's regrets, today's problems",
        forever: "All of eternity's meaningless queries"
      },
      relevance: {
        irrelevant: "Perfect! Exactly what you don't need",
        less_irrelevant: "Still useless, but with style",
        utterly_random: "Chaos theory meets search algorithms"
      },
      resultType: {
        broken_links: "Links to nowhere, just like your hopes",
        existential_memes: "Funny because it's true (and depressing)",
        placeholder_text: "Lorem ipsum dolor sit... pointlessly"
      }
    };
    return tooltips[category][value];
  };

  return (
    <div className="w-full max-w-4xl mx-auto relative">
      {/* Main Search Container */}
      <div className="relative mb-8">
        {/* Glassmorphism container */}
        <div className="relative backdrop-blur-xl bg-white/80 border border-slate-200 rounded-3xl p-8 shadow-lg">
          
          {/* Search Input Area */}
          <div className="relative">
            <div className="flex items-center justify-center space-x-4 mb-6">
              {/* AI Status Indicator */}
              <div className="flex items-center space-x-2 text-blue-600">
                <div className="w-3 h-3 bg-blue-500 rounded-full animate-pulse"></div>
                <span className="text-sm font-medium">AI ENABLED</span>
              </div>
              
              {/* Quantum Status */}
              <div className="flex items-center space-x-2 text-purple-600">
                <div className="w-3 h-3 bg-purple-500 rounded-full animate-ping"></div>
                <span className="text-sm font-medium">QUANTUM READY</span>
              </div>
            </div>

            {/* Main Search Bar */}
            <div className="relative group">
              
              <div className="relative flex items-center bg-white/90 backdrop-blur-sm border border-slate-200 rounded-2xl px-6 py-4 shadow-md transition-all duration-300 hover:bg-white hover:shadow-lg focus-within:bg-white focus-within:border-blue-400 focus-within:shadow-lg">
                {/* Search Icon */}
                <div className="relative mr-4">
                  <svg 
                    className="w-7 h-7 text-blue-500 transition-all duration-300 group-focus-within:text-blue-600" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                    strokeWidth="2"
                  >
                    <circle cx="11" cy="11" r="8" />
                    <path d="m21 21-4.35-4.35" />
                  </svg>
                  {isSearching && (
                    <div className="absolute inset-0 border-2 border-blue-400 rounded-full animate-ping"></div>
                  )}
                </div>
                
                {/* Input Field */}
                <div className="flex-1 relative">
                  <input
                    ref={searchInputRef}
                    type="text"
                    value={query}
                    onChange={handleInputChange}
                    onKeyPress={handleKeyPress}
                    onFocus={() => setShowSuggestions(query.length > 0)}
                    placeholder="Ask the quantum void anything..."
                    className="w-full bg-transparent outline-none text-xl text-slate-800 placeholder-slate-400 font-light tracking-wide"
                    autoComplete="off"
                  />
                  {/* Blinking cursor effect */}
                  {query === "" && (
                    <div className={`absolute top-0 left-0 w-0.5 h-6 bg-blue-500 transition-opacity duration-100 ${cursorVisible ? 'opacity-100' : 'opacity-0'}`}></div>
                  )}
                </div>
                
                {/* Advanced Features Indicator */}
                <div className="ml-4 flex items-center space-x-2">
                  <button
                    onClick={() => setShowFilters(!showFilters)}
                    className="p-2 text-purple-500 hover:text-purple-600 transition-colors duration-200"
                    title="Advanced Uselessness Settings"
                  >
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 100 4m0-4v2m0-6V4" />
                    </svg>
                  </button>
                  
                  {isSearching && (
                    <div className="w-6 h-6 border-2 border-slate-200 border-t-blue-500 rounded-full animate-spin"></div>
                  )}
                </div>
              </div>
            </div>

            {/* Autocomplete Suggestions */}
            {showSuggestions && !isSearching && (
              <div className="absolute top-full left-0 right-0 mt-2 bg-white/95 backdrop-blur-xl border border-slate-200 rounded-2xl shadow-2xl z-50 max-h-64 overflow-auto">
                {uselessSuggestions
                  .filter(suggestion => 
                    suggestion.toLowerCase().includes(query.toLowerCase()) ||
                    query.toLowerCase().includes(suggestion.toLowerCase().split(' ')[0])
                  )
                  .slice(0, 6)
                  .map((suggestion, index) => (
                    <div
                      key={index}
                      onClick={() => handleSuggestionClick(suggestion)}
                      className="px-6 py-3 text-slate-700 hover:bg-blue-50 cursor-pointer transition-colors duration-200 first:rounded-t-2xl last:rounded-b-2xl flex items-center space-x-3"
                    >
                      <svg className="w-4 h-4 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <circle cx="11" cy="11" r="8" />
                        <path d="m21 21-4.35-4.35" />
                      </svg>
                      <span className="font-light">{suggestion}</span>
                    </div>
                  ))}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Advanced Filters */}
      {showFilters && (
        <div className="mb-8 animate-slide-up">
          <div className="backdrop-blur-xl bg-white/80 border border-slate-200 rounded-2xl p-6 shadow-xl">
            <h3 className="text-slate-800 font-medium mb-4 flex items-center">
              <span className="mr-2">⚙️</span>
              Advanced Disappointment Parameters
            </h3>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {Object.entries(filters).map(([category, options]) => (
                <div key={category} className="space-y-2">
                  <label className="block text-slate-600 text-sm font-medium capitalize">
                    {category.replace('_', ' ')}
                  </label>
                  <div className="space-y-1">
                    {options.map((option) => (
                      <label
                        key={option.value}
                        className="flex items-center space-x-3 p-2 rounded-lg hover:bg-blue-50 cursor-pointer transition-colors duration-200 group"
                        title={getTooltipMessage(category, option.value)}
                      >
                        <input
                          type="radio"
                          name={category}
                          value={option.value}
                          checked={selectedFilters[category] === option.value}
                          onChange={() => handleFilterChange(category, option.value)}
                          className="w-4 h-4 text-blue-600 bg-white border-slate-300 focus:ring-blue-500 focus:ring-2"
                        />
                        <span className="text-slate-700 text-sm flex items-center space-x-2 group-hover:text-slate-800 transition-colors duration-200">
                          <span>{option.icon}</span>
                          <span>{option.label}</span>
                        </span>
                      </label>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* Search Buttons */}
      <div className="flex justify-center gap-8 flex-wrap">
        <button
          onClick={onSearch}
          disabled={isSearching || !query.trim()}
          className="group relative px-10 py-4 bg-gradient-to-r from-blue-500 to-blue-600 hover:from-blue-600 hover:to-blue-700 text-white rounded-2xl font-medium disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 transform hover:scale-105 hover:shadow-xl focus:outline-none focus:ring-4 focus:ring-blue-500/30 active:scale-95 shadow-lg"
        >
          <span className="relative z-10 flex items-center space-x-2">
            <span>🔍</span>
            <span>Quantum Search</span>
          </span>
          <div className="absolute inset-0 bg-gradient-to-r from-white/0 to-white/0 group-hover:from-white/20 group-hover:to-white/10 rounded-2xl transition-all duration-300"></div>
        </button>
        
        <button
          onClick={onConfused}
          disabled={isSearching}
          className="group relative px-10 py-4 bg-gradient-to-r from-purple-500 to-purple-600 hover:from-purple-600 hover:to-purple-700 text-white rounded-2xl font-medium disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 transform hover:scale-105 hover:shadow-xl focus:outline-none focus:ring-4 focus:ring-purple-500/30 active:scale-95 shadow-lg"
        >
          <span className="relative z-10 flex items-center space-x-2">
            <span>🤯</span>
            <span>I'm Feeling Confused</span>
          </span>
          <div className="absolute inset-0 bg-gradient-to-r from-white/0 to-white/0 group-hover:from-white/20 group-hover:to-white/10 rounded-2xl transition-all duration-300"></div>
        </button>
      </div>
    </div>
  );
}
