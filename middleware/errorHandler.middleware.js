import authenticationError from "../error/authentication.error.js";
import serverError from "../error/server.error.js";
import { validationError } from "../error/validation.error.js";

export default (err, req, res, next) => {
  const { code } = err;
  let errorMessage;

  switch (code) {
    case 400:
      errorMessage = validationError(err);
      break;
    case 401:
      errorMessage = authenticationError(err);
      break;
    default:
      errorMessage = serverError(err);
      break;
  }

  return res.status(code || 500).json(errorMessage);
};
