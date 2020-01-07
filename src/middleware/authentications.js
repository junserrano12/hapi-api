import jwt from 'hapi-auth-jwt'
import jwksRsa from 'jwks-rsa'

const validateUser = (decoded, request, callback) => {
    // This is a simple check that the `sub` claim
    // exists in the Access Token. Modify it to suit
    // the needs of your application
    if (decoded && decoded.sub) {
      if (decoded.scope)
        return callback(null, true, {
          scope: decoded.scope.split(' ')
        });

      return callback(null, true);
    }

    return callback(null, false);
};

server.register(jwt, err => {
    if (err) throw err;
    server.auth.strategy('jwt', 'jwt', 'required', {
        complete: true,
        // verify the Access Token against the
        // remote Auth0 JWKS
        key: jwksRsa.hapiJwt2Key({
            cache: true,
            rateLimit: true,
            jwksRequestsPerMinute: 5,
            jwksUri: `https://dev-gkr9ltff.auth0.com/.well-known/jwks.json`
        }),
        verifyOptions: {
            audience: 'YOUR_API_IDENTIFIER',
            issuer: `https://dev-gkr9ltff.auth0.com/`,
            algorithms: ['RS256']
        },
        validateFunc: validateUser
    });

})