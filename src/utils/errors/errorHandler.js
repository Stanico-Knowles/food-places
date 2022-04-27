const HTTPExceptions = require('./enums/exceptions');
const HTTPError = require('./httpError');

function APIErrorHandler(err, req, res, next) {

  if (err instanceof HTTPError) {
    res.status(err.code).json(err.message);
    return;
  }

  res.status(500).json( {error: HTTPExceptions.InternalServerError} );
}

module.exports = APIErrorHandler;