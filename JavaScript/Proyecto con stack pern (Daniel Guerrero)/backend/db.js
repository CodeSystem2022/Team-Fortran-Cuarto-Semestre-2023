import pg from "pg";

export const pool = new pg.Pool({
    port: PG_PORT,
    host: PG_HOST,
    user: PG_USER,
    password: PG_PASSWORD,
    database: PG_DATABASE,
});

pool.on("connect", () => {
    console.log("conectado a la base de datos");
});