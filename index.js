const port = process.env.PORT || 9999;

server.listen(port, () => {
	console.log(` API is UP  on${port} `);
});
