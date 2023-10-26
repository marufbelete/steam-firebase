  exports.errorHandler = (err, req, res, next) => {
    console.log(err)
    const statusCode = err.statusCode || 500;
    const errorMessage = err.message || 'Internal Server Error';
    return res.status(statusCode).json({
      error: {
        message: errorMessage,
        success:false,
      },
    });
  };
  