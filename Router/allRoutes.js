import Route from "./Route.js";

// Définir les routes
export const allRoutes = [
    new Route("/", "Accueil", "/pages/home.html"),
    new Route("/galerie", "galerie", "/pages/galerie.html"),

];

// Le titre s'affiche comme ceci : Route.title - websiteName
export const websiteName = "Quai Antique";