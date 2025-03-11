export default ({ type, value, path }) => ({
  code: 401,
  type: "Authentication error",
  errors: [
    {
      type: type || "token",
      value: value || null,
      message: `Invalid ${type || "token"}`,
      path: path || "headers.authorization",
    },
  ],
});
