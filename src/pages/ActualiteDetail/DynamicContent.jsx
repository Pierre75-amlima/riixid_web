import { getStrapiMedia } from "../../lib/api";
import React from "react";

export default function DynamicContent({ bloc }) {
  console.log("Bloc traité :", bloc?.__component, bloc);

  if (!bloc || !bloc.__component) return null;

  // --- BLOC IMAGE ---
  if (bloc.__component === "sections.image-block") {
    // Extraction robuste de l'URL image Strapi
    const imageData = bloc.image?.data?.attributes || bloc.image;
    const imageUrl = getStrapiMedia(imageData?.url);
    const caption = bloc.caption;

    if (!imageUrl) {
      console.warn("ImageBlock sans URL valide:", bloc);
      return null;
    }

    return (
      <div className="my-20 px-4 sm:px-8 max-w-5xl mx-auto">
        <figure className="group relative">
          <div className="relative overflow-hidden rounded-3xl p-2 bg-white/[0.02] border border-white/10 shadow-2xl transition-transform duration-700 group-hover:-translate-y-2">
            <img 
              src={imageUrl} 
              alt={caption || "Image projet"} 
              className="w-full h-auto object-cover rounded-2xl transform transition-transform duration-700 group-hover:scale-105"
              loading="lazy"
            />
            <div className="absolute -inset-4 bg-riix-orange/20 blur-3xl opacity-0 group-hover:opacity-30 transition-opacity duration-500 -z-10 rounded-3xl"></div>
          </div>

          {caption && (
            <figcaption className="mt-6 text-center text-sm font-medium text-riix-orange uppercase tracking-[0.2em]">
              {caption}
            </figcaption>
          )}
        </figure>
      </div>
    );
  }

  // --- BLOC SECTION ---
  if (bloc.__component === "sections.section") {
    return (
      <div className="py-16 px-6 max-w-4xl mx-auto">
        {bloc.title && (
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#f6dcbf] mb-10">
            {bloc.title}
          </h2>
        )}
        {bloc.text && Array.isArray(bloc.text) && (
          <div className="text-lg leading-relaxed text-gray-300 space-y-6">
            {bloc.text.map((item, index) => {
              if (item.type === 'paragraph') {
                return <p key={index}>{item.children[0]?.text}</p>;
              }
              return null;
            })}
          </div>
        )}
      </div>
    );
  }

  // --- BLOC CTA ---
  if (bloc.__component === "sections.cta-block") {
    return (
      <div className="my-24 px-6 max-w-4xl mx-auto text-center">
        {bloc.title && <h3 className="text-3xl font-bold text-[#f6dcbf] mb-8">{bloc.title}</h3>}
        {bloc.buttonLink && (
          <a 
            href={bloc.buttonLink}
            className="inline-block bg-riix-orange text-black font-bold px-10 py-4 rounded-full hover:bg-white transition-all"
          >
            {bloc.buttonText || "En savoir plus"}
          </a>
        )}
      </div>
    );
  }

  return null;
}