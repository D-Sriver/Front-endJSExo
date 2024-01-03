// Récupération des pièces depuis le fichier JSON
const response = await fetch("pieces-autos.json");
const pieces = await response.json();

const article = pieces[0];
const imageElement = document.createElement("img");
imageElement.src = article.image;
console.log(`l'élément image : "${imageElement.src}" est crée`);

const nomElement = document.createElement("h2");
nomElement.innerText = article.nom;
console.log(`l'élément nom : "${nomElement.innerText}" est crée`);

const prixElement = document.createElement("p");
prixElement.innerText = `Prix: ${article.prix} €`;
console.log(`l'élément prix : "${prixElement.innerText}" est crée`);

const categoriesElement = document.createElement("p");
categoriesElement.innerText = article.categories;
console.log(`l'élément categories : "${categoriesElement.innerText}" est crée`);

const sectionFiches = document.querySelector(".fiches");
sectionFiches.appendChild(imageElement);
sectionFiches.appendChild(nomElement);
sectionFiches.appendChild(prixElement);
sectionFiches.appendChild(categoriesElement);