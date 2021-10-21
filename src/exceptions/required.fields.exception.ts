import { ValidationException } from './validation.exception'
import { stringManager } from '../strings/string.manager'
import { ExceptionArgs } from '../utils/exception.args'

/**
 * Required fields exception.
 * 
 * @extends {ValidationException}
 */
export class RequiredFieldsException extends ValidationException {
    /**
     * Creates an instance of RequiredFieldsException.
     *
     */
    constructor(fields: Array<string>) {
        if (stringManager.fieldTranslation) fields = fields.map(field => stringManager.translateField(field))

        const args = ExceptionArgs.build(undefined, [
            fields.join(', '),
            fields.length > 1 ? stringManager.getWord('ARE') : stringManager.getWord('IS')
        ])

        super(stringManager.getMessage('VALIDATION.REQUIRED_FIELDS'),
            stringManager.getDescription('VALIDATION.REQUIRED_FIELDS'), args)
    }
}
