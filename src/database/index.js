import { ConnectionPool } from 'mssql'
import config from './config'

const poolPromise = new ConnectionPool(config)
  .connect()
  .then((pool) => {
    return pool
  })
  .catch((err) => {
    console.error('Database connection failed:', err)
    process.exit(1)
  })

async function executeSql(sql) {
  try {
    const pool = await poolPromise
    const result = await pool.request().query(sql)
    return result.recordset
  } catch (err) {
    console.error('SQL execution error:', err)
    throw err
  }
}

export default executeSql
