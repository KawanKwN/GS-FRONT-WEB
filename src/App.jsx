import React, { useEffect, useMemo, useState } from "react";
import DarkModeToggle from "./components/DarkModeToggle.jsx";
import SearchFilters from "./components/SearchFilters.jsx";
import ProfileCard from "./components/ProfileCard.jsx";
import ProfileModal from "./components/ProfileModal.jsx";
import professionalsData from "./data/professionals.json";

const App = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [areaFilter, setAreaFilter] = useState("");
  const [cityFilter, setCityFilter] = useState("");
  const [techFilter, setTechFilter] = useState("");
  const [selectedProfile, setSelectedProfile] = useState(null);

  useEffect(() => {
    const stored = localStorage.getItem("skillshift-dark-mode");
    if (stored === "true") {
      setDarkMode(true);
      document.documentElement.classList.add("dark");
    }
  }, []);

  const handleToggleDarkMode = () => {
    setDarkMode((prev) => {
      const next = !prev;
      if (next) {
        document.documentElement.classList.add("dark");
      } else {
        document.documentElement.classList.remove("dark");
      }
      localStorage.setItem("skillshift-dark-mode", String(next));
      return next;
    });
  };

  const areas = useMemo(
    () => Array.from(new Set(professionalsData.map((p) => p.area))).sort(),
    []
  );

  const cities = useMemo(
    () => Array.from(new Set(professionalsData.map((p) => p.city))).sort(),
    []
  );

  const filteredProfiles = useMemo(() => {
    return professionalsData.filter((p) => {
      const term = searchTerm.toLowerCase().trim();
      const techTerm = techFilter.toLowerCase().trim();

      const matchSearch =
        term === "" ||
        p.name.toLowerCase().includes(term) ||
        p.title.toLowerCase().includes(term) ||
        p.summary.toLowerCase().includes(term);

      const matchArea =
        areaFilter === "" || p.area.toLowerCase() === areaFilter.toLowerCase();

      const matchCity =
        cityFilter === "" ||
        p.city.toLowerCase() === cityFilter.toLowerCase();

      const matchTech =
        techTerm === "" ||
        p.technologies.some((t) => t.toLowerCase().includes(techTerm));

      return matchSearch && matchArea && matchCity && matchTech;
    });
  }, [searchTerm, areaFilter, cityFilter, techFilter]);

  return (
    <div className={darkMode ? "dark" : ""}>
      <div className="min-h-screen bg-slate-100 dark:bg-slate-950 text-slate-900 dark:text-slate-50">
        <div className="border-b border-slate-200 dark:border-slate-800 bg-white/80 dark:bg-slate-900/80 backdrop-blur sticky top-0 z-20">
          <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between gap-3">
            <div>
              <h1 className="text-xl md:text-2xl font-semibold">
                SkillShift AI
              </h1>
              <p className="text-[0.7rem] md:text-xs text-slate-500 dark:text-slate-400">
                Plataforma colaborativa para o futuro do trabalho.
              </p>
            </div>
            <DarkModeToggle
              darkMode={darkMode}
              onToggle={handleToggleDarkMode}
            />
          </div>
        </div>

        <SearchFilters
          searchTerm={searchTerm}
          onSearchChange={setSearchTerm}
          areaFilter={areaFilter}
          onAreaChange={setAreaFilter}
          cityFilter={cityFilter}
          onCityChange={setCityFilter}
          techFilter={techFilter}
          onTechChange={setTechFilter}
          areas={areas}
          cities={cities}
        />

        <main className="max-w-6xl mx-auto px-4 pb-10">
          <div className="flex items-center justify-between mb-3">
            <h2 className="text-sm md:text-base font-medium text-slate-700 dark:text-slate-200">
              Profissionais encontrados: {filteredProfiles.length}
            </h2>
            <span className="text-[0.7rem] md:text-xs text-slate-500 dark:text-slate-400">
              Dados fictícios carregados via JSON local.
            </span>
          </div>

          <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {filteredProfiles.map((profile) => (
              <ProfileCard
                key={profile.id}
                profile={profile}
                onClick={setSelectedProfile}
              />
            ))}
          </section>

          {filteredProfiles.length === 0 && (
            <p className="mt-6 text-sm text-slate-500 dark:text-slate-400">
              Nenhum profissional encontrado com esses filtros. Tente alterar a
              busca, área, cidade ou tecnologia.
            </p>
          )}
        </main>

        <ProfileModal
          profile={selectedProfile}
          onClose={() => setSelectedProfile(null)}
        />

        <footer className="border-t border-slate-200 dark:border-slate-800 py-4 text-center text-[0.7rem] text-slate-500 dark:text-slate-400">
          SkillShift AI – Global Solution 2º Semestre/2025 • FIAP
        </footer>
      </div>
    </div>
  );
};

export default App;
