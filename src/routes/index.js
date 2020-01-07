import { configs } from '../config/global'
import { requireRoutes, registerRoutes } from './utils'

const registeredRoutes = requireRoutes(configs.ROUTES)

export const configureRoutes = (server) => {

    registeredRoutes.forEach( route => {
        const {routes} = route
        registerRoutes(server, routes)
    })

}