import {DefaultCrudRepository} from '@loopback/repository';
import {Pais, PaisRelations} from '../models';
import {HumongousConnDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class PaisRepository extends DefaultCrudRepository<
  Pais,
  typeof Pais.prototype.id,
  PaisRelations
> {
  constructor(
    @inject('datasources.humongous_conn') dataSource: HumongousConnDataSource,
  ) {
    super(Pais, dataSource);
  }
}
