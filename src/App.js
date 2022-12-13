import React from 'react';

// =========== Global Styles ========== \\
import './assets/styles/global.style.scss'

// =========== Components ========== \\
import Navigation from './components/navigation/navigation.js'

// =========== Pages ========== \\
import HomePage from './pages/home/homePage.js'


function App() {
  return (
    <div className='wrapped'>
      <header>
        <Navigation />
      </header>
      <main>
        <HomePage />
      </main>
    </div>
  );
}

export default App;
