const apiKey = import.meta.env.VITE_RIJKSMUSEUM_API;
// const apiKey = 'S3GLzVAr';

const URL = `https://www.rijksmuseum.nl/api/en/collection?key=${apiKey}`;
const rembrand = '&involvedMaker=Rembrandt+van+Rijn';

const fullURL = URL + rembrand;

fetchData();
console.log(fullURL);

function fetchData() {
  const data = fetch(fullURL)
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
    });
}

console.log(import.meta.env.VITE_RIJKSMUSEUM_API);
