import { ValidateError } from "../../errors/TypeError.js"


export const validatePassword = (password, birthday) => {
    if(password.length < 8) {
        throw new ValidateError('La contraseña debe tener al menos 8 caracteres');
    }

    const passRegex =/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[^A-Za-z0-9]).{8,}$/
    if(!passRegex.test(password)) {
        throw new ValidateError('La contraseña debe tener al menos una mayúscula, una minúscula, un número, un digito y un caracter especial');
    }

    if(birthday && password.includes(birthday)) {
        throw new ValidateError('La contraseña no puede contener tu fecha de nacimiento');
    }

    const digitChain = password.replace(/\D+/g, '');

    for (let i = 0; i < digitChain.length - 2; i++) {
        const digitOne = parseInt(digitChain[i], 10);
        const digitTwo = parseInt(digitChain[i + 1], 10);
        const digitThree = parseInt(digitChain[i + 2], 10);
        if(digitOne === digitTwo && digitTwo === digitThree) {
            throw new ValidateError('La contraseña no puede tener tres dígitos identicos consecutivos');
        }

        if((digitOne + 1 === digitTwo) && (digitTwo + 1) === digitThree) {
            throw new ValidateError('La contraseña no puede tener tres dígitos consecutivos ascendentes');
        }
    }

    const lettersChain = password.replace(/[^A-Zaz]+/g, '');

    for (let i = 0; i < lettersChain.length - 2; i++) {
        const letterOne = lettersChain.charCodeAt(i);
        const letterTwo = lettersChain.charCodeAt(i + 1);
        const letterThree = lettersChain.charCodeAt(i + 2);

        if((letterOne + 1 === letterTwo) && (letterTwo + 1 === letterThree)) {
            throw new ValidateError('La contraseña no puede tener tres letras ascendentes consecutivas');
        }
    }

    return true;
};

export const isNotMatchedPassword = (matchResult) => {
    
}