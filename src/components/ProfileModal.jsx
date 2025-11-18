
import React from "react";

const ProfileModal = ({ profile, onClose }) => {
  const [message, setMessage] = React.useState("");

  const handleSendMessage = () => {
    if (!message.trim()) {
      alert("Digite uma mensagem antes de enviar.");
      return;
    }
    alert("Mensagem enviada!");
    setMessage("");
  };

  if (!profile) return null;

  return (
    <div className="fixed inset-0 z-30 flex items-center justify-center bg-black/40 p-4">
      <div className="bg-white dark:bg-slate-900 text-slate-900 dark:text-slate-50 
                      w-full max-w-3xl rounded-2xl shadow-xl overflow-hidden">

        {/* Header */}
        <div className="p-5 border-b border-slate-200 dark:border-slate-700 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <img src={profile.photo} alt={profile.name} 
                 className="w-14 h-14 rounded-full bg-slate-200"/>
            <div>
              <h2 className="text-xl font-semibold">{profile.name}</h2>
              <p className="text-sm text-slate-500 dark:text-slate-400">
                {profile.title} • {profile.city}
              </p>
            </div>
          </div>

          <button onClick={onClose}
                  className="text-slate-400 hover:text-slate-200 text-2xl">✕</button>
        </div>

        {/* Body */}
        <div className="p-6 space-y-6 max-h-[70vh] overflow-y-auto">

          {/* Summary */}
          <section>
            <h3 className="text-lg font-semibold mb-1">Sobre</h3>
            <p className="text-sm">{profile.summary}</p>
          </section>

          {/* Experiences */}
          <section>
            <h3 className="text-lg font-semibold mb-2">Experiências Profissionais</h3>
            <div className="space-y-3">
              {profile.experience.map((exp, idx) => (
                <div key={idx} className="p-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800">
                  <p className="font-semibold">{exp.role}</p>
                  <p className="text-xs text-slate-500">{exp.company} • {exp.years}</p>
                  <p className="text-sm mt-1">{exp.description}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Education */}
          <section>
            <h3 className="text-lg font-semibold mb-2">Formação Acadêmica</h3>
            <div className="space-y-3">
              {profile.education.map((edu, idx) => (
                <div key={idx} className="p-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-slate-50 dark:bg-slate-800">
                  <p className="font-semibold">{edu.degree}</p>
                  <p className="text-xs text-slate-500">{edu.institution} • {edu.year}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Technologies */}
          <section>
            <h3 className="text-lg font-semibold mb-2">Tecnologias</h3>
            <div className="flex flex-wrap gap-2">
              {profile.technologies.map((tech) => (
                <span key={tech}
                      className="px-3 py-1 rounded-full text-xs bg-indigo-100 dark:bg-indigo-900 text-indigo-700 dark:text-indigo-200">
                  {tech}
                </span>
              ))}
            </div>
          </section>

          {/* Soft skills */}
          <section>
            <h3 className="text-lg font-semibold mb-2">Soft Skills</h3>
            <div className="flex flex-wrap gap-2">
              {profile.softSkills.map((skill) => (
                <span key={skill}
                      className="px-3 py-1 rounded-full text-xs bg-emerald-100 dark:bg-emerald-900 text-emerald-700 dark:text-emerald-200">
                  {skill}
                </span>
              ))}
            </div>
          </section>

          {/* Hobbies */}
          <section>
            <h3 className="text-lg font-semibold mb-2">Hobbies</h3>
            <p className="text-sm">{profile.hobbies.join(", ")}</p>
          </section>

          {/* Message box */}
          <section>
            <h3 className="text-lg font-semibold mb-2">Enviar mensagem</h3>

            <textarea
              rows="4"
              value={message}
              onChange={(e)=>setMessage(e.target.value)}
              placeholder={"Escreva sua mensagem para " + profile.name}
              className="w-full p-3 rounded-xl border border-slate-300 dark:border-slate-700 
                         bg-white dark:bg-slate-800 text-sm"
            />

            <button
              onClick={handleSendMessage}
              className="mt-3 w-full px-4 py-2 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white"
            >
              Enviar mensagem
            </button>
          </section>

        </div>
      </div>
    </div>
  );
};

export default ProfileModal;
