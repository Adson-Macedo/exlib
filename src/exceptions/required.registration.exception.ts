import { ValidationException } from './validation.exception'
import { stringManager } from '../strings/string.manager'
import { ExceptionArgs } from '../utils/exception.args'

/**
 * Required registration exception.
 * 
 * @extends {ValidationException}
 */
export class RequiredRegistrationException extends ValidationException {
    /**
     * Creates an instance of RequiredRegistrationException.
     *
     */
    constructor(resourceName: string) {
        const args = ExceptionArgs.build([resourceName], [resourceName])

        super(stringManager.getMessage('VALIDATION.REQUIRED_REGISTRATION'),
            stringManager.getDescription('VALIDATION.REQUIRED_REGISTRATION'), args)
    }
}
