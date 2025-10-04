module.exports = {
  apps: [
    {
      name: 'react-app',
      script: 'npm', // Command to serve your built React app // serve -s build
	  args: "run start", // serve /home/site/wwwroot --no-daemon --spa
      cwd: './', // Path to your frontend directory // build
      instances: 1,
      autorestart: true,
      watch: false,
      env: {
        NODE_ENV: 'production',
        PORT: process.env.PORT || 8080, // Or any port your frontend serves on
      }
    }
  ]
};