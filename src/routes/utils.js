const requireRoutes = (routes) => {

    let routesList = []

    routes.forEach(route => {
        routesList.push(require(`./${route}.js`))
    })

    return routesList
}

const registerRoutes = (server, routes = []) => {
    return server.route(routes)
}

const handleError = (request, h, error) => {

    // return error.isJoi ? h.response(error.details[0]).takeover() : h.response(error).takeover()

    if (error.isJoi && Array.isArray(error.details) && error.details.length > 0) {
        const invalidItem = error.details[0];
        return h.response(`Data Validation Error. Schema violation. <${invalidItem.path}> \nDetails: ${JSON.stringify(error.details)}`)
        // return h.response(error.details[0])
            .code(400)
            .takeover();
    }

    return h.response(error)
        .takeover()
}

export {
    requireRoutes,
    registerRoutes,
    handleError
}