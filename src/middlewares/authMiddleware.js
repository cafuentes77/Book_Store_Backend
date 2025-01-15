import jwt from 'jsonwebtoken';
import { AuthError } from "../errors/TypeError.js";
import { config } from '../config/env.config.js';

const { secretKey } = config;

export const authMiddleware = (req, res, next) => {
    try {
        const authorization = req.headers.authorization || '';
        const token = authorization.startsWith('Bearer ') ? authorization.slice(7) : null;
        if (!token) throw new AuthError('Token no proporcionado', 498, 'El token no se encontró, es nulo o tiene un formato invalido');
        
        const decoded = jwt.verify(token, secretKey);
        req.user = decoded;
        next();
    } catch (error) {
        throw new AuthError('Token invalido o inespeardo', 498, error);
    }
}
