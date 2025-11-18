import React from "react";

const DarkModeToggle = ({ darkMode, onToggle }) => {
  return (
    <button
      onClick={onToggle}
      className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-slate-300 dark:border-slate-700 text-xs md:text-sm text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 transition"
    >
      <span className="text-lg">{darkMode ? "🌙" : "☀️"}</span>
      <span>{darkMode ? "Modo escuro" : "Modo claro"}</span>
    </button>
  );
};

export default DarkModeToggle;
