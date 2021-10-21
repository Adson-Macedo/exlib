import { ExceptionArgs } from '../utils/exception.args'
import { Exception } from './exception'

/**
 * Internal server exception.
 * 
 * @extends {Exception}
 */
export class InternalServerException extends Exception {
    /**
     * Creates an instance of InternalServerException.
     *
     * @param message Short message
     * @param description Detailed message
     * @param args List of parameters to replace in strings
     */
    constructor(message: string, description: string, args?: ExceptionArgs) {
        super(message, description, args)
    }
}
