import {DefaultCrudRepository} from '@loopback/repository';
import {UserRole, UserRoleRelations} from '../models';
import {HumongousConnDataSource} from '../datasources';
import {inject} from '@loopback/core';

export class UserRoleRepository extends DefaultCrudRepository<
  UserRole,
  typeof UserRole.prototype.id,
  UserRoleRelations
> {
  constructor(
    @inject('datasources.humongous_conn') dataSource: HumongousConnDataSource,
  ) {
    super(UserRole, dataSource);
  }
}
