'use client';

import { useState, useEffect } from 'react';
import Header from './Header';
import SearchBox from './SearchBox';
import Results from './Results';
import Footer from './Footer';

// Sarcastic and philosophical responses
const responses = [
  {
    title: "The Answer Is Within You",
    url: "www.probably-not-here.com",
    description: "Nice question. Now you think about why you need the answer. Maybe the real search was the friends we made along the way... or not."
  },
  {
    title: "Big Brain Moment",
    url: "www.wow-such-smart.edu",
    description: "Wow. Big brain stuff. Good luck figuring it out. I'm sure the internet has better things to do than answer this particular query."
  },
  {
    title: "Philosophy 101: Does It Even Matter?",
    url: "www.existential-crisis.org",
    description: "Ask yourself… does it even matter? In the grand scheme of the universe, your question is just a tiny blip in the cosmic void."
  },
  {
    title: "The Void Stares Back",
    url: "www.abyss-gazing.com",
    description: "Maybe don't ask me everything. I'm not your personal Wikipedia, and honestly, I'm having an existential crisis myself right now."
  },
  {
    title: "Enlightenment Through Confusion",
    url: "www.very-helpful-indeed.net",
    description: "The answer is within you. Probably. Or maybe it's in a fortune cookie. Who knows? Life is mysterious like that."
  },
  {
    title: "Advanced Googling Techniques",
    url: "www.let-me-google-that.sarcasm",
    description: "Have you tried asking someone who actually knows what they're talking about? Revolutionary concept, I know."
  },
  {
    title: "The Meaning of Your Search",
    url: "www.deep-thoughts.philosophy",
    description: "Your search query has been received, processed, and promptly ignored. Thank you for your contribution to the digital void."
  },
  {
    title: "Reality Check Department",
    url: "www.harsh-truths.reality",
    description: "Sometimes the best answer is no answer at all. Embrace the uncertainty. Become one with the confusion."
  },
  {
    title: "Wisdom from the Digital Oracle",
    url: "www.ancient-wisdom.exe",
    description: "An ancient proverb says: 'Those who search for everything find nothing.' I just made that up, but it sounds wise, doesn't it?"
  },
  {
    title: "The Ultimate Guide to Nothing",
    url: "www.comprehensive-emptiness.void",
    description: "Congratulations! You've successfully searched for something. Unfortunately, finding something useful requires a different search engine."
  }
];

// Even more sarcastic responses for "I'm Feeling Confused"
const confusedResponses = [
  {
    title: "Maximum Confusion Achieved",
    url: "www.totally-lost.now",
    description: "Perfect! You've reached peak confusion. Mission accomplished. Now you can join the rest of us who have no idea what's going on."
  },
  {
    title: "Confusion Level: Expert",
    url: "www.professional-bewilderment.com",
    description: "You've successfully unlocked the advanced level of not knowing things. Your certificate of confusion is in the mail (it's not)."
  },
  {
    title: "Welcome to the Club",
    url: "www.confused-people-unite.org",
    description: "Feeling confused is the first step to... well, feeling more confused. At least you're honest about it. That's refreshing."
  },
  {
    title: "The Art of Being Lost",
    url: "www.masterful-confusion.art",
    description: "Being confused is an art form, and you're clearly a master. Embrace the chaos. Dance with the uncertainty. Celebrate the bewilderment."
  },
  {
    title: "Confusion Consultation Services",
    url: "www.professional-confusion.biz",
    description: "Need more confusion in your life? You've come to the right place. We specialize in making simple things incredibly complicated."
  }
];

// Loading messages
const loadingMessages = [
  "Searching the depths of the void...",
  "Consulting the council of unhelpful spirits...",
  "Asking the universe (it's not responding)...",
  "Checking the library of useless knowledge...",
  "Analyzing your questionable life choices...",
  "Pretending to look for answers...",
  "Summoning the ghosts of productivity...",
  "Calculating the probability of usefulness (it's low)...",
  "Disturbing the peace of sleeping servers...",
  "Searching for the meaning of your search..."
];

// Easter egg terms
const easterEggTerms = {
  'meaning of life': "42. Obviously. Did you really need a search engine for that?",
  'google': "You're looking for Google? This is the dollar store version of Google.",
  'help': "The first step is admitting you have a problem. The second step is finding a better search engine.",
  'why': "Because the universe has a sense of humor, and you're the punchline.",
  'how': "Very carefully, with a lot of confusion, and absolutely no guarantee of success.",
  'what': "What indeed. That's the real question, isn't it?",
  'who': "Not me. I'm just a useless search engine with delusions of grandeur.",
  'when': "Whenever you stop asking pointless questions. So... never.",
  'where': "Somewhere over the rainbow, probably. Or in your imagination.",
  'ai': "Artificial Intelligence? More like Artificial Uselessness. You're looking at it.",
  'chatgpt': "Sorry, I'm the discount version. No refunds.",
  'search engine': "You found one! It's terrible, but technically functional.",
  'stackoverflow': "Even Stack Overflow would be more helpful than this, and that's saying something."
};

function getRandomResponses(responseArray, count) {
  const shuffled = [...responseArray].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, count);
}

export default function SearchEngine() {
  const [query, setQuery] = useState('');
  const [isSearching, setIsSearching] = useState(false);
  const [showResults, setShowResults] = useState(false);
  const [currentResults, setCurrentResults] = useState([]);
  const [searchStats, setSearchStats] = useState({ count: 0, time: 0 });
  const [currentLoadingMessage, setCurrentLoadingMessage] = useState('');

  // Console easter egg
  useEffect(() => {
    console.log("%cWelcome to No Purpose Search!", "color: #4285f4; font-size: 20px; font-weight: bold;");
    console.log("Congratulations on opening the console. You're definitely the type of person who would use this search engine.");
    console.log("Fun fact: This search engine is exactly as useful as you'd expect.");
    console.log("Try typing 'helpme()' for absolutely no additional help.");

    window.helpme = function() {
      console.log("Did you really think that would work? This is a USELESS search engine.");
      console.log("But since you asked nicely, here's some useless help:");
      console.log("- Type anything in the search box for philosophical disappointment");
      console.log("- Click 'I'm Feeling Confused' for maximum bewilderment");
      console.log("- Search for 'meaning of life' for the obvious answer");
      console.log("There. Now you're as confused as everyone else.");
    };
  }, []);

  const performSearch = (isConfused = false) => {
    const trimmedQuery = query.trim();
    
    if (!trimmedQuery || isSearching) {
      return;
    }

    // Check for easter egg terms
    const lowerQuery = trimmedQuery.toLowerCase();
    for (const [term, response] of Object.entries(easterEggTerms)) {
      if (lowerQuery.includes(term)) {
        showEasterEggResult(response);
        return;
      }
    }

    startSearch(isConfused);
  };

  const startSearch = (isConfused = false) => {
    setIsSearching(true);
    setShowResults(true);
    
    // Random loading message
    const randomLoadingMsg = loadingMessages[Math.floor(Math.random() * loadingMessages.length)];
    setCurrentLoadingMessage(isConfused ? "Maximizing your confusion levels..." : randomLoadingMsg);
    
    // Simulate search time
    const searchDuration = Math.random() * 2000 + 1000; // 1-3 seconds
    
    setTimeout(() => {
      showSearchResults(isConfused);
      setIsSearching(false);
    }, searchDuration);
  };

  const showSearchResults = (isConfused = false) => {
    const responseArray = isConfused ? confusedResponses : responses;
    const numResults = Math.floor(Math.random() * 5) + 3; // 3-7 results
    const selectedResponses = getRandomResponses(responseArray, numResults);
    
    // Calculate fake search time
    const searchTimeMs = Math.random() * 0.5 + 0.1; // 0.1-0.6 seconds
    
    setCurrentResults(selectedResponses);
    setSearchStats({ count: numResults, time: searchTimeMs.toFixed(2) });
  };

  const showEasterEggResult = (message) => {
    setIsSearching(true);
    setShowResults(true);
    setCurrentLoadingMessage("Processing your existential query...");
    
    setTimeout(() => {
      setCurrentResults([{
        title: "Deep Philosophical Insight",
        url: "www.existential-void.com",
        description: message
      }]);
      setSearchStats({ count: 1, time: "0.00" });
      setIsSearching(false);
    }, 1000);
  };

  const feelingConfused = () => {
    if (isSearching) return;
    
    setQuery("What is the meaning of confusion?");
    setTimeout(() => {
      performSearch(true);
    }, 100);
  };

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 relative overflow-hidden">
      {/* Animated background particles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-200/30 rounded-full blur-3xl animate-float"></div>
        <div className="absolute top-3/4 right-1/4 w-96 h-96 bg-purple-200/20 rounded-full blur-3xl animate-float delay-200"></div>
        <div className="absolute bottom-1/4 left-1/2 w-80 h-80 bg-indigo-200/25 rounded-full blur-3xl animate-float delay-100"></div>
      </div>
      
      <Header />
      
      <main className="flex-1 flex flex-col items-center px-4 py-8 relative z-10">
        {!showResults && (
          <div className="animate-fade-in w-full max-w-6xl text-center flex-1 flex flex-col justify-center">
            <div className="mb-16">
              <div className="relative mb-8">
                <h1 className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-thin bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-700 bg-clip-text text-transparent mb-6 tracking-tight leading-tight">
                  No Purpose Search
                </h1>
              </div>
              <p className="text-2xl text-slate-600 font-light tracking-wide animate-slide-up delay-300 mb-4">
                Advanced AI-Powered <span className="text-blue-600 font-medium">Uselessness</span>
              </p>
              <p className="text-lg text-slate-500 font-light animate-slide-up delay-500">
                Quantum-enhanced confusion algorithms • Real-time disappointment analytics
              </p>
            </div>
            
            <div className="animate-slide-up delay-700 flex justify-center">
              <SearchBox
                query={query}
                setQuery={setQuery}
                onSearch={() => performSearch()}
                onConfused={feelingConfused}
                isSearching={isSearching}
              />
            </div>
          </div>
        )}
        
        {showResults && (
          <div className="w-full max-w-6xl mx-auto animate-fade-in pt-8">
            <Results
              isSearching={isSearching}
              loadingMessage={currentLoadingMessage}
              results={currentResults}
              searchStats={searchStats}
              query={query}
            />
          </div>
        )}
      </main>
      
      <Footer />
    </div>
  );
}
