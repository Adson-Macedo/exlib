
export class ExceptionArgs {
    private _message_args?: Array<string>
    private _description_args?: Array<string>

    private constructor(message_args?: Array<string>, description_args?: Array<string>) {
        this._description_args = description_args
        this._message_args = message_args
    }

    get description_args(): Array<string> | undefined {
        return this._description_args
    }

    get message_args(): Array<string> | undefined {
        return this._message_args
    }

    public static build(message_args?: Array<string>, description_args?: Array<string>): ExceptionArgs {
        return new ExceptionArgs(message_args, description_args)
    }
}
