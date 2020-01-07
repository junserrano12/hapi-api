import * as Hotels from '../controllers/hotelController'
import Joi from '@hapi/joi'
import {configs} from '../config/global'
import {handleError} from './utils'

export const routes = [
    {
        method: 'GET',
        path: `${configs.API_PATH}/hotels`,
        handler: () => {
            return Hotels.lists()
        }
    },
    {
        method: 'GET',
        path: `${configs.API_PATH}/hotels/{id}`,
        handler: (request) => {
            return Hotels.findById(request.params.id)
        },
        options: {
            validate: {
                params: Joi.object({
                    id: Joi.string()
                })
            }
        }
    },
    {
        method: 'DELETE',
        path: `${configs.API_PATH}/hotels/{id}`,
        handler: (request) => {
            return Hotels.deleteById(request.params.id)
        }
    },
    {
        method: 'PUT',
        path: `${configs.API_PATH}/hotels/{id}`,
        handler: (request) => {
            return Hotels.updateHotel(request.params.id, request.payload)
        }
    },
    {
        method: 'POST',
        path: `${configs.API_PATH}/hotels`,
        config: {
            handler: (request) => {
                return Hotels.addHotel(request.payload)
            },
            validate: {
                payload: Joi.object({
                    name: Joi.string().min(5).required(),
                    description: Joi.string()
                }),
                failAction: (request, h, error) => {
                    return handleError(request, h, error)
                    // return error.isJoi ? h.response(error.details[0]).takeover() : h.response(error).takeover()
                }
            }
        }
    }
]