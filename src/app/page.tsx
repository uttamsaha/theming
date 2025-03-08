"use client";

import { useEffect, useState } from "react";

export default function Home() {
  const [dark, setDark] = useState<boolean | null>(null); // Prevents SSR mismatch

  useEffect(() => {
    const storedTheme = localStorage.getItem("theme");
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;

    // Set theme based on stored preference or system preference
    if (storedTheme) {
      setDark(storedTheme === "dark");
    } else {
      setDark(prefersDark);
    }

    // Listen for system theme changes
    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");
    const handleChange = (e: MediaQueryListEvent) => {
      setDark(e.matches);
      localStorage.setItem("theme", e.matches ? "dark" : "light");
    };

    mediaQuery.addEventListener("change", handleChange);
    return () => mediaQuery.removeEventListener("change", handleChange);
  }, []);

  useEffect(() => {
    if (dark === null) return; // Prevent updating before theme is set

    if (dark) {
      document.documentElement.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  }, [dark]);

  const handleDarkMode = () => {
    setDark((prev) => !prev);
  };

  return (
    <div>
      <div className="h-screen cursor-pointer bg-white text-gray-700 dark:text-white dark:bg-black">
        <div className="max-w-7xl mx-auto dark:bg-black dark:text-white text-gray-700">
          <div className="flex items-center justify-between p-4">
            <nav>Logo</nav>
            {dark !== null && ( // Prevents hydration issues
              <button
                onClick={handleDarkMode}
                className="bg-black text-white rounded px-4 py-1.5 dark:bg-white dark:text-black"
              >
                {dark ? "Light" : "Dark"}
              </button>
            )}
          </div>

          <p className="py-4 dark:text-white">
            Lorem ipsum dolor sit amet consectetur adipisicing elit...
          </p>
        </div>
      </div>
    </div>
  );
}
