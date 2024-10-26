"use client";
import { useState, useEffect } from "react";
import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";
import { Button } from "./ui/button";
const ThemeSwitcher = () => {
  const [mounted, setMounted] = useState(false);
  const { setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <div className="flex w-[15%] items-center justify-center gap-4 ">
      <Button
        variant="ghost"
        className="flex items-center "
        onClick={() => setTheme("light")}
        aria-label="Theme toggle"
      >
        <Sun className="mr-2 h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all  " />
      </Button>
      <Button
        variant="ghost"
        className="flex items-center gap-4"
        onClick={() => setTheme("dark")}
        aria-label="Theme toggle"
      >
        <Moon className="mr-2 h-[1.2rem] w-[1.2rem] rotate-90 scale-100 transition-all dark:rotate-0 " />
      </Button>
    </div>
  );
};

export default ThemeSwitcher;
