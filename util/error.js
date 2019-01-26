const error = (err,next) => {
      const error = new Error(err);
      error.httpStatusCode = 404;
      return next(error);
}
module.exports = error