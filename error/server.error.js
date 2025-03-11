export default ({ message }) => ({
  code: 500,
  type: "server error",
  errors: [
    {
      message: message || "Internal Server Error",
      path: "server",
    },
  ],
});
