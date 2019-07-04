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
import {Estado} from '../models';
import {EstadoRepository} from '../repositories';

export class EstadosController {
  constructor(
    @repository(EstadoRepository)
    public estadoRepository : EstadoRepository,
  ) {}

  @post('/estados', {
    responses: {
      '200': {
        description: 'Estado model instance',
        content: {'application/json': {schema: {'x-ts-type': Estado}}},
      },
    },
  })
  async create(@requestBody() estado: Estado): Promise<Estado> {
    return await this.estadoRepository.create(estado);
  }

  @get('/estados/count', {
    responses: {
      '200': {
        description: 'Estado model count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async count(
    @param.query.object('where', getWhereSchemaFor(Estado)) where?: Where<Estado>,
  ): Promise<Count> {
    return await this.estadoRepository.count(where);
  }

  @get('/estados', {
    responses: {
      '200': {
        description: 'Array of Estado model instances',
        content: {
          'application/json': {
            schema: {type: 'array', items: {'x-ts-type': Estado}},
          },
        },
      },
    },
  })
  async find(
    @param.query.object('filter', getFilterSchemaFor(Estado)) filter?: Filter<Estado>,
  ): Promise<Estado[]> {
    return await this.estadoRepository.find(filter);
  }

  @patch('/estados', {
    responses: {
      '200': {
        description: 'Estado PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async updateAll(
    @requestBody() estado: Estado,
    @param.query.object('where', getWhereSchemaFor(Estado)) where?: Where<Estado>,
  ): Promise<Count> {
    return await this.estadoRepository.updateAll(estado, where);
  }

  @get('/estados/{id}', {
    responses: {
      '200': {
        description: 'Estado model instance',
        content: {'application/json': {schema: {'x-ts-type': Estado}}},
      },
    },
  })
  async findById(@param.path.number('id') id: number): Promise<Estado> {
    return await this.estadoRepository.findById(id);
  }

  @patch('/estados/{id}', {
    responses: {
      '204': {
        description: 'Estado PATCH success',
      },
    },
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody() estado: Estado,
  ): Promise<void> {
    await this.estadoRepository.updateById(id, estado);
  }

  @put('/estados/{id}', {
    responses: {
      '204': {
        description: 'Estado PUT success',
      },
    },
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() estado: Estado,
  ): Promise<void> {
    await this.estadoRepository.replaceById(id, estado);
  }

  @del('/estados/{id}', {
    responses: {
      '204': {
        description: 'Estado DELETE success',
      },
    },
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.estadoRepository.deleteById(id);
  }
}
