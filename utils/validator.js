import validator from 'validator';
import { notCorrentValueMessage, passwordLengthErrorMessage } from './message.js';

export const isEmpty = (res, ...args) => {
    for (let i = 0; i < args.length; i++) {
        if (validator.isEmpty(args[i])) {
            notCorrentValueMessage(res)
            return true
        }
    }
    return false
}

export const isVaildPasswordLength = (res, password) => {
    if (!validator.isLength(password, { min: 6 })) {
        passwordLengthErrorMessage(res)
        return false
    }
    return true
}