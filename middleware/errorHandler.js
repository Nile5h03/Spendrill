const errorHandler = (err, req, res, next) => {
      console.error('Error:', err.message);
    
      const statusCode = res.statusCode === 200 ? 500 : res.statusCode;
    
      res.status(statusCode).json({
        success: false,
        message: err.message || "Something went wrong",
        stack: process.env.NODE_ENV === 'production' ? null : err.stack,
      });
    };
    
    export default errorHandler;
      // This middleware function handles errors in the Express application. It logs the error message and sends a JSON response with the error details.     