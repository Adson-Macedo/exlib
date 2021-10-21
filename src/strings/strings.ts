/**
 * Class that defines variables with default values.
 *
 * @see Be careful not to put critical data in this file as it is not in .gitignore.
 * Sensitive data such as database, passwords and keys should be stored in secure locations.
 *
 * @abstract
 */
export class DefaultStrings implements IStrings {
    public readonly WORDS: object = {
        IS: {
            en: 'is',
            pt: 'é'
        },
        ARE: {
            en: 'are',
            pt: 'são'
        }
    }

    public readonly MESSAGES: object = {
        VALIDATION: {
            INVALID_FIELDS: {
                en: 'One or more request fields are invalid...',
                pt: 'Um ou mais campos da requisição são inválidos...',
            },
            REQUIRED_FIELDS: {
                en: 'Required fields were not provided...',
                pt: 'Alguns campos requeridos não foram fornecidos...',
                es: 'No se proporcionaron los campos obligatorios...',
            },
            PARAMETER_CANNOT_BE_UPDATED: {
                en: '{0} parameter cannot be updated...',
                pt: 'O parâmetro {0} não pode ser atualizado...',
            },
            REQUIRED_REGISTRATION: {
                en: 'The {0} provided does not have a registration.',
                pt: 'O(a) {0} fornecido não está registrado.',
            },
        },
        ERROR: {
            UNAUTHORIZED: {
                en: 'An authentication error has occurred.',
                pt: 'Um erro de autenticação ocorreu.'
            },
            FORBIDDEN: {
                en: 'FORBIDDEN',
                pt: 'PERMISSÃO NEGADA'
            },
            CONFLICT: {
                en: '{0} is already registered...',
                pt: '{0} já está registrado...'
            },
            NOT_FOUND: {
                RESOURCE_NOT_FOUND: {
                    en: '{0} not found!',
                    pt: '{0} não encontrado(a)!',
                },
                ENDPOINT_NOT_FOUND: {
                    en: 'Not found!',
                    pt: 'Não encontrado!'
                }
            },
            INTERNAL_SERVER_ERROR: {
                en: 'An internal server error has occurred.',
                pt: 'Um erro interno no servidor ocorreu.'
            },
            EVENT_BUS: {
                en: 'An event bus error has occurred.',
                pt: 'Ocorreu um erro de barramento de evento.',
            }
        }
    }

    public readonly DESCRIPTIONS: object = {
        VALIDATION: {
            INVALID_EMAIL: {
                en: 'Invalid email address!',
                pt: 'Endereço de email inválido!'
            },
            REQUIRED_FIELDS: {
                en: '{0} {1} required!',
                pt: '{0} {1} requerido(s)!',
            },
            INVALID_STRING: {
                en: '{0} must be a string!',
                pt: '{0} deve ser uma string!',
            },
            INVALID_BOOLEAN: {
                en: '{0} must be a boolean!',
                pt: '{0} deve ser um booleano!',
            },
            PASSWORD_CANT_BE_UPDATED: {
                en: 'A specific route to update user password already exists. ' +
                    'Access PATCH /v1/auth/password to update your password.',
                pt: 'Uma rota específica para atualizar a senha do usuário já existe. ' +
                    'Acesse PATCH /v1/auth/password para atualizar sua senha.'
            },
            REQUIRED_REGISTRATION: {
                en: 'It is necessary that the {0} be registered before trying again.',
                pt: 'É necessário que o(a) {0} seja registrado antes de tentar novamente.',
            },
        },
        ERROR: {
            UNAUTHORIZED: {
                en: 'Authentication failed for lack of authentication credentials.',
                pt: 'A autenticação falhou por falta de credenciais de autenticação.'
            },
            FORBIDDEN: {
                en: 'Authorization failed due to insufficient permissions.',
                pt: 'Autorização falhou devido a permissões insuficientes.'
            },
            CONFLICT: {
                en: 'There is already an object of type {0} with these unique attributes: {1}!',
                pt: 'Já existe um objeto do tipo {0} com esses atributos únicos: {1}!'
            },
            NOT_FOUND: {
                RESOURCE_NOT_FOUND: {
                    en: '{0} not found or already removed. A new operation for the same resource is required.',
                    pt: '{0} não foi encontrado(a) ou já removido(a). É necessária uma nova operação para o mesmo recurso.',
                },
                ENDPOINT_NOT_FOUND: {
                    en: 'Endpoint {0} does not found!',
                    pt: 'Endpoint {0} não foi encontrado!'
                }
            },
            EVENT_BUS: {
                CONNECTION_NOT_OPEN: {
                    en: 'No connection open!',
                    pt: 'Nenhuma conexão aberta!'
                }
            },
            INTERNAL_SERVER_ERROR: {
                en: 'Check all parameters of the operation being requested.',
                pt: 'Verifique todos os parâmetros da operação solicitada.',
            }
        },
    }
}

export interface IStrings {
    WORDS: object
    MESSAGES: object
    DESCRIPTIONS: object
}
