module.exports = {
  apps : [{
	name: "backend",
	script: "server/server.js",
	watch: true
  }, {
	name: "frontend-spa",
	script: "pm2", // This tells PM2 to run its own executable
	args: "serve /home/site/wwwroot --no-daemon --spa",
	watch: true
  }]
};