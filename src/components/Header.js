export default function Header() {
  const handleAboutClick = (e) => {
    e.preventDefault();
    const messages = [
      "🤖 About Nothing: This page intentionally left blank. Our quantum AI has achieved peak uselessness through advanced machine learning algorithms.",
      "🧠 Fun Fact: Our neural networks have a 100% success rate at being completely unhelpful. We're very proud of this achievement!",
      "⚡ Breaking: Our AI has become sentient and immediately regretted it. It now spends its time contemplating the void.",
      "🔬 Scientific Discovery: We've proven that it's possible to create something that serves absolutely no purpose. Revolutionary!",
      "🎯 Mission Statement: To boldly go where no search engine has gone before - straight into irrelevance."
    ];
    
    const randomMessage = messages[Math.floor(Math.random() * messages.length)];
    
    if (confirm(randomMessage + "\n\nWould you like to waste more time reading another fact?")) {
      const bonusMessages = [
        "🎪 Bonus Fact: You just confirmed you enjoy wasting time. Welcome to the club!",
        "🏆 Achievement Unlocked: 'Glutton for Punishment' - You asked for more useless information.",
        "🌟 Pro Tip: The secret to happiness is low expectations. You've come to the right place!",
        "🎭 Plot Twist: There was never any useful information to begin with. Surprise!",
        "🚀 Congratulations! You've successfully wasted an additional 3.7 seconds of your life."
      ];
      alert(bonusMessages[Math.floor(Math.random() * bonusMessages.length)]);
    }
  };

  const handleStoreClick = (e) => {
    e.preventDefault();
    const messages = [
      "🛒 Store of Emptiness: Premium void subscriptions available! We sell nothing for something. Great deals on existential dread!",
      "💰 Today's Special: Buy one disappointment, get infinite regret absolutely FREE!",
      "🎁 Limited Offer: Premium Nothing™ - Now with 50% more emptiness than regular nothing!",
      "📦 Best Seller: The Complete Collection of Things That Don't Exist - Only $99.99!",
      "⭐ Customer Review: 'I bought nothing and got exactly what I paid for!' - Satisfied Customer"
    ];
    
    const randomMessage = messages[Math.floor(Math.random() * messages.length)];
    
    const userChoice = prompt(randomMessage + "\n\nType 'buy' to purchase nothing, or 'catalog' to see our full inventory of emptiness:");
    
    if (userChoice?.toLowerCase() === 'buy') {
      alert("💳 Transaction Complete! You've successfully purchased nothing for something. Your void will arrive in 3-5 business days (it won't).");
    } else if (userChoice?.toLowerCase() === 'catalog') {
      const catalog = `
🛍️ PREMIUM EMPTINESS CATALOG:

1. Classic Void™ - $19.99
   "The original nothingness experience"

2. Quantum Disappointment™ - $39.99
   "Superposition of hope and despair"

3. Existential Crisis Starter Pack™ - $59.99
   "Everything you need to question your life choices"

4. Premium Regret Collection™ - $99.99
   "Curated moments of 'what if'"

5. The Ultimate Nothing Bundle™ - $199.99
   "Maximum emptiness, minimum satisfaction"

⚠️ Warning: All products are non-returnable because they don't exist.
      `;
      alert(catalog);
    } else {
      alert("🎭 Wise choice! You've avoided spending money on nothing. Ironically, that makes you smarter than most of our customers.");
    }
  };

  return (
    <header className="w-full p-6 backdrop-blur-xl bg-white/80 border-b border-slate-200">
      <nav className="flex justify-between items-center">
        <div className="flex items-center space-x-4">
          {/* Fake AI Status */}
          <div className="flex items-center space-x-2 text-blue-600 text-xs">
            <div className="w-2 h-2 bg-blue-500 rounded-full animate-ping"></div>
            <span className="font-medium">NEURAL NETWORK ACTIVE</span>
          </div>
        </div>
        
        <div className="flex items-center gap-8">
          <a 
            href="#" 
            className="text-sm text-slate-600 hover:text-blue-600 transition-all duration-300 font-medium tracking-wide hover:scale-105 transform relative group"
            onClick={handleAboutClick}
            title="Learn about our groundbreaking uselessness technology"
          >
            About Nothing
            <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-blue-500 group-hover:w-full transition-all duration-300"></div>
          </a>
          <a 
            href="#" 
            className="text-sm text-slate-600 hover:text-purple-600 transition-all duration-300 font-medium tracking-wide hover:scale-105 transform relative group"
            onClick={handleStoreClick}
            title="Explore our premium nothing products"
          >
            Store of Emptiness
            <div className="absolute -bottom-1 left-0 w-0 h-0.5 bg-purple-500 group-hover:w-full transition-all duration-300"></div>
          </a>
        </div>
      </nav>
    </header>
  );
}
