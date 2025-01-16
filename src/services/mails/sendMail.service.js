import { config } from "../../config/env.config.js"
import { MailServiceError } from "../../errors/TypeError.js";


const { user } = config.mail.auth;

export const sendMailService = async({ to, subject, message, html = '' }) => {
    try {
        const MailOptions = {
            from: user,
            to,
            subject,
            message,
            html
            };

            const infoData = await transporter.sendMail(MailOptions);
            console.log('Correo enviado con exito');
            return infoData;
    } catch (error) {
        throw new MailServiceError('Error al enviar el correo', 500, error);
    }
}