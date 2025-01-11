import { Usuario } from "../models/Usuario.model.js";
import { destructuringUserData } from "../utils/normalize/user.js"
import { ensureEmailNotTaken } from "../utils/validators/models.js";



export const register = async (req, res, next) => {
    try {
        const [userGeneralData, email, password] = destructuringUserData(req.body);

        await ensureEmailNotTaken(Usuario, email);
    } catch (error) {
        
    }
}