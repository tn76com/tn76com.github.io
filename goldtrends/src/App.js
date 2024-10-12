import React from 'react';
import './App.css';
import TrendsContent from './components/TrendsContent';

function App() {
  return (
    <div className="App">
      <header>
        <h1>Gold Trends 2024-2025</h1>
      </header>
      <main>
        <TrendsContent />
        <div className="adsense-container">
          <ins className="adsbygoogle"
               style={{ display: 'block' }}
               data-ad-client="YOUR_ADSENSE_CLIENT_ID"
               data-ad-slot="YOUR_ADSENSE_SLOT_ID"
               data-ad-format="auto"></ins>
        </div>
      </main>
      <footer>
        <p>© 2024 Gold Trends. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default App;
