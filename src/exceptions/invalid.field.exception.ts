import { ValidationException } from './validation.exception'
import { stringManager } from '../strings/string.manager'
import { ExceptionArgs } from '../utils/exception.args'

/**
 * Invalid boolean exception.
 * 
 * @extends {ValidationException}
 */
export class InvalidBooleanException extends ValidationException {
    /**
     * Creates an instance of InvalidBooleanException.
     *
     */
    constructor(field: string) {
        if (stringManager.fieldTranslation) field = stringManager.translateField(field)

        super(stringManager.getMessage('VALIDATION.INVALID_FIELDS'),
            stringManager.getDescription('VALIDATION.INVALID_BOOLEAN'), ExceptionArgs.build(undefined, [field]))
    }
}

/**
 * Invalid string exception.
 * 
 * @extends {ValidationException}
 */
export class InvalidStringException extends ValidationException {
    /**
     * Creates an instance of InvalidStringException.
     *
     */
    constructor(field: string) {
        if (stringManager.fieldTranslation) field = stringManager.translateField(field)

        super(stringManager.getMessage('VALIDATION.INVALID_FIELDS'),
            stringManager.getDescription('VALIDATION.INVALID_STRING'), ExceptionArgs.build(undefined, [field]))
    }
}
