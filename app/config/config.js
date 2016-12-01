/**
 * Created by intern07 on 16/11/30.
 */
import nconf from 'nconf';
import path from 'path';
nconf.argv();
nconf.env();
nconf.defaults({
  NODE_ENV: 'development',
  NODE_PORT: 3000,
  HOST_URL: 'http://localhost:3000',
  
  //dabatase
  MYSQL_DB_HOST:'localhost',
  MYSQL_DB_PORT:3306,
  MYSQL_DB_USER:'root',
  MYSQL_DB_PASSWORD: null,
  MYSQL_DB_NAME: 'onmyoji',
  
  //log
  LOG_DIR:path.resolve(__dirname,'..','log'),
});

export default {
  get: (key) => nconf.get(key),
  getBoolean: (key) => {
    let val = nconf.get(key);
    if (typeof val === 'string') {
      val = val.toLowerCase();
      return val === 'true' || val === 'yes';
    }
    return Boolean(val);
  },
  getNumber: (key) => Number(nconf.get(key)),
};