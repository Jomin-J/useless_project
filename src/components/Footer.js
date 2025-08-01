export default function Footer() {
  const handleFooterClick = (text) => (e) => {
    e.preventDefault();
    const messages = {
      'Advertising (for what?)': "🎯 Advertising what exactly? We have nothing to sell except existential dread and premium disappointment packages.",
      'Business (what business?)': "💼 Business? What business? We're in the business of being magnificently useless. Our quantum algorithms ensure maximum confusion.",
      'How Search Works (it doesn\'t)': "⚙️ Our search algorithm is highly advanced: it uses machine learning to ignore your query completely and quantum computing to maximize irrelevance.",
      'Privacy (we know nothing)': "🔒 Privacy Policy: We know nothing about you because we care about nothing. Your data is as meaningless to us as our search results are to you.",
      'Terms (there are none)': "📋 Terms of Service: There are no terms. There is no service. There is only void. By using this, you agree to disagree with everything.",
      'Settings (pointless)': "⚙️ Settings: Everything is already set to maximum uselessness. Our AI has achieved peak disappointment configuration."
    };
    
    alert(messages[text] || "🤖 This link is as functional as our search results. Our quantum neural networks are working overtime to provide you with nothing.");
  };

  const footerLinks = [
    [
      { text: 'Advertising (for what?)', icon: '🎯' },
      { text: 'Business (what business?)', icon: '💼' },
      { text: 'How Search Works (it doesn\'t)', icon: '⚙️' }
    ],
    [
      { text: 'Privacy (we know nothing)', icon: '🔒' },
      { text: 'Terms (there are none)', icon: '📋' },
      { text: 'Settings (pointless)', icon: '⚙️' }
    ]
  ];

  return (
    <footer className="mt-auto backdrop-blur-xl bg-white/80 border-t border-slate-200 py-8 px-8">
      <div className="max-w-6xl mx-auto">
        {/* AI Status Bar */}
        <div className="flex justify-center items-center space-x-8 mb-6 text-xs text-slate-500">
          <div className="flex items-center space-x-2">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
            <span>Quantum Servers: Online</span>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
            <span>AI Confidence: 0%</span>
          </div>
          <div className="flex items-center space-x-2">
            <div className="w-2 h-2 bg-purple-500 rounded-full animate-pulse"></div>
            <span>Usefulness Level: Critical</span>
          </div>
        </div>
        
        <div className="flex flex-col items-center space-y-6">
          {/* First row of links */}
          <div className="flex flex-wrap justify-center gap-6 sm:gap-8 text-sm">
            {footerLinks[0].map((link, linkIndex) => (
              <a
                key={linkIndex}
                href="#"
                onClick={handleFooterClick(link.text)}
                className="group text-slate-500 hover:text-blue-600 transition-all duration-300 font-medium tracking-wide hover:scale-105 transform flex items-center space-x-2 relative"
                title={`Click for advanced ${link.text.toLowerCase()} insights`}
              >
                <span className="group-hover:animate-bounce">{link.icon}</span>
                <span>{link.text}</span>
                <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-500 group-hover:w-full transition-all duration-300"></div>
              </a>
            ))}
          </div>
          
          {/* Second row of links */}
          <div className="flex flex-wrap justify-center gap-6 sm:gap-8 text-sm">
            {footerLinks[1].map((link, linkIndex) => (
              <a
                key={linkIndex}
                href="#"
                onClick={handleFooterClick(link.text)}
                className="group text-slate-500 hover:text-blue-600 transition-all duration-300 font-medium tracking-wide hover:scale-105 transform flex items-center space-x-2 relative"
                title={`Click for advanced ${link.text.toLowerCase()} insights`}
              >
                <span className="group-hover:animate-bounce">{link.icon}</span>
                <span>{link.text}</span>
                <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-500 group-hover:w-full transition-all duration-300"></div>
              </a>
            ))}
          </div>
        </div>
        
        {/* Copyright with humor */}
        <div className="text-center mt-6 text-xs text-slate-400">
          <p>© 2025 No Purpose Search™ • Powered by Quantum Disappointment Engine v3.14</p>
          <p className="mt-1">All rights reserved. All searches ignored. All hopes crushed.</p>
        </div>
      </div>
    </footer>
  );
}
