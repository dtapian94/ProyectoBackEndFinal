import {DefaultCrudRepository} from '@loopback/repository';
import {Prestamo, PrestamoRelations} from '../models';
import {HumongousConnDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class PrestamoRepository extends DefaultCrudRepository<
  Prestamo,
  typeof Prestamo.prototype.id,
  PrestamoRelations
> {
  constructor(
    @inject('datasources.humongous_conn') dataSource: HumongousConnDataSource,
  ) {
    super(Prestamo, dataSource);
  }
}
