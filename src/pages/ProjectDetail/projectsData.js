import noracash from "../../assets/nora.jpg";
import noraLogo from "../../assets/noracash-logo.PNG";
import noraPattern from "../../assets/noracash-pattern.PNG";
import noraApp from "../../assets/noracash-app.PNG";
import noraScreen1 from "../../assets/noracash-1.PNG";
import noraScreen2 from "../../assets/noracash-2.PNG";
import noraScreen3 from "../../assets/noracash-3.PNG";
import noraScreen4 from "../../assets/noracash-4.PNG";
import sstImg from "../../assets/sst.png";

const projectsData = [
  {
    id: 1,
    slug: "noracash",
    title: "NORACASH",
    categories: ["Fintech", "UX/UI Design", "Product Design"],
    heroImage: noracash,

    // Premier paragraphe : noir + gras
    intro: [
      "Pour donner vie à une nouvelle vision des services financiers, Riixid a accompagné la création de Noracash, une plateforme où design, technologie et expérience utilisateur s'unissent.",
    ],

    // Paragraphes suivants : en gris
    content: [
      {
        type: "section",
        text: "Les services financiers connaissent une profonde transformation avec l'évolution des usages numériques. Pourtant, malgré l'apparition de nombreuses solutions, l'expérience utilisateur reste souvent complexe, fragmentée et difficile à appréhender. Les utilisateurs recherchent aujourd'hui plus de simplicité, de rapidité et de confiance dans leurs interactions financières quotidiennes.",
      },
      {
        type: "section",
        text: "C'est dans cette perspective qu'est né Noracash, avec une ambition claire : repenser l'expérience financière numérique en créant une plateforme moderne, intuitive et accessible. Le projet ne consistait pas uniquement à développer un outil financier, mais à imaginer une nouvelle manière d'interagir avec les services numériques, en plaçant l'utilisateur au centre de chaque décision.",
      },
      {
        type: "section",
        text: "Notre réflexion s'est construite autour d'un enjeu majeur : transformer la complexité des usages financiers en une expérience simple et naturelle. Chaque parcours, chaque interface et chaque interaction ont été pensés pour faciliter la compréhension, renforcer la confiance et offrir une expérience cohérente adaptée aux nouveaux comportements digitaux.",
      },
      {
        type: "section",
        text: "À travers une approche mêlant stratégie produit, UX/UI Design et innovation, Riixid a accompagné la conception de Noracash en travaillant sur l'architecture de l'expérience, la création de l'univers visuel et la conception d'une interface capable d'évoluer avec les besoins futurs du projet.",
      },
      {
        type: "section",
        text: "Le résultat est une expérience digitale pensée pour rapprocher la technologie des utilisateurs, en proposant une approche plus humaine des services financiers. Noracash incarne une vision où l'innovation ne se limite pas à la technologie, mais se mesure surtout à la capacité de créer des expériences simples, utiles et accessibles.",
      },

      // Ensuite viennent les images / cta / next
      { type: "image", src: noraLogo, alt: "Logo Noracash" },
      { type: "image", src: noraPattern, alt: "Pattern Noracash" },
      { type: "image", src: noraApp, alt: "App Noracash" },
      { type: "image", src: noraScreen1, alt: "Écran Noracash 1" },
      { type: "image", src: noraScreen2, alt: "Écran Noracash 2" },
      { type: "image", src: noraScreen3, alt: "Écran Noracash 3" },
      { type: "image", src: noraScreen4, alt: "Écran Noracash 4" },

      { type: "cta" },

      {
        type: "next",
        category: "CNB",
        title: "Once upon a scam",
        image: sstImg,
        slug: "once-upon-a-scam",
      },
    ],
  },

  {
    id: 2,
    slug: "once-upon-a-scam",
    title: "Once upon a scam",
    categories: ["CNB", "Campagne"],
    heroImage: sstImg,
    intro: ["Description à venir..."],
    content: [
      {
        type: "next",
        category: "Fintech",
        title: "NORACASH",
        image: noracash,
        slug: "noracash",
      },
    ],
  },
];

export default projectsDaPNG