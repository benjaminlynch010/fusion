const pg = require('pg');
const fs = require('fs');

let pool = new pg.Pool({
    user: 'benlynch',
    host: 'localhost',
    database: 'R3LOAD',
    port: 5432
});

const jsonData = JSON.parse(fs.readFileSync('megaten_data.json', 'utf8'));

  function insertData() {


    for (const personaName in jsonData) {
        const personaData = jsonData[personaName];

        const query = `
            INSERT INTO personas (name, cardlvl, heart, inherits, lvl, race, resists, skills, stats, image)
            VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10)
        `;
        const values = [
            personaName,
            personaData.cardlvl,
            personaData.heart || null,
            personaData.inherits,
            personaData.lvl,
            personaData.race,
            personaData.resists,
            personaData.skills,
            personaData.stats,
            (`/images/${personaName}.png`)
        ];

        try {
            pool.query(query, values);
            console.log(`Inserted data for ${personaName}`);
        } catch (error) {
            console.error(`Error inserting data for ${personaName}: ${error.message}`);
        }
    }
}

insertData();
