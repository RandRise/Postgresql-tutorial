import pg from 'pg';
import prompt from 'prompt';
import dotenv from 'dotenv';

import { add_city, update_city, delete_city, display_cities } from './db.mjs';

//Load environment variables from .env file

dotenv.config();

prompt.start();

// create a connection Pool to a postgreSQL server
const pool = new pg.Pool({
    host: process.env.PGHOST,
    user: process.env.PGUSER,
    password: process.env.PGPASSWORD,
    database: process.env.PGDATABASE
});

// open a connection to the postgreSQL server
const client = await pool.connect();
let shouldExit = false;
while (!shouldExit) {

    console.log("I: Insert, U: Update, D: Delete, R: Refresh, Q: Quit");
    let { choice } = await prompt.get('choice');
    
    switch(choice) {
        case 'Q': shouldExit = true; break;
        case 'R': await display_cities(client); break;
        case 'I':
            let { new_name } = await prompt.get('new_name');
            await add_city(client, new_name);
            break;
        case 'U':
            let { original_id } = await prompt.get('original_id');
            let { modified_name } = await prompt.get('modified_name');
            await update_city(client, original_id, modified_name);
            break;
        case 'D':
            // TODO
            let { city_id } = await prompt.get('city_id');
            await delete_city(client , city_id);
            break;            
        default: break;
    }
}
await client.end();
await pool.end();