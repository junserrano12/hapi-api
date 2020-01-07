import Hapi from '@hapi/hapi'
import { configs } from './config/global'
import { configureRoutes } from './routes'
import conn from './middleware/dbConnections'

const server = new Hapi.Server({
    host: configs.HOST,
    port: configs.PORT,
    routes: {
        cors: true
    }
});

const init = async () => {
    conn.runMongoDb()
    await configureRoutes(server)
    await server.start();
    console.log('Server running on %s', server.info.uri);
};

process.on('unhandledRejection', (err) => {
    console.log(err);
    process.exit(1);
});

init();
