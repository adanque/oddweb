module.exports = {
  apps: [
    {
      name: 'backend',
      script: 'server.js', // Your Node.js backend entry file
      cwd: './server', // Path to your backend directory
      instances: 1,
      autorestart: true,
      watch: false,
      env: {
        NODE_ENV: 'production',
        PORT: 5000 // Or any port your backend listens on
      }
    },
    {
      name: 'frontend',
      script: 'pm2', // Command to serve your built React app // serve -s build
	  args: "serve /home/site/wwwroot --no-daemon --spa",
      cwd: './', // Path to your frontend directory // build
      instances: 1,
      autorestart: true,
      watch: false,
      env: {
        NODE_ENV: 'production',
        PORT: 8080 // Or any port your frontend serves on
      }
    }
  ]
};