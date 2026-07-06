"use client";

import { useState } from "react";

const VILLES = [
  "Casablanca",
  "Rabat",
  "Marrakech",
  "Fès",
  "Tanger",
  "Agadir",
  "Meknès",
  "Oujda",
  "Autre",
];

export default function DevenonsPartenaires() {
  const [formData, setFormData] = useState({
    nomPrenom: "",
    societe: "",
    email: "",
    telephone: "",
    typeActivite: "",
    ville: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // handle submission logic here
  };

  return (
    <section className="relative w-full pb-60 bg-white font-[family-name:var(--font-partner)]">
      {/* Hero image */}
      <div className="relative w-[90%] md:w-[95%] h-[300px] md:h-[700px] mx-auto mt-10 md:rounded-[2.5rem] rounded-xl overflow-hidden">
        <img
          src="/img/contact_hero.png"
          alt="Partenariat médical"
          className="w-full h-full object-cover object-center"
        />
      </div>

      {/* Card */}
      <div className="relative z-10 -mt-10 md:-mt-40 mx-auto w-[85%] md:max-w-7xl bg-white md:rounded-4xl rounded-xl shadow-2xl px-6 py-10 md:py-16 md:px-26">
        {/* Heading */}
        <div className="text-center mb-10 md:mb-16">
          <h2 className="text-2xl sm:text-3xl font-extrabold tracking-widest uppercase">
        <span className=" mt-10 md:text-6xl text-4xl font-bold uppercase font-sans text-white"
          style={
            {
              background: "linear-gradient(to right , #de2a6b , #8761a1)   ",
              WebkitBackgroundClip: "text",
              backgroundClip: "text",
              WebkitTextFillColor: "transparent",
              color: "transparent",
            }
          }
        >
          Devenons <span className="max-md:hidden">Partenaires</span>
        </span>
        <span className=" mt-10 md:text-6xl text-4xl font-bold uppercase font-sans text-white md:hidden"
          style={
            {
              background: "linear-gradient(to right , #de2a6b , #8761a1)   ",
              WebkitBackgroundClip: "text",
              backgroundClip: "text",
              WebkitTextFillColor: "transparent",
              color: "transparent",
            }
          }>
            Partenaires
        </span>
          </h2>
          <p className="md:mt-2 md:text-xl text-sm text-gray-900">
            Remplissez le formulaire et notre équipe vous contactera rapidement.
          </p>
        </div>

        {/* Form */}
        <div className="space-y-2  md:space-y-5">
          {/* Nom & prénom */}
          <div>
            <label className="block text-sm md:text-lg font-medium text-gray-900 mb-2">
              Nom &amp; prénom
            </label>
            <input
              type="text"
              name="nomPrenom"
              value={formData.nomPrenom}
              onChange={handleChange}
              placeholder="Ex: Ana"
              className="w-full rounded-2xl bg-gray-100 border border-transparent focus:border-pink-400 focus:bg-white focus:ring-2 focus:ring-pink-200 outline-none px-4 py-1.5 md:py-2.5 text-sm text-gray-700 placeholder-gray-400 transition"
            />
          </div>

          {/* Société */}
          <div>
            <label className="block text-sm md:text-lg font-medium text-gray-900 mb-2">
              Société
            </label>
            <input
              type="text"
              name="societe"
              value={formData.societe}
              onChange={handleChange}
              className="w-full rounded-2xl bg-gray-100 border border-transparent focus:border-pink-400 focus:bg-white focus:ring-2 focus:ring-pink-200 outline-none px-4 py-1.5 md:py-2.5 text-sm text-gray-700 placeholder-gray-400 transition"
            />
          </div>

          {/* E-mail + Téléphone */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm md:text-lg font-medium text-gray-900 mb-2">
                E-mail
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full rounded-2xl bg-gray-100 border border-transparent focus:border-pink-400 focus:bg-white focus:ring-2 focus:ring-pink-200 outline-none px-4 py-1.5 md:py-2.5 text-sm text-gray-700 placeholder-gray-400 transition"
              />
            </div>
            <div>
              <label className="block text-sm md:text-lg font-medium text-gray-900 mb-2">
                Téléphone
              </label>
              <input
                type="tel"
                name="telephone"
                value={formData.telephone}
                onChange={handleChange}
                className="w-full rounded-2xl bg-gray-100 border border-transparent focus:border-pink-400 focus:bg-white focus:ring-2 focus:ring-pink-200 outline-none px-4 py-1.5 md:py-2.5 text-sm text-gray-700 placeholder-gray-400 transition"
              />
            </div>
          </div>

          {/* Type d'activité + Ville */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm md:text-lg font-medium text-gray-900 mb-2">
                Type d&apos;activité
              </label>
              <input
                type="text"
                name="typeActivite"
                value={formData.typeActivite}
                onChange={handleChange}
                className="w-full rounded-2xl bg-gray-100 border border-transparent focus:border-pink-400 focus:bg-white focus:ring-2 focus:ring-pink-200 outline-none px-4 py-1.5 md:py-2.5 text-sm text-gray-700 placeholder-gray-400 transition"
              />
            </div>
            <div>
              <label className="block text-sm md:text-lg font-medium text-gray-900 mb-2">
                Ville
              </label>
              <select
                name="ville"
                value={formData.ville}
                onChange={handleChange}
                className="w-full rounded-2xl bg-gray-100 border border-transparent focus:border-pink-400 focus:bg-white focus:ring-2 focus:ring-pink-200 outline-none px-4 py-1.5 md:py-2.5 text-sm text-gray-700 transition appearance-none cursor-pointer"
              >
                <option value="" disabled>
                  Sélectionnez votre ville
                </option>
                {VILLES.map((v) => (
                  <option key={v} value={v}>
                    {v}
                  </option>
                ))}
              </select>
            </div>
          </div>

          {/* Message */}
          <div>
            <label className="block text-sm md:text-lg font-medium text-gray-900 mb-2">
              Message
            </label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows={8}
              placeholder="Ex: Message"
              className="w-full rounded-2xl bg-gray-100 border border-transparent focus:border-pink-400 focus:bg-white focus:ring-2 focus:ring-pink-200 outline-none px-4 py-1.5 md:py-2.5 text-sm text-gray-700 placeholder-gray-400 transition resize-none"
            />
          </div>

          {/* Submit */}
          <button
            onClick={handleSubmit}
            className="w-full py-6 rounded-xl text-white text-sm md:text-lg md:mb-20 font-bold tracking-widest uppercase
              bg-gradient-to-r from-[#e0296a] to-[#8761a1]
              hover:from-[#d81b80] hover:to-[#7b1fa2]
              active:scale-[0.98]
              shadow-lg shadow-pink-200
              transition-all duration-200"
          >
            Envoyer ma demande
          </button>
        </div>
      </div>
    </section>
  );
}