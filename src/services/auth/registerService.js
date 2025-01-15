import { hashPassword } from "../auth/hash.service.js";
import { destructuringUserData, normalizeUserdata } from "../../utils/normalize/user.js"
import { ensureEmailNotTaken } from "../../utils/validators/models.js";
import { validatePassword } from "../../utils/validators/password.js";
import { InternalServerError } from '../../errors/TypeError.js';


export const registerService = async (data, Model) => {
    try {
        const [userGeneralData, email, password ] = destructuringUserData(data);

        await ensureEmailNotTaken(Usuario, email);
        validatePassword(password, userGeneralData.fecha_nacimiento);

        const hashedPassword = await hashPassword(password);
        const userData = normalizeUserdata(email, hashedPassword, ...userGeneralData);

        /*const userData = {
            ...userGeneralData,
            email,
            password: hashedPassword
        };*/

        const user = await Model.create(userData);
        return user;
        
    } catch (error) {
        throw new InternalServerError('Error al crear el registro solicitado', 500, error);
    }
}