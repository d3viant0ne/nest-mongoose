export const SETTINGS = {
    PORT: Number(process.env.PORT) || 3000,
    SECRET: process.env.SECRET || 'mysecret',
    DB: {
        HOST: process.env.DBHOST|| 'localhost',
        PORT: process.env.DBPORT || 27017,
        NAME: process.env.DBNAME || 'mdb',
        USER: process.env.DBUSER || '',
        PASSWORD: process.env.DBPASS || ''
    }
};