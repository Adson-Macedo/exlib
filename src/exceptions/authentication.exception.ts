import { Exception } from './exception'
import { stringManager } from '../strings/string.manager'

/**
 * Authentication exception.
 * 
 * @extends {Exception}
 */
export class AuthenticationException extends Exception {
    /**
     * Creates an instance of AuthenticationException.
     *
     */
    constructor() {
        super(stringManager.getMessage('ERROR.UNAUTHORIZED'), stringManager.getDescription('ERROR.UNAUTHORIZED'))
    }
}
