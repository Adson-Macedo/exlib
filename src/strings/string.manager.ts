import { DefaultStrings, IStrings } from './strings'
import { Language } from '../utils/language'
import { StringContainer } from './string.container'
import { IStringDefinition } from './strings.interface'

/**
 * Class that defines variables with default values.
 * Implementation of String Manager
 * 
 * If not provided, the default language used is english
 * 
 * @implements {IStringManager}
 * @param {Language}  
 */
export class StringManager {
    private _language: Language
    private _fieldTranslation: boolean
    private _strings: IStrings   //  Definitions for field translations

    private readonly _aux_words: StringContainer    //  Some optional words to be used in messages/descriptions
    private readonly _messages: StringContainer //  Definitions for messages
    private readonly _descriptions: StringContainer //  Definitions for descriptions
    private readonly _fields: StringContainer   //  Definitions for field translations

    /**
     * 
     * @param language Default language for StringManager
     */
    constructor(language?: Language, strings: IStrings = new DefaultStrings()) {
        this._language = language || Language.ENGLISH
        this._strings = strings

        this._aux_words = new StringContainer(strings.WORDS)
        this._messages = new StringContainer(strings.MESSAGES)
        this._descriptions = new StringContainer(strings.DESCRIPTIONS)

        this._fieldTranslation = false
        this._fields = new StringContainer()
    }

    set language(language: Language) {
        this._language = language
    }

    get language(): Language {
        return this._language
    }

    get fieldTranslation(): boolean {
        return this._fieldTranslation
    }

    set fieldTranslation(value: boolean) {
        this._fieldTranslation = value
    }

    get strings(): IStrings {
        return this._strings
    }

    /**
     * Reset all strings to values defined in Strings object
     * 
     */
    public resetStrings(): void {
        this._messages.strings = this._strings.MESSAGES
        this._descriptions.strings = this._strings.DESCRIPTIONS
        this._aux_words.strings = this._strings.WORDS
        this._fields.strings = {}
    }

    /**
     * Retrives a word by path into object that contains strings
     * 
     * @param path Path of string into Words strings object
     * @returns {string}
     */
    public getWord(path: string): string {
        return this._aux_words.getStringByPathName(path, this.language)
    }

    /**
     * Retrives a message by path into object that contains strings
     * 
     * @param path Path of string into Messages strings object
     * @returns {string}
     */
    public getMessage(path: string): string {
        return this._messages.getStringByPathName(path, this.language)
    }

    /**
     * Retrives a description by path into object that contains strings
     * 
     * @param path Path of string into Descriptions strings object
     * @returns {string}
     */
    public getDescription(path: string): string {
        return this._descriptions.getStringByPathName(path, this.language)
    }

    /**
     * Retrieves the translation of a field name to the defined language if it is defined 
     * or the field name itself otherwise.
     * 
     * @param field Field name
     * @returns {string}
     */
    public translateField(field: string): string {
        return this._fields.getStringByPathName(field, this.language) || field
    }

    /**
     * Inserts / update a message into Messages strings object
     * 
     * @param path Path of string into Messages strings object
     * @param value New message string
     * @param language Language of message
     */
    public setMessage(path: string, stringDefinition: IStringDefinition): void {
        this._messages.setString(path, stringDefinition)
    }

    /**
     * Inserts / update a description into descriptions strings object
     * 
     * @param path Path of string into descriptions strings object
     * @param value New description string
     * @param language Language of description
     */
    public setDescription(path: string, stringDefinition: IStringDefinition): void {
        this._descriptions.setString(path, stringDefinition)
    }

    /**
     * Inserts / update a field into fields strings object
     * 
     * @param path Path of string into descriptions strings object
     * @param value New description string
     * @param language Language of description
     */
    public setField(field: string, stringDefinition: IStringDefinition): void {
        this._fields.setString(field, stringDefinition)
    }
}

export const stringManager = new StringManager(Language.ENGLISH, new DefaultStrings())