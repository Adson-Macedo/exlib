import { InternalServerException } from './internal.server.exception'
import { stringManager } from '../strings/string.manager'

/**
 * Required fields exception.
 * 
 * @extends {InternalServerException}
 */
export class RepositoryException extends InternalServerException {
    /**
     * Creates an instance of RepositoryException.
     *
     */
    constructor() {
        super(stringManager.getMessage('ERROR.INTERNAL_SERVER_ERROR'),
            stringManager.getDescription('ERROR.INTERNAL_SERVER_ERROR'))
    }
}
