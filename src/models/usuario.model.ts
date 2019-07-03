import {Entity, model, property} from '@loopback/repository';
import {hasMany} from '@loopback/repository';
import {Prestamo, PrestamoWithRelations} from './prestamo.model';

@model({settings: {}})
export class Usuario extends Entity {
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
  email: string;

  @property({
    type: 'string',
    required: true,
  })
  contrasena: string;

  @property({
    type: 'string',
    required: true,
  })
  nombre_usuario: string;

  @property({
    type: 'string',
    required: true,
  })
  nombres: string;

  @property({
    type: 'string',
    required: true,
  })
  apellidos: string;

  @property({
    type: 'number',
    required: true,
  })
  telefono: number;

  @property({
    type: 'date',
    required: false,
  })
  fecha_nacimiento: string;

  @property({
    type: 'string',
    required: true,
  })
  direccion: string;

  @property({
    type: 'string',
  })
  direccion2?: string;

  @property({
    type: 'string',
    required: true,
  })
  estado: string;

  @property({
    type: 'number',
    required: true,
  })
  codigo_postal: number;

  @property({
    type: 'boolean',
    required: true,
  })
  ife: boolean;

  @property({
    type: 'boolean',
  })
  curp?: boolean;

  @property({
    type: 'boolean',
  })
  rfc?: boolean;

  @property({
    type: 'boolean',
  })
  comprobante_ingresos?: boolean;

  @property({
    type: 'boolean',
  })
  comprobante_domicilio?: boolean;

  @property({
    type: 'boolean',
  })
  aval?: boolean;

  @hasMany(() => Prestamo)
  prestamos?:Prestamo[];


  constructor(data?: Partial<Usuario>) {
    super(data);
  }
}

export interface UsuarioRelations {
  prestamos?:PrestamoWithRelations[];
}

export type UsuarioWithRelations = Usuario & UsuarioRelations;
