export default (APIKEY) => (req, res, next) => {
  const apikey = req.headers["apikey"] || req.query["apikey"];

  if (!APIKEY) {
    return next();
  }

  if (!apikey || apikey !== APIKEY) {
    return next({
      code: 401,
      type: "API key",
      path: "headers.api-key",
      value: apikey,
    });
  }

  return next();
};
