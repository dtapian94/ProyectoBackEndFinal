import {inject} from '@loopback/core';
import {juggler} from '@loopback/repository';
import * as config from './humongous-conn.datasource.json';

export class HumongousConnDataSource extends juggler.DataSource {
  static dataSourceName = 'humongous_conn';

  constructor(
    @inject('datasources.config.humongous_conn', {optional: true})
    dsConfig: object = config,
  ) {
    super(dsConfig);
  }
}
