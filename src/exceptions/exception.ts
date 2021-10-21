import { ExceptionArgs } from '../utils/exception.args'
/**
 * General exception of the application. 
 * The other exception should inherit it.
 * 
 * Can not be instantiated. 
 * To create an instance of type exception use the 
 * specific exception or implement one that inherits this.
 * 
 * @abstract
 * @extends {Error}
 */
export abstract class Exception extends Error {
    public description: string

    /**
     * Creates an instance of Exception.
     *
     * @param message Short message
     * @param description Detailed message
     * @param args List of parameters to replace in strings
     */
    protected constructor(message: string, description: string, args?: ExceptionArgs) {
        if (message && args && args.message_args) 
            args.message_args.forEach((arg, i) => message = message.replace(`{${i}}`, arg))
        if (description && args && args.description_args) 
            args.description_args.forEach((arg, i) => description = description.replace(`{${i}}`, arg))

        super(message)
        this.description = description
    }
}
