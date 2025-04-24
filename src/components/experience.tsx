"use client"

import { motion } from "framer-motion"
import { profileData } from "@/lib/data"
import { experienceDataEN } from "@/lib/data-en"
import { useState, useMemo } from "react"
import { useLanguage } from "@/hooks/use-language"
import { LanguageTransition } from "./language-transition"

type CompanyIndices = {
  company: string;
  indices: number[];
};

export default function Experience() {
  const { t, language } = useLanguage();
  const [activeExperience, setActiveExperience] = useState(0);

  // Seleciona os dados de experiência baseado no idioma
  const experienceData = language === "en" ? experienceDataEN : profileData.experience;

  // Agrupa as experiências por empresa
  const companiesWithIndices = useMemo<CompanyIndices[]>(() => {
    const companies: CompanyIndices[] = [];
    const added = new Set<string>();

    experienceData.forEach((exp, index) => {
      if (!added.has(exp.company)) {
        companies.push({
          company: exp.company,
          indices: experienceData
            .map((e, i) => e.company === exp.company ? i : -1)
            .filter(i => i !== -1)
        });
        added.add(exp.company);
      }
    });

    return companies;
  }, [experienceData]);

  // Encontre a empresa atual
  const currentCompanyData = companiesWithIndices.find(c =>
    c.indices.includes(activeExperience)
  );

  // Determine se estamos visualizando a Conexos
  const isConexos = experienceData[activeExperience].company === "Conexos";

  // Encontre os índices das experiências da Conexos
  const conexosIndices = useMemo(() => {
    return experienceData
      .map((exp, index) => exp.company === "Conexos" ? index : -1)
      .filter(index => index !== -1);
  }, [experienceData]);

  return (
    <section className="py-20 bg-slate-50" id="experience">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              <LanguageTransition>{t("experiencesTitle")}</LanguageTransition>
            </h2>
            <div className="w-20 h-1.5 bg-cyan-500 mx-auto mb-6"></div>
          </motion.div>
        </div>

        {/* Experience Layout with Sidebar */}
        <div className="max-w-5xl mx-auto">
          <div className="flex flex-col md:flex-row gap-8">
            {/* Sidebar with Company Buttons */}
            <div className="md:w-1/4">
              <div className="space-y-1">
                {companiesWithIndices.map((companyData, index) => (
                  <button
                    key={`nav-${index}`}
                    onClick={() => setActiveExperience(companyData.indices[0])}
                    className={`w-full text-left p-4 rounded transition-all flex items-center cursor-pointer
                      ${companyData.indices.includes(activeExperience)
                        ? 'bg-blue-50 border-l-4 border-cyan-500 text-slate-600'
                        : 'hover:bg-gray-50 text-slate-600'
                      }`}
                  >
                    <span className="font-medium">{companyData.company}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Active Experience Content */}
            <div className="md:w-3/4">
              {isConexos ? (
                // Layout especial para Conexos mostrando ambas as posições
                <div>
                  {conexosIndices.map((expIndex) => {
                    const exp = experienceData[expIndex];
                    return (
                      <motion.div
                        key={`conexos-${expIndex}`}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5, delay: expIndex === conexosIndices[0] ? 0 : 0.2 }}
                        className={`${expIndex !== conexosIndices[0] ? 'mt-12' : ''}`}
                      >
                        <div className="mb-4">
                          <h3 className="text-2xl font-bold text-slate-900 mb-2">
                            <LanguageTransition>{exp.position}</LanguageTransition>
                          </h3>
                          <div className="flex items-center">
                            <span className="text-lg font-medium text-cyan-500">{exp.company}</span>
                            {exp.location && (
                              <span className="text-slate-600 text-sm ml-2">
                                (<LanguageTransition>{exp.location}</LanguageTransition>)
                              </span>
                            )}
                          </div>
                          <div className="text-right text-cyan-500 font-medium">
                            <LanguageTransition>{exp.period}</LanguageTransition>
                          </div>
                        </div>

                        <div className="text-slate-700 mb-6 leading-relaxed">
                          <LanguageTransition>{exp.description}</LanguageTransition>
                        </div>

                        <ul className="list-disc pl-5 space-y-2">
                          {exp.responsibilities &&
                            exp.responsibilities.map((item, idx) => (
                              <li key={idx} className="text-slate-700">
                                <LanguageTransition>{item}</LanguageTransition>
                              </li>
                            ))}
                        </ul>
                      </motion.div>
                    );
                  })}
                </div>
              ) : (
                // Layout padrão para outras empresas
                <motion.div
                  key={`experience-${activeExperience}`}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="mb-4">
                    <h3 className="text-2xl font-bold text-slate-900 mb-2">
                      <LanguageTransition>{experienceData[activeExperience].position}</LanguageTransition>
                    </h3>
                    <div className="flex items-center">
                      <span className="text-lg font-medium text-cyan-500">{experienceData[activeExperience].company}</span>
                      {experienceData[activeExperience].location && (
                        <span className="text-slate-600 text-sm ml-2">
                          (<LanguageTransition>{experienceData[activeExperience].location}</LanguageTransition>)
                        </span>
                      )}
                    </div>
                    <div className="text-right text-cyan-500 font-medium">
                      <LanguageTransition>{experienceData[activeExperience].period}</LanguageTransition>
                    </div>
                  </div>

                  <div className="text-slate-700 mb-6 leading-relaxed">
                    <LanguageTransition>{experienceData[activeExperience].description}</LanguageTransition>
                  </div>

                  <ul className="list-disc pl-5 space-y-2">
                    {experienceData[activeExperience].responsibilities &&
                      experienceData[activeExperience].responsibilities.map((item, idx) => (
                        <li key={idx} className="text-slate-700">
                          <LanguageTransition>{item}</LanguageTransition>
                        </li>
                      ))}
                  </ul>
                </motion.div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
} 