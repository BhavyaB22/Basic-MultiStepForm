import { useState } from 'react';

const Layout = ({ children }) => {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={darkMode ? 'dark' : ''}>
      <div className="min-h-screen bg-white dark:bg-gray-900 text-black dark:text-white">
        <header className="p-4 bg-gray-800 text-white">
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="px-4 py-2 bg-blue-500 text-white rounded"
          >
          </button>
        </header>
        <main>{children}</main>
      </div>
    </div>
  );
};

export default Layout;
