import { Exception } from './exception'
import { ExceptionArgs } from '../utils/exception.args'
import { stringManager } from '../strings/string.manager'

/**
 * Conflict exception.
 * 
 * @extends {Exception}
 */
export class ConflictException extends Exception {
    /**
     * Creates an instance of ConflictException.
     *
     */
    constructor(resourceName: string, uniqueAtributes: Array<string>) {
        const args = ExceptionArgs.build([resourceName], [resourceName, uniqueAtributes.join(', ')])
        super(stringManager.getMessage('ERROR.CONFLICT'), stringManager.getDescription('ERROR.CONFLICT'), args)
    }
}
