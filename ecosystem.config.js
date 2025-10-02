module.exports = {
  apps : [{
	name: "backend",
	script: "node",
	args: "server/server.js",
	PORT: 5000,
	watch: true
  }, {
	name: "frontend-spa",
	script: "pm2", // This tells PM2 to run its own executable
	args: "serve /home/site/wwwroot --no-daemon --spa",
	watch: true
  }]
};