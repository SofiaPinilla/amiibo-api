import axios from 'axios';
import Sequelize from 'sequelize';
const sequelize = new Sequelize('nintendo', 'root', '123456', {
    host: 'localhost',
    dialect: 'mysql'
});
axios.get('https://www.amiiboapi.com/api/amiibo/')
    .then(res => {
        const personajes = res.data.amiibo;
        for (const personaje of personajes) {
            sequelize.query(`INSERT INTO personajes (name, gameSeries, image_path)
        VALUES ('${personaje.name}', '${personaje.gameSeries}', '${personaje.image}');`)
        }
    })