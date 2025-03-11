export const validationErrorSchema = ({ type, value, message }) => ({
  type: type,
  value: value || null,
  message: message,
  path: `body.${type}`,
});

export const validationError = ({ errors }) => ({
  code: 400,
  type: "validation error",
  errors: errors,
});
