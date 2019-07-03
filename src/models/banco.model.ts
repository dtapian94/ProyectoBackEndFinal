import {Entity, model, property,hasOne} from '@loopback/repository';
import {Prestamo, PrestamoWithRelations} from './prestamo.model';


@model({settings: {}})
export class Banco extends Entity {
  @property({
    type: 'number',
    id: true,
    required: true,
  })
  id: number;

  @property({
    type: 'string',
    required: true,
  })
  nombre: string;

  @property({
    type: 'number',
    required: true,
  })
  cat: number;

@hasOne(()=> Prestamo)
prestamo:Prestamo;

  constructor(data?: Partial<Banco>) {
    super(data);
  }
}

export interface BancoRelations {
  prestamos?:PrestamoWithRelations[];
}

export type BancoWithRelations = Banco & BancoRelations;
