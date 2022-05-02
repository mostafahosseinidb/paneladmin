import React, { useState } from 'react';
import { BrowserRouter } from 'react-router-dom';
import AppRoute from './route'
import './assets/css/index.css'
function App() {
  const [darkactive, setdarkactive] = useState(Boolean);

  return (
    <BrowserRouter >
      <div className={darkactive ? 'dark' : 'light'}>
        <AppRoute />
        <div data-url="http://www.google.com" className="dark-mode-switcher cursor-pointer shadow-md fixed bottom-0 right-0 box dark:bg-dark-2 border rounded-full w-40 h-12 flex items-center justify-center z-50 mb-10 mr-10" >
          <div className="mr-4 text-gray-700 dark:text-gray-300">Dark Mode</div>
          <div className={darkactive ? 'dark-mode-switcher__toggle dark-mode-switcher__toggle--active border ' : 'dark-mode-switcher__toggle  border'} onClick={() => { setdarkactive(!darkactive) }}></div>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
