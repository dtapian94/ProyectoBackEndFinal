import {
  Count,
  CountSchema,
  Filter,
  repository,
  Where,
} from '@loopback/repository';
import {
  post,
  param,
  get,
  getFilterSchemaFor,
  getWhereSchemaFor,
  patch,
  put,
  del,
  requestBody,
} from '@loopback/rest';
import {Prestamo} from '../models';
import {PrestamoRepository} from '../repositories';

export class PrestamosController {
  constructor(
    @repository(PrestamoRepository)
    public prestamoRepository : PrestamoRepository,
  ) {}

  @post('/prestamos', {
    responses: {
      '200': {
        description: 'Prestamo model instance',
        content: {'application/json': {schema: {'x-ts-type': Prestamo}}},
      },
    },
  })
  async create(@requestBody() prestamo: Prestamo): Promise<Prestamo> {
    return await this.prestamoRepository.create(prestamo);
  }

  @get('/prestamos/count', {
    responses: {
      '200': {
        description: 'Prestamo model count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async count(
    @param.query.object('where', getWhereSchemaFor(Prestamo)) where?: Where<Prestamo>,
  ): Promise<Count> {
    return await this.prestamoRepository.count(where);
  }

  @get('/prestamos', {
    responses: {
      '200': {
        description: 'Array of Prestamo model instances',
        content: {
          'application/json': {
            schema: {type: 'array', items: {'x-ts-type': Prestamo}},
          },
        },
      },
    },
  })
  async find(
    @param.query.object('filter', getFilterSchemaFor(Prestamo)) filter?: Filter<Prestamo>,
  ): Promise<Prestamo[]> {
    return await this.prestamoRepository.find(filter);
  }

  @patch('/prestamos', {
    responses: {
      '200': {
        description: 'Prestamo PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async updateAll(
    @requestBody() prestamo: Prestamo,
    @param.query.object('where', getWhereSchemaFor(Prestamo)) where?: Where<Prestamo>,
  ): Promise<Count> {
    return await this.prestamoRepository.updateAll(prestamo, where);
  }

  @get('/prestamos/{id}', {
    responses: {
      '200': {
        description: 'Prestamo model instance',
        content: {'application/json': {schema: {'x-ts-type': Prestamo}}},
      },
    },
  })
  async findById(@param.path.number('id') id: number): Promise<Prestamo> {
    return await this.prestamoRepository.findById(id);
  }

  @patch('/prestamos/{id}', {
    responses: {
      '204': {
        description: 'Prestamo PATCH success',
      },
    },
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody() prestamo: Prestamo,
  ): Promise<void> {
    await this.prestamoRepository.updateById(id, prestamo);
  } 

// end 

  @put('/prestamos/{id}', {
    responses: {
      '204': {
        description: 'Prestamo PUT success',
      },
    },
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() prestamo: Prestamo,
  ): Promise<void> {
    await this.prestamoRepository.replaceById(id, prestamo);
  }

  @del('/prestamos/{id}', {
    responses: {
      '204': {
        description: 'Prestamo DELETE success',
      },
    },
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.prestamoRepository.deleteById(id);
  }
}
