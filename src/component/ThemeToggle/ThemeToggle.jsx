import React from 'react';
import { useTheme } from '../../context/ThemeContext';

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();

  const getIcon = () => {
    switch (theme) {
      case 'light':
        return 'ri-sun-line';
      case 'dark':
        return 'ri-moon-line';
      case 'system':
        return 'ri-computer-line';
      default:
        return 'ri-sun-line';
    }
  };

  const getTitle = () => {
    switch (theme) {
      case 'light':
        return 'Switch to Dark Mode';
      case 'dark':
        return 'Switch to System Mode';
      case 'system':
        return 'Switch to Light Mode';
      default:
        return 'Toggle Theme';
    }
  };

  return (
    <button
      onClick={toggleTheme}
      className="p-2 rounded-lg text-smallTextColor dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-200 flex items-center justify-center"
      title={getTitle()}
      aria-label={getTitle()}
    >
      <i className={`${getIcon()} text-xl`}></i>
    </button>
  );
};

export default ThemeToggle;
