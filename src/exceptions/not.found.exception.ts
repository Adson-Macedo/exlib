import { ExceptionArgs } from '../utils/exception.args'
import { Exception } from './exception'
import { stringManager } from '../strings/string.manager'

/**
 * Validation exception.
 * 
 * @extends {Exception}
 */
export class NotFoundException extends Exception {
    /**
     * Creates an instance of NotFoundException.
     *
     * @param message Short message
     * @param description Detailed message
     * @param args List of parameters to replace in strings
     */
    constructor(message: string, description: string, args?: ExceptionArgs) {
        super(message, description, args)
    }
}

/**
 * Resource not found exception.
 * 
 * @extends {NotFoundException}
 */
export class ResourceNotFoundException extends NotFoundException {
    /**
     * Creates an instance of ResourceNotFoundException.
     *
     */
    constructor(resourceName: string) {
        const args = ExceptionArgs.build([resourceName], [resourceName])
        super(stringManager.getMessage('ERROR.NOT_FOUND.RESOURCE_NOT_FOUND'),
            stringManager.getDescription('ERROR.NOT_FOUND.RESOURCE_NOT_FOUND'), args)
    }
}

/**
 * Resource not found exception.
 * 
 * @extends {NotFoundException}
 */
export class EndPpointNotFoundException extends NotFoundException {
    /**
     * Creates an instance of EndPpointNotFoundException.
     *
     */
    constructor(endpoint: string) {
        const args = ExceptionArgs.build([endpoint], [endpoint])
        super(stringManager.getMessage('ERROR.NOT_FOUND.ENDPOINT_NOT_FOUND'),
            stringManager.getDescription('ERROR.NOT_FOUND.ENDPOINT_NOT_FOUND'), args)
    }
}
