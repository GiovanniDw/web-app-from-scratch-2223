//Variable
const whoamiAPI = 'https://whois.fdnd.nl/api/v1/member?id=cldepah1g3xaf0avwjp5t8kwe';
const data = fetch(whoamiAPI);
const mainHeading = $('h1');
// logica
console.log(1);
fetchData()

// functions
function fetchData() {
  const data = fetch(whoamiAPI)
    .then(res => res.json())
    .then(data => {
        changeH1(data)
    })
}

function changeH1(data) {
  console.log(data.member)
  const name = data.member.name; 
  mainHeading.insertAdjacentHTML('beforeend', `: ${name}`)
  console.log(name);
}

function $ (element) {
  return document.querySelector(element)
}
function $$ (elements) {
  document.querySelectorAll(elements);
}




// Scope ->  waar een binding leeft
// 


//Hoisting -> Funcitons&variable Declaratiions worden naar de top van de scope gehoist




// .then function is a method

// method == function (in een object)