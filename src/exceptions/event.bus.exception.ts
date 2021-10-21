import { InternalServerException } from './internal.server.exception'
import { stringManager } from '../strings/string.manager'

/**
 * Event bus connection not open exception.
 * 
 * @extends {InternalServerException}
 */
export class EventBusConnectionNotOpenException extends InternalServerException {
    /**
     * Creates an instance of EventBusConnectionNotOpenException.
     *
     */
    constructor() {
        super(stringManager.getMessage('ERROR.EVENT_BUS'), stringManager.getDescription('ERROR.EVENT_BUS.CONNECTION_NOT_OPEN'))
    }
}
