import {belongsTo,Entity, model, property} from '@loopback/repository';
import {Usuario,UsuarioWithRelations} from './usuario.model';
//import {Banco,BancoWithRelations} from './banco.model';

@model({settings: {}})
export class Prestamo extends Entity {
  @property({
    type: 'number',
    id: true,
    //required: true,
  })
  id: number;

  @property({
    type: 'number',
    //required: true,
  })
  cantidad: number;

  @property({
    type: 'number',
    //required: true,
  })
  plazo: number;

  @property({
    type: 'string',
    //required: true,
  })
  estatus: string;


  @belongsTo (() => Usuario)
  usuario_id: number;

  //@belongsTo (() => Banco)
  //banco_id: number;


  constructor(data?: Partial<Prestamo>) {
    super(data);
  }
}

export interface PrestamoRelations {
  usuario: UsuarioWithRelations;
  //banco: BancoWithRelations;
}

export type PrestamoWithRelations = Prestamo & PrestamoRelations;
