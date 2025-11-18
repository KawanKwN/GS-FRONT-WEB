import React from "react";

const ProfileCard = ({ profile, onClick }) => {
  return (
    <button
      onClick={() => onClick(profile)}
      className="text-left bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-4 flex flex-col gap-3 hover:shadow-md hover:-translate-y-0.5 transition transform"
    >
      <div className="flex items-center gap-3">
        <img
          src={profile.photo}
          alt={profile.name}
          className="w-12 h-12 rounded-full bg-slate-200 dark:bg-slate-700"
        />
        <div>
          <h3 className="font-semibold text-slate-900 dark:text-slate-50">
            {profile.name}
          </h3>
          <p className="text-xs text-slate-500 dark:text-slate-400">
            {profile.title}
          </p>
          <p className="text-xs text-slate-500 dark:text-slate-400">
            {profile.city} • {profile.area}
          </p>
        </div>
      </div>

      <div className="flex flex-wrap gap-1 mt-1">
        {profile.technologies.slice(0, 3).map((tech) => (
          <span
            key={tech}
            className="inline-flex items-center px-2 py-0.5 rounded-full bg-indigo-50 dark:bg-indigo-900/40 text-[0.65rem] font-medium text-indigo-700 dark:text-indigo-200"
          >
            {tech}
          </span>
        ))}
      </div>

      <p className="text-xs text-slate-600 dark:text-slate-300 line-clamp-2">
        {profile.summary}
      </p>
    </button>
  );
};

export default ProfileCard;
