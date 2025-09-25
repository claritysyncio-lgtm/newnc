"use client";

import React, { createContext, useContext, useEffect, useState } from 'react';

type Theme = 'light' | 'dark';

interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<Theme>(() => {
    // Initialize theme from localStorage if available, otherwise default to light
    if (typeof window !== 'undefined') {
      const savedTheme = localStorage.getItem('theme') as Theme;
      return savedTheme || 'light';
    }
    return 'light';
  });
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (mounted) {
      localStorage.setItem('theme', theme);
      console.log('Applying theme:', theme);
      if (theme === 'dark') {
        document.documentElement.classList.add('dark');
        console.log('Added dark class to document');
      } else {
        document.documentElement.classList.remove('dark');
        console.log('Removed dark class from document');
      }
      console.log('Document classes:', document.documentElement.className);
    }
  }, [theme, mounted]);

  const toggleTheme = () => {
    console.log('Toggle theme called, current theme:', theme);
    setTheme(prev => {
      const newTheme = prev === 'light' ? 'dark' : 'light';
      console.log('Switching from', prev, 'to', newTheme);
      return newTheme;
    });
  };

  if (!mounted) {
    return <>{children}</>;
  }

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    // Fallback for SSR or when not wrapped in ThemeProvider
    return { theme: 'light' as Theme, toggleTheme: () => {} };
  }
  return context;
}
