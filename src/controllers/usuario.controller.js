import { Usuario } from "../models/Usuario.model.js";

export const getAllUsers = async (req, res, next) => {
    try {
        const users = await Usuario.findAll({
            attributes: {
                exclude: ['password', 'createAt', 'updateAt', 'deleteAt']
            }
        });
        
        res.status(200).json({
            message: 'Usuarios encontrados con éxito',
            status: 200,
            data: users
        })

    } catch (error) {
        next (error);
    }
}