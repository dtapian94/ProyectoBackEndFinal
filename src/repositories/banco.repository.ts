import {DefaultCrudRepository} from '@loopback/repository';
import {Banco, BancoRelations} from '../models';
import {HumongousConnDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class BancoRepository extends DefaultCrudRepository<
  Banco,
  typeof Banco.prototype.id,
  BancoRelations
> {
  constructor(
    @inject('datasources.humongous_conn') dataSource: HumongousConnDataSource,
  ) {
    super(Banco, dataSource);
  }
}
