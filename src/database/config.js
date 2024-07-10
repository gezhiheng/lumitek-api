const config = {
  user: 'sa',
  password: 'Cz61@admin',
  database: 'MySQLServer',
  server: '10.1.1.109',
  pool: {
    max: 10,
    min: 0,
    idleTimeoutMillis: 30000,
  },
  options: {
    encrypt: true,
    trustServerCertificate: true,
  },
}

export default config
