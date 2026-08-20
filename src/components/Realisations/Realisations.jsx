import { useEffect, useState } from "react";
import RealisationsHeader from "./RealisationsHeader";
import RealisationCard from "./RealisationCard";
import { getProjets, normalizeProjet } from "../../lib/api";

export default function Realisations() {
  const [realisations, setRealisations] = useState([]);

  useEffect(() => {
    let active = true;

    async function loadProjects() {
      const data = await getProjets();
      if (!active) return;

      const normalized = (Array.isArray(data) ? data : []).map(normalizeProjet);
      setRealisations(normalized.slice(0, 2));
    }

    loadProjects();
    return () => {
      active = false;
    };
  }, []);

  return (
    <section className="w-full bg-white px-4 py-16 sm:px-6 sm:py-20 md:px-8 md:py-24 lg:px-10">
      <div className="mx-auto max-w-6xl">
        <RealisationsHeader />

        <div className="grid grid-cols-1 gap-6 sm:gap-7 md:grid-cols-2 md:gap-8">
          {realisations.map((real, i) => (
            <RealisationCard key={real.id || i} {...real} image={real.image || real.heroImage} />
          ))}
        </div>
      </div>
    </section>
  );
}