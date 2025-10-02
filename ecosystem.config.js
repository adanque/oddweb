module.exports = {
  apps : [{
	name: "backend",
	script: "node",
	instances: 1,
	exec_mode: "fork",
	args: "server/server.js",
	env: {
		NODE_ENV: "production",
		PORT: 5000, // Explicitly set the port for the backend
	},
	watch: true
  }, {
	name: "frontend-spa",
	script: "pm2", // This tells PM2 to run its own executable
	args: "serve /home/site/wwwroot --no-daemon --spa",
	watch: true
  }]
};