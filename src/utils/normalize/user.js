
/**
 *  Normmaliza la estructura de datos de una peticion con datos de un usuario para poder procesarlos y validarlos adecuadamente
 * @param {object} data - datos que llegan de la peticio con la informacion del usuario a destructurar 
 * @returns {Array} - devuelve un array con 3 elementos, los datos generales del usuario como objeto, el email en la segunad posicion y la contraseña en la ultima
 */


export const destructuringUserData = (data) => {
    const {
        nombre,
        apellido_paterno,
        apellido_materno,
        email,
        telefono,
        fecha_nacimiento,
        password,
        admin
    } = data;

    const globalDataUser = {
        nombre,
        apellido_paterno,
        apellido_materno,
        email,
        telefono,
        fecha_nacimiento,
        admin
    };

    return [globalDataUser, email, password];
};


export const normalizeUserdata = (email, password, generalData = {}) => {
    return {
        email,
        password,
        ...generalData
    };
}

export const normalizeUserPrivateData = (user) => {
    const { id, nombre, apellido_paterno, apellido_materno, email } = user;
    return {
        id,
        nombre,
        apellido_paterno,
        apellido_materno,
        email
    };
}