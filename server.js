const port = process.env.PORT || 10000;
server.listen(port, "0.0.0.0", () => {
  console.log(`Server started on ${port}`);
});
