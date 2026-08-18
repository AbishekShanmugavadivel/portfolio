export const errorHandler = (err, req, res, _next) => {
  console.error('[Server Error]:', err.message || err);

  const statusCode = res.statusCode === 200 ? 500 : res.statusCode;

  res.status(statusCode).json({
    success: false,
    message: err.message || 'Unable to process your request right now. Please try again later.'
  });
};
