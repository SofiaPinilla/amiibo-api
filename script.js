URL = "https://www.amiiboapi.com/api/amiibo/"
const personajesDiv = document.querySelector('.personajes')

const renderPersonajes = (personajes) => {
    personajesDiv.innerHTML = '';
    personajes.forEach(personaje => {
        personajesDiv.innerHTML += `
    <div class="card col-lg-3 col-xs-12 col-md-6">
        <div class="personaje">
        <div class="card-body">
        <h3 class="card-header">${personaje.name}</h3>
        <h5 class="card-title">${personaje.amiiboSeries}</h5>
        <h6 class="card-subtitle text-muted">${personaje.gameSeries}</h6>
        <img style="height: 200px;  display: block;" src="${personaje.image}"  alt="Card image">
        </div>
        </div>
        </div>
         `
    })
}

function getCharacters() {
    axios.get(URL)
        .then(res => {
            const personajes = res.data.amiibo;
            renderPersonajes(personajes)
        })
        .catch(err => console.error(err))
}
getCharacters();