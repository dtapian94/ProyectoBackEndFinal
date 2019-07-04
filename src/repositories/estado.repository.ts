import {DefaultCrudRepository} from '@loopback/repository';
import {Estado, EstadoRelations} from '../models';
import {HumongousConnDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class EstadoRepository extends DefaultCrudRepository<
  Estado,
  typeof Estado.prototype.id,
  EstadoRelations
> {
  constructor(
    @inject('datasources.humongous_conn') dataSource: HumongousConnDataSource,
  ) {
    super(Estado, dataSource);
  }
}
