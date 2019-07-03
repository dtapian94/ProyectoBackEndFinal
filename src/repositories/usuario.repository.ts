import {DefaultCrudRepository,
        Filter,
        HasManyRepositoryFactory,
        HasOneRepositoryFactory,
        Options,
        repository,
      } from '@loopback/repository';  

import {
       Usuario,
       UsuarioRelations,
       Prestamo,
       UsuarioWithRelations,
     } from '../models';

import {HumongousConnDataSource} from '../datasources';
import {Getter,inject} from '@loopback/core';

import {PrestamoRepository} from './prestamo.repository';


export class UsuarioRepository extends DefaultCrudRepository<
  Usuario,
  typeof Usuario.prototype.id,
  UsuarioRelations
> {
	public readonly prestamos: HasManyRepositoryFactory<
		Prestamo,
		typeof Usuario.prototype.id
	>;


  constructor(
    @inject('datasources.humongous_conn') dataSource: HumongousConnDataSource,
    @repository.getter('PrestamoRepository') 
    protected prestamoRepositoryGetter: Getter<PrestamoRepository>,

  ) {
    super(Usuario, dataSource);
    this.prestamos = this.createHasManyRepositoryFactoryFor(
    	'prestamos',
    	prestamoRepositoryGetter,
    	);
  }

  /* async find(
	  filter?: Filter<Usuario>,
	  options?: Options,
	): Promise<UsuarioWithRelations[]> {
	  // Prevent juggler for applying "include" filter
	  // Juggler is not aware of LB4 relations
	  const include = filter && filter.include;
	  filter = {...filter, include: undefined};
	  const result = await super.find(filter, options);

	  if (include && include.length && include[0].relation === 'prestamos') {
	    await Promise.all(
	      result.map(async r => {
	        r.prestamos = await this.prestamos(r.id).find();
	      }),
	    );
	  }

	  return result;
	}
	 async findById(
    id: typeof Usuario.prototype.id,
    filter?: Filter<Prestamo>,
    options?: Options,
  ): Promise<UsuarioWithRelations> {
    // Prevent juggler for applying "include" filter
    // Juggler is not aware of LB4 relations
    const include = filter && filter.include;
    filter = {...filter, include: undefined};

    const result = await super.findById(id, filter, options);

    
    if (include && include.length && include[0].relation === 'prestamos') {
      result.prestamos = await this.prestamos(result.id).find();
    }

    return result;
  }
*/
}
