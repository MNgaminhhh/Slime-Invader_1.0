module.exports = {
  apps: [
    {
      name: "Slime",
      script: "serve",
      env: {
        PM2_SERVE_PATH: "./",
        PM2_SERVE_PORT: 8316,
        PM2_SERVE_SPA: "true",
        PM2_SERVE_HOMEPAGE: "/index.html",
      },
    },
  ],
};
