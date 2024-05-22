const { URL } = require('url');

// Parse the URL
const dbUrl = new URL('postgresql://postgres:tOWRQzDbCMsVLAUnpfakdyjNUcMzqWXY@viaduct.proxy.rlwy.net:36053/railway');

module.exports = {
  dialect: 'postgres',
  host: dbUrl.hostname,
  port: dbUrl.port,
  username: dbUrl.username,
  password: dbUrl.password,
  database: dbUrl.pathname.split('/')[1],
  define: {
    timestamps: true, // Corrigido de 'timespamps' para 'timestamps'
    underscored: true,
    underscoredAll: true,
  },
};
