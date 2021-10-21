import { ValidationException } from './validation.exception'
import { stringManager } from '../strings/string.manager'

/**
 * Password cant be updated exception.
 * 
 * @extends {ValidationException}
 */
export class PasswordCantBeUpdatedException extends ValidationException {
    /**
     * Creates an instance of PasswordCantBeUpdatedException.
     *
     */
    constructor() {
        super(stringManager.getMessage('VALIDATION.PARAMETER_CANNOT_BE_UPDATED').replace('{0}', 'Password'),
            stringManager.getDescription('VALIDATION.PASSWORD_CANT_BE_UPDATED'))
    }
}
