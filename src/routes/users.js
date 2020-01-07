import * as Users from '../controllers/userController'
import Joi from '@hapi/joi'
import {configs} from '../config/global'
import {handleError} from './utils'

export const routes = [
    {
        method: 'POST',
        path: `${configs.API_PATH}/users/signup`,
        config: {
            handler: (request) => {
                return Users.addUser(request.payload)
            },
            validate: {
                payload: Joi.object({
                    username: Joi.string().min(5).required(),
                    email: Joi.string().min(5).required(),
                    password: Joi.string().min(6).required(),
                }),
                failAction: (request, h, error) => {
                    return handleError(request, h, error)
                }
            }
        }
    }
]