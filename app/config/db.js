/**
 * Created by intern07 on 16/11/30.
 */
import config from './config';
const dbConfig = {
  host: config.get('MYSQL_DB_HOST') || 'localhost',
  port: config.get('MYSQL_DB_PORT') || 3306,
  username: config.get('MYSQL_DB_USER') || 'root',
  password: config.get('MYSQL_DB_PASSWORD') || null,
  database: config.get('MYSQL_DB_NAME') || 'onmyoji',
  dialect: 'mysql',
};

export default dbConfig;
