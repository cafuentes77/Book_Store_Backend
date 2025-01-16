import { CustomError } from "./CustomError.js";

export class ValidateError extends CustomError {
    constructor(message, statusCode, details) {
        super(message || 'Error de validación', statusCode || 400, details);
    }
}

export class NotFound extends CustomError {
    constructor(message, details, entity) {
        super(message || `${entity} No encontrado`, 404, details);
    }
}

export class DataBaseError extends CustomError {
    constructor(message, statusCode, details) {
        super(
            message || 'Error en la comunicacion con la base de datos', 
            statusCode || 500, 
            details
        );
    }
}

export class InternalServerError extends CustomError {
    constructor(message, statusCode, details) {
        super(
            message || 'Error interno del servidor', 
            statusCode || 500, 
            details);
    }
}

export class AuthError extends CustomError {
    constructor(message, statusCode, details) {
        super(
            message || 'Error de autenticación', 
            statusCode || 500, 
            details);
        }
}

export class MailServiceError extends CustomError {
    constructor(message, statusCode, details) {
        super(
            message || 'Error en el servicio de correo',
            statusCode || 500,
            details);
    }
}

