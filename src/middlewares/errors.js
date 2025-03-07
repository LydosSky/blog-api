function notFound(req, res, next) {
  res.status(404).json({ error: 'Not Found' });
}

function serverError(err, req, res, next) {
  console.error(err);
  res.status(500).json({ error: 'Internal Server Error' });
}

export default { notFound, serverError };
