// module.exports = ({ env }) => ({
//   defaultConnection: "default",
//   connections: {
//     default: {
//       connector: "mongoose",
//       settings: {
//         host: env("DATABASE_HOST", "127.0.0.1"),
//         srv: env.bool("DATABASE_SRV", false),
//         port: env.int("DATABASE_PORT", 27017),
//         database: env("DATABASE_NAME", "ordit3"),
//         username: env("DATABASE_USERNAME", ""),
//         password: env("DATABASE_PASSWORD", ""),
//       },
//       options: {
//         authenticationDatabase: env("AUTHENTICATION_DATABASE", null),
//         ssl: env.bool("DATABASE_SSL", false),
//       },
//     },
//   },
// });

// console.log(process.env.NODE_ENV);

module.exports = ({ env }) => ({
  defaultConnection: "default",
  connections: {
    default: {
      connector: "mongoose",
      settings: {
        uri: process.env.DATABASE_URI,

        database: process.env.DATABASE_NAME,
      },
      options: {
        ssl: true,
      },
    },
  },
});
