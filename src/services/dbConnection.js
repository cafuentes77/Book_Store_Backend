import { dbConfig } from "../config/dbConfig.js";


export const dbConnect = async () => {
    try {
        await dbConfig.authenticate();
        // en este punto inicia los modelos y configura las asociaciones
        await dbConfig.sync(); // aca  se uede poner { alter: true } para modificar las tablas
        console.log("Base de datos conectada a postgres a traves de sequelize");
    } catch (error) {
        console.error('No pudimos conectarnos a la DB', error);
        process.exit(1)
    }
}