export const configs = {
    PORT: 8082,
    HOST: 'localhost',
    API_PATH: '/api/v1',
    DB_URI: `mongodb+srv://${process.env.MONGO_ATLAS_USER}:${process.env.MONGO_ATLAS_PW}@clusterss-god5s.mongodb.net/${process.env.MONGO_ATLAS_DB}?retryWrites=true&w=majority`,
    ROUTES: ['hotel', 'users']
}