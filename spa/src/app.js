import { getMuseumData } from './getMuseumData';

const apiKey = import.meta.env.VITE_RIJKSMUSEUM_API;
const URL = `https://www.rijksmuseum.nl/api/en/collection?key=${apiKey}`;
const rembrand = '&involvedMaker=Rembrandt+van+Rijn';

const museumOptions = {
  lang: 'en',
  apiKey: apiKey,
  color: '',
  involvedMaker: 'Rembrand',
  URL: URL,
};

const museumData = await getMuseumData(museumOptions);

 console.log(museumData)
createMuseumItemWithTemplate(museumData);


function createMuseumItemWithTemplate(museumData) {
  const museumItems = museumData.artObjects;
console.log(museumItems);
  const article = document.createElement('article');
  article.classList.add('art');

  const template = document.getElementById('museum-item');

  museumItems.forEach((museumItem) => {
    const articleItem = document.importNode(template.content, true);
    articleItem.querySelector('.title').textContent = museumItem.longTitle;
    articleItem.querySelector('.image').src = museumItem.webImage.url;
    article.appendChild(articleItem);
  });
  template.replaceWith(article);
}

// function createListWithTemplate(heroes: Hero[]) {
//   const ul = document.createElement('ul');
//   ul.classList.add('list', 'hero-list');
//   const template = document.getElementById('museumItem') as HTMLTemplateElement;
//   heroes.forEach((hero: Hero) => {
//     const heroCard = document.importNode(template.content, true);
//     heroCard.querySelector('.description').textContent = hero.description;
//     heroCard.querySelector('.name').textContent = hero.name;
//     ul.appendChild(heroCard);
//   });
//   heroPlaceholder.replaceWith(ul);
// }
