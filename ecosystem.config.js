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
      script: 'serve -s build', // Command to serve your built React app
      cwd: './build', // Path to your frontend directory
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