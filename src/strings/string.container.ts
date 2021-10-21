import { Language } from '../utils/language'
import { IStringDefinition } from './strings.interface'
/**
 * Implementation of String Container
 * 
 * @param {strings}  
 */
export class StringContainer {
    private _strings: object  //  Strings definitions

    /**
     * 
     * @param strings String definitions object 
     */
    constructor(strings?: object) {
        this._strings = strings || {}
    }

    set strings(strings: object) {
        this._strings = strings
    }

    get strings(): object {
        return this._strings
    }

    /**
     * Retrieves a string given a path and an object containing strings
     * 
     * @param path Path of string into strings object
     * @param stringsObj Object that contains string definitions
     * @returns {string}
     */
    public getStringByPathName(path: string, language: Language): string {
        const paths: Array<string> = path.split('.')
        const mess = paths.reduce((result, curr_path) => result = result ? result[curr_path] : undefined, this.strings)
        return mess ? mess[language] || mess[Language.ENGLISH] : undefined
    }

    /**
     * Inserts / update a string into strings strings object
     * 
     * @param path Path of string into strings strings object
     * @param stringDefinition String definitions
     */
    public setString(path: string, stringDefinition: IStringDefinition): void {
        const result = this.mountObj(path.split('.'), 0, JSON.stringify(stringDefinition))
        this.mergeRecursive(this.strings, JSON.parse(result))
    }

    private mergeRecursive(target: object, source: object): void {
        Object.keys(source).forEach(key => {
            if (typeof source[key] === 'string' || target[key] === undefined) {
                target[key] = source[key]
            } else {
                this.mergeRecursive(target[key], source[key])
            }
        })
    }

    private mountObj(paths: Array<string>, index: number, stringObj: string): string {
        if (index >= paths.length) return stringObj
        return `{"${paths[index]}": ${this.mountObj(paths, index + 1, stringObj)}}`
    }
}
