const ThemeToggle = ({ isDarkMode, setIsDarkMode }) => {
    const SunIcon = () => (
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <circle cx="12" cy="12" r="5"></circle>
            <line x1="12" y1="1" x2="12" y2="3"></line>
            <line x1="12" y1="21" x2="12" y2="23"></line>
            <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line>
            <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line>
            <line x1="1" y1="12" x2="3" y2="12"></line>
            <line x1="21" y1="12" x2="23" y2="12"></line>
            <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line>
            <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>
        </svg>
    );

    const MoonIcon = () => (
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
        </svg>
    );

    return (
        <button
            onClick={() => setIsDarkMode(!isDarkMode)}
            className={`relative inline-flex items-center h-8 w-14 rounded-full transition-colors duration-300 ${isDarkMode ? 'bg-gray-600' : 'bg-yellow-400'}`}
        >
            <span className="sr-only">Toggle Theme</span>
            <span
                className={`absolute inset-y-0 left-0 flex items-center justify-center w-1/2 h-full transition-opacity duration-300 ${!isDarkMode ? 'opacity-100' : 'opacity-0'}`}
            >
                <SunIcon className="text-white" />
            </span>
            <span
                className={`absolute inset-y-0 right-0 flex items-center justify-center w-1/2 h-full transition-opacity duration-300 ${isDarkMode ? 'opacity-100' : 'opacity-0'}`}
            >
                <MoonIcon className="text-white" />
            </span>
            <span
                className={`absolute top-1 left-1 w-6 h-6 bg-white rounded-full shadow-md transform transition-transform duration-300 ${isDarkMode ? 'translate-x-6' : 'translate-x-0'}`}
            ></span>
        </button>
    );
};

export default ThemeToggle;