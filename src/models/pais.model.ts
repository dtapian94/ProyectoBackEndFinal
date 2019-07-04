import {Entity, model, property} from '@loopback/repository';

@model({settings: {}})
export class Pais extends Entity {
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
  Nombre: string;


  constructor(data?: Partial<Pais>) {
    super(data);
  }
}

export interface PaisRelations {
  // describe navigational properties here
}

export type PaisWithRelations = Pais & PaisRelations;
