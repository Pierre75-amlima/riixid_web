import monnaie from "../../assets/monnaie.jfif";
import biere from "../../assets/biere.jfif";

const actualitesData = [
  {
    id: 1,
    slug: "cette-biere-transforme-des-bottes-de-foin",
    image: biere,
    title:
      "Cette bière transforme des bottes de foin en canettes pour valoriser ses agriculteurs",
    description:
      "Dix versions de billets sont à découvrir et à sélectionner par les Européens.",
    date: "Le 5 août 2026",
    readTime: "5 min de lecture",
    author: "Maxime Delmas",

    intro: [
      "Busch Canada vient de trouver une façon inattendue de remercier les cultivateurs derrière sa **bière**. La marque a habillé des bottes de foin dans les champs de la Saskatchewan avec le visuel de son édition limitée Farmer's Pack, transformant le paysage rural en gigantesque packaging à ciel ouvert.",
      "Baptisé « Baleboards », le dispositif ne se contente pas d'occuper l'espace visuellement. Busch reverse aux agriculteurs participants le même tarif qu'elle paierait pour un panneau publicitaire classique en ville, faisant de chaque botte de foin un support rémunéré au juste prix du marché.",
    ],

    content: [
      { type: "cta" },
      {
        type: "section",
        title: "Un packaging qui raconte le terroir",
        text: "Le Farmer's Pack célèbre l'orge canadienne qui entre dans la composition de chaque bière Busch, avec un visuel de canette directement inspiré des champs où elle pousse. Disponible uniquement dans les Prairies chez certains détaillants et en quantités limitées, le pack fonctionne comme un point de départ logique à l'opération Baleboards, qui vient prolonger cette esthétique jusque dans les fermes elles-mêmes.",
      },
      { type: "image", src: biere, alt: "Champs de la Saskatchewan" },
      {
        type: "section",
        title: "",
        text: "L'insight stratégique tient en une phrase de Patrick Heembrock, directeur des marques Mainstream chez Labatt Breweries of Canada : plutôt que d'acheter un panneau dans un centre-ville, la marque a préféré construire le sien. Cette bascule illustre une forme de marketing expérientiel qui déplace physiquement le budget publicitaire vers les communautés rurales, sans passer par les canaux médias traditionnels.",
      },
      {
        type: "section",
        title: "Le terrain comme validation",
        text: "Avant de lancer l'opération à grande échelle, Busch a testé le concept directement auprès des cultivateurs de la Saskatchewan. Leur accueil favorable a servi de validation de terrain, une étape qui ancre le dispositif dans une logique d'activation terrain plutôt que dans une simple opération de communication descendante pensée depuis un siège social.",
      },
      { type: "image", src: biere, alt: "Bottes de foin Busch" },
      {
        type: "section",
        title: "Une extension programmée du budget média",
        text: "Fort de ces retours positifs, Busch Canada annonce vouloir consacrer 10% de son budget média national à ce nouveau canal publicitaire agricole dès l'année prochaine. Labatt précise par ailleurs acheter chaque année pour environ 30 millions de dollars d'ingrédients auprès de fermes canadiennes et s'approvisionner à 98% en orge locale, ce qui replace les Baleboards dans une stratégie de long terme plutôt que dans un coup marketing isolé.",
      },
      { type: "image", src: biere, alt: "Ciel de Saskatchewan" },
    ],
  },

];

export default actualitesData;