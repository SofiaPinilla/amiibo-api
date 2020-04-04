URL = "http://localhost:3000/"
const personajesDiv = document.querySelector('.personajes')
let page = 0

const getPersonajes = (page) => {
    fetch(URL + page)
        .then(res => res.json())
        .then(personajes => {
            personajesDiv.innerHTML = '';
            personajes.forEach(personaje => {
                personajesDiv.innerHTML += `
                <div class="card text-white bg-primary card col-lg-3 col-xs-12 col-md-6" style="max-width: 20rem;">
                <div class="personaje">
                <div class="card-header">${personaje.name}</div>
                <div class="card-body">
                  <h4 class="card-title">${personaje.gameSeries}</h4>
                  <p class="card-text"> <img style="height: 200px;  display: block;" src="${personaje.image_path}" alt="Card image"></p>
                </div>
              </div>
            </div>
                     `
            });

        })
}
getPersonajes(page)
document.querySelector('.previousPage').addEventListener('click', event => {
    if (page > 0) {
        getPersonajes(--page)
    }
})
document.querySelector('.nextPage').addEventListener('click', event => {
    if (page < 51) {
        getPersonajes(++page)
    }
})