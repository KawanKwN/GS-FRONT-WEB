import React from "react";

const SearchFilters = ({
  searchTerm,
  onSearchChange,
  areaFilter,
  onAreaChange,
  cityFilter,
  onCityChange,
  techFilter,
  onTechChange,
  areas,
  cities
}) => {
  return (
    <section className="max-w-6xl mx-auto px-4 mt-6 mb-4">
      <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-4 md:p-5 shadow-sm flex flex-col gap-4">
        <div className="flex flex-col md:flex-row gap-3 md:items-center justify-between">
          <h2 className="text-lg font-medium text-slate-900 dark:text-slate-100">
            Explore talentos do futuro
          </h2>
          <p className="text-xs md:text-sm text-slate-500 dark:text-slate-400">
            Busque por área, cidade ou tecnologia para encontrar o profissional ideal.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-3">
          <input
            type="text"
            placeholder="Buscar por nome ou palavra-chave..."
            value={searchTerm}
            onChange={(e) => onSearchChange(e.target.value)}
            className="col-span-1 md:col-span-2 px-3 py-2 rounded-xl border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />

          <select
            value={areaFilter}
            onChange={(e) => onAreaChange(e.target.value)}
            className="px-3 py-2 rounded-xl border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
          >
            <option value="">Área</option>
            {areas.map((area) => (
              <option key={area} value={area}>
                {area}
              </option>
            ))}
          </select>

          <select
            value={cityFilter}
            onChange={(e) => onCityChange(e.target.value)}
            className="px-3 py-2 rounded-xl border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
          >
            <option value="">Cidade</option>
            {cities.map((city) => (
              <option key={city} value={city}>
                {city}
              </option>
            ))}
          </select>

          <input
            type="text"
            placeholder="Filtrar por tecnologia (ex: React, IA)..."
            value={techFilter}
            onChange={(e) => onTechChange(e.target.value)}
            className="col-span-1 md:col-span-1 px-3 py-2 rounded-xl border border-slate-300 dark:border-slate-700 bg-slate-50 dark:bg-slate-800 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 md:col-start-4"
          />
        </div>
      </div>
    </section>
  );
};

export default SearchFilters;
