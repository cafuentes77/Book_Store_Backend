import { registerService } from '../services/auth/registerService.js';
import { Usuario } from '../models/Usuario.model.js';
import { loginService } from '../services/auth/login.service.js';
import { AuthError } from '../errors/TypeError.js';
import { forgotPasswordService, updateUserPasswordWithPassword } from '../services/auth/updatePassword.service.js';

export const register = async(req, res, next) => {
    try {
        const user = await registerService(req.body, Usuario);
        
        res.status(201).json({
            message: 'Usuario Registrado con éxito',
            status: 201,
            data: user //Solo para fines pedagógicos, no debo mostrar todos los datos del usuario en una respuesta
        });

    } catch (error) {
        console.error(error);
        next(error);
    }
};

export const login = async(req, res, next) => {
    try {
        const { user, token } = await loginService(req.body);

        res.status(202).json({
            message: 'Usuario autenticado con éxito',
            status: 202,
            data: { user, token }
        });
    } catch (error) {
        console.error(error);
        next(error);
    }
};

export const updatePassword = async(req, res, next) => {
    try {
        const { id } = req.params;

        if(req.user.id !== id){
            throw new AuthError(
            'No tienes permisos para realizar esta acción', 
            401, 
            'Tus credenciales no son validas para cambiar esta contraseña'
            );
        }
        const user = await updateUserPasswordWithPassword(id, req.body);

        res.status(200).json({
            message: 'Contreaseña actualizada con éxito',
            status: 200

        });
    } catch (error) {
        console.error(error);
        next(error);
    }
};

export const forgotPassword = async(req, res, next) => {
    try {
        /*const { email } = req.body;*/
        const result = await forgotPasswordService(email);

        res.status(200).json({ message: result, status: 200 });
    } catch (error) {
        console.error(error);
        next(error);
    }
};