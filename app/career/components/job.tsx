'use client';

import React, { useState, useMemo } from 'react';
import { Search } from 'lucide-react';

// Sample Mock Data matching the image exactly
const INITIAL_JOBS = [
  {
    id: 1,
    title: "Community Manager Beauté",
    experience: "Junior",
    location: "Casablanca",
    category: "Digital",
    shortDesc: "Primary Responsibility:Designing and implementing user interfaces using HTML, CSS, and JavaScript frameworks like React or Angular. Building and maintaining server-side application logic, databases....",
    fullDesc: {
      mainResponsibility: "Développer et animer la présence digitale des marques du groupe ICG sur les réseaux sociaux. Le Community Manager participe à la création de contenus engageants, à la gestion des communautés et à la valorisation de l'image des marques dermocosmétiques auprès du public.",
      profile: [
        "Bonne maîtrise des réseaux sociaux : Instagram, Facebook, TikTok et LinkedIn",
        "Créativité dans la création de contenus visuels et rédactionnels",
        "Connaissance des tendances beauté, skincare et dermocosmétique",
        "Capacité à planifier et gérer un calendrier éditorial",
        "Compétences en copywriting et storytelling",
        "Maîtrise des outils Canva, Meta Business Suite ou équivalents",
        "Sens de l'organisation, réactivité et esprit d'équipe",
        "Bonne communication en français, arabe et anglais appréciée"
      ],
      missions: [
        "Création et publication de contenus quotidiens",
        "Gestion des interactions et messages de la communauté",
        "Participation aux shootings, campagnes et événements",
        "Veille sur les tendances digitales et concurrence",
        "Analyse des performances et reporting mensuel"
      ],
      details: {
        type: "Temps plein",
        mode: "Hybride",
        salary: "Selon profil et expérience",
        experienceRequired: "1 à 2 ans d'expérience",
        exactLocation: "Casablanca, Maroc"
      }
    }
  },
  {
    id: 2,
    title: "Délégué Médical / Commercial",
    experience: "Confirmé",
    location: "Casablanca",
    category: "Commercial",
    shortDesc: "Promotion des marques ICG auprès des pharmacies, parapharmacies et professionnels de santé. Suivi client, prospection terrain et développement du réseau.",
    fullDesc: {
      mainResponsibility: "Assurer le développement commercial des produits de l'entreprise sur le terrain. Le Délégué Médical / Commercial est responsable de la promotion des gammes dermocosmétiques et pharmaceutiques, de la conquête de nouveaux clients et du suivi du portefeuille existant.",
      profile: [
        "Excellente connaissance du secteur pharmaceutique et dermocosmétique",
        "Expérience réussie en tant que délégué médical ou commercial B2B",
        "Capacité à développer et fidéliser un portefeuille clients",
        "Excellentes compétences en communication et négociation",
        "Capacité à travailler en autonomie et à atteindre ses objectifs",
        "Permis B valide et mobilité sur le secteur",
        "Esprit d'équipe et sens du service client"
      ],
      missions: [
        "Prospection de nouvelles pharmacies, parapharmacies et professionnels de santé",
        "Identification des besoins clients et proposition des gammes adaptées",
        "Animation du portefeuille clients existant et développement du CA",
        "Organisation de visites terrain et présentations produits",
        "Suivi des commandes et coordination avec les équipes logistiques",
        "Veille concurrentielle et remontée d'informations terrain"
      ],
      details: {
        type: "CDI - Temps plein",
        mode: "Terrain",
        salary: "Salaire fixe attractif + commissionnement sur objectifs",
        experienceRequired: "2 à 5 ans d'expérience dans le secteur",
        exactLocation: "Casablanca, Maroc"
      }
    }
  },
  {
    id: 3,
    title: "Formateur Dermocosmétique",
    experience: "Senior",
    location: "Casablanca",
    category: "Formation",
    shortDesc: "Formation des équipes commerciales, conseillers beauté et partenaires sur les produits, routines, actifs, bénéfices et argumentaires de vente.",
    fullDesc: null
  },
  {
    id: 4,
    title: "Formateur Dermocosmétique",
    experience: "Senior",
    location: "Casablanca",
    category: "Formation",
    shortDesc: "Formation des équipes commerciales, conseillers beauté et partenaires sur les produits, routines, actifs, bénéfices et argumentaires de vente.",
    fullDesc: null
  }
];

export default function JobBoard() {
  // Search & Filter States
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedExperience, setSelectedExperience] = useState('Tous les niveaux');
  const [selectedLocation, setSelectedLocation] = useState('Toutes les villes');
  const [selectedCategory, setSelectedCategory] = useState('Tous les métiers');
  
  // State for active filters applied after clicking "Voir les offres"
  const [appliedFilters, setAppliedFilters] = useState({
    search: '',
    experience: 'Tous les niveaux',
    location: 'Toutes les villes',
    category: 'Tous les métiers'
  });

  // Selected job for the right-hand detail pane
  const [selectedJobId, setSelectedJobId] = useState(1);

  // Extract unique filter values dynamically from data
  const experiences = ['Tous les niveaux', ...new Set(INITIAL_JOBS.map(j => j.experience))];
  const locations = ['Toutes les villes', ...new Set(INITIAL_JOBS.map(j => j.location))];
  const categories = ['Tous les métiers', ...new Set(INITIAL_JOBS.map(j => j.category))];

  // Handle search submission
  const handleSearchSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setAppliedFilters({
      search: searchQuery,
      experience: selectedExperience,
      location: selectedLocation,
      category: selectedCategory
    });
  };

  // Filter jobs based on applied states
  const filteredJobs = useMemo(() => {
    return INITIAL_JOBS.filter(job => {
      const matchesSearch = job.title.toLowerCase().includes(appliedFilters.search.toLowerCase()) || 
                            job.shortDesc.toLowerCase().includes(appliedFilters.search.toLowerCase());
      const matchesExp = appliedFilters.experience === 'Tous les niveaux' || job.experience === appliedFilters.experience;
      const matchesLoc = appliedFilters.location === 'Toutes les villes' || job.location === appliedFilters.location;
      const matchesCat = appliedFilters.category === 'Tous les métiers' || job.category === appliedFilters.category;

      return matchesSearch && matchesExp && matchesLoc && matchesCat;
    });
  }, [appliedFilters]);

  // Find the currently selected job data
  const activeJob = INITIAL_JOBS.find(j => j.id === selectedJobId) || filteredJobs[0];

  return (
    <div className="bg-[#fcfcfc] min-h-screen font-sans p-6 md:p-12 text-[#333333]">
      <div className="w-full md:max-w-[75%] mx-auto">
        
        {/* --- SEARCH & FILTER BAR --- */}
        <form onSubmit={handleSearchSubmit} className="bg-white p-6 rounded-xl  mb-10 ">
          {/* Main Search Input */}
          <div className="relative mb-6">
            <input
              type="text"
              placeholder="Search for jobs.."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-[#fdf4f7] border-none rounded-lg py-4 px-5 pr-12 text-gray-700 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#de2672]"
            />
            <button type="submit" className="absolute right-4 top-1/2 -translate-y-1/2 text-[#de2672]">
              <Search size={22} />
            </button>
          </div>

          {/* Select Dropdowns & Submit Button */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 items-end">
            <div>
              <label className="block text-xs font-semibold text-gray-600 mb-1">Niveau d&apos;expérience</label>
              <select
                value={selectedExperience}
                onChange={(e) => setSelectedExperience(e.target.value)}
                className="w-full bg-white border border-gray-200 rounded-md py-2 px-3 text-sm text-gray-700 focus:outline-none focus:border-gray-400"
              >
                {experiences.map(exp => <option key={exp} value={exp}>{exp}</option>)}
              </select>
            </div>

            <div>
              <label className="block text-xs font-semibold text-gray-600 mb-1">Localisation</label>
              <select
                value={selectedLocation}
                onChange={(e) => setSelectedLocation(e.target.value)}
                className="w-full bg-white border border-gray-200 rounded-md py-2 px-3 text-sm text-gray-700 focus:outline-none focus:border-gray-400"
              >
                {locations.map(loc => <option key={loc} value={loc}>{loc}</option>)}
              </select>
            </div>

            <div>
              <label className="block text-xs font-semibold text-gray-600 mb-1">Catégories</label>
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="w-full bg-white border border-gray-200 rounded-md py-2 px-3 text-sm text-gray-700 focus:outline-none focus:border-gray-400"
              >
                {categories.map(cat => <option key={cat} value={cat}>{cat}</option>)}
              </select>
            </div>

            <button
              type="submit"
              className="w-full bg-[#de2672] hover:bg-[#c21e61] text-white text-sm font-medium py-2.5 px-4 rounded-md transition-colors"
            >
              Voir les offres
            </button>
          </div>
        </form>

        {/* --- MAIN CONTENT SECTION --- */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* LEFT COLUMN: Job Listings List */}
          <div className="lg:col-span-5 space-y-4">
            {filteredJobs.length === 0 ? (
              <p className="text-gray-500 text-center py-8">Aucune offre ne correspond à vos critères.</p>
            ) : (
              filteredJobs.map((job) => {
                const isSelected = job.id === activeJob?.id;
                return (
                  <div
                    key={job.id}
                    onClick={() => setSelectedJobId(job.id)}
                    className={`bg-white p-6 rounded-xl border transition-all cursor-pointer ${
                      isSelected 
                        ? 'border-[#de2672] ring-1 ring-[#de2672]' 
                        : 'border-gray-100 hover:border-gray-300 shadow-sm'
                    }`}
                  >
                    <h3 className={`text-lg font-bold mb-3 ${isSelected ? 'text-[#de2672]' : 'text-[#1e2229]'}`}>
                      {job.title}
                    </h3>
                    
                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      <span className="bg-[#f0f2f5] text-xs text-gray-600 px-3 py-1 rounded-md">{job.experience}</span>
                      <span className="bg-[#f0f2f5] text-xs text-gray-600 px-3 py-1 rounded-md">{job.location}</span>
                      <span className="bg-[#f0f2f5] text-xs text-gray-600 px-3 py-1 rounded-md">{job.category}</span>
                    </div>

                    <p className="text-sm text-gray-500 leading-relaxed line-clamp-3">
                      {job.shortDesc}
                    </p>
                  </div>
                );
              })
            )}
          </div>

          {/* RIGHT COLUMN: Active Job Detail Pane */}
          <div className="lg:col-span-7">
            {activeJob && activeJob.fullDesc ? (
              <div className="bg-[#fff9fa] border border-[#fdebee] rounded-xl p-8 sticky top-6 shadow-sm">
                <h2 className="text-2xl font-bold text-[#1e2229] mb-3">{activeJob.title}</h2>
                
                {/* Meta Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  <span className="bg-[#e4e8ee] text-xs text-gray-700 px-3 py-1 rounded-md">{activeJob.experience}</span>
                  <span className="bg-[#e4e8ee] text-xs text-gray-700 px-3 py-1 rounded-md">{activeJob.location}</span>
                  <span className="bg-[#e4e8ee] text-xs text-gray-700 px-3 py-1 rounded-md">{activeJob.category}</span>
                </div>

                <div className="space-y-6 text-sm text-[#4a4a4a] leading-relaxed overflow-y-auto max-h-[70vh] pr-2">
                  {/* Responsabilité */}
                  <div>
                    <h4 className="font-bold text-gray-800 mb-1">Responsabilité principale :</h4>
                    <p>{activeJob.fullDesc.mainResponsibility}</p>
                  </div>

                  {/* Profil */}
                  <div>
                    <h4 className="font-bold text-gray-800 mb-2">Profil recherché :</h4>
                    <ul className="list-disc pl-5 space-y-1">
                      {activeJob.fullDesc.profile.map((item, index) => (
                        <li key={index}>{item}</li>
                      ))}
                    </ul>
                  </div>

                  {/* Missions */}
                  <div>
                    <h4 className="font-bold text-gray-800 mb-2">Missions principales :</h4>
                    <ul className="list-disc pl-5 space-y-1">
                      {activeJob.fullDesc.missions.map((item, index) => (
                        <li key={index}>{item}</li>
                      ))}
                    </ul>
                  </div>

                  {/* Dynamic Inline Key/Value pairs matching image styling */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2 border-t border-pink-100/60">
                    <div>
                      <h4 className="font-bold text-gray-800">Type d&apos;emploi :</h4>
                      <p className="text-gray-600">{activeJob.fullDesc.details.type}</p>
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-800">Mode de travail :</h4>
                      <p className="text-gray-600">{activeJob.fullDesc.details.mode}</p>
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-800">Salaire :</h4>
                      <p className="text-gray-600">{activeJob.fullDesc.details.salary}</p>
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-800">Expérience requise :</h4>
                      <p className="text-gray-600">{activeJob.fullDesc.details.experienceRequired}</p>
                    </div>
                    <div className="md:col-span-2">
                      <h4 className="font-bold text-gray-800">Localisation :</h4>
                      <p className="text-gray-600">{activeJob.fullDesc.details.exactLocation}</p>
                    </div>
                  </div>
                </div>

                {/* Apply Button */}
                <div className="mt-8">
                  <button className="bg-[#de2672] hover:bg-[#c21e61] text-white text-sm font-semibold py-3 px-6 rounded-md transition-colors w-full md:w-auto">
                    Postuler maintenant
                  </button>
                </div>
              </div>
            ) : (
              <div className="bg-[#fff9fa] border border-[#fdebee] rounded-xl p-8 text-center text-gray-400 italic">
                Sélectionnez une offre (comme la première offre Beauté) pour voir les détails complets.
              </div>
            )}
          </div>

        </div>
      </div>
    </div>
  );
}