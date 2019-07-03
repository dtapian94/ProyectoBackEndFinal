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
import {Banco} from '../models';
import {BancoRepository} from '../repositories';

export class BancosController {
  constructor(
    @repository(BancoRepository)
    public bancoRepository : BancoRepository,
  ) {}

  @post('/bancos', {
    responses: {
      '200': {
        description: 'Banco model instance',
        content: {'application/json': {schema: {'x-ts-type': Banco}}},
      },
    },
  })
  async create(@requestBody() banco: Banco): Promise<Banco> {
    return await this.bancoRepository.create(banco);
  }

  @get('/bancos/count', {
    responses: {
      '200': {
        description: 'Banco model count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async count(
    @param.query.object('where', getWhereSchemaFor(Banco)) where?: Where<Banco>,
  ): Promise<Count> {
    return await this.bancoRepository.count(where);
  }

  @get('/bancos', {
    responses: {
      '200': {
        description: 'Array of Banco model instances',
        content: {
          'application/json': {
            schema: {type: 'array', items: {'x-ts-type': Banco}},
          },
        },
      },
    },
  })
  async find(
    @param.query.object('filter', getFilterSchemaFor(Banco)) filter?: Filter<Banco>,
  ): Promise<Banco[]> {
    return await this.bancoRepository.find(filter);
  }

  @patch('/bancos', {
    responses: {
      '200': {
        description: 'Banco PATCH success count',
        content: {'application/json': {schema: CountSchema}},
      },
    },
  })
  async updateAll(
    @requestBody() banco: Banco,
    @param.query.object('where', getWhereSchemaFor(Banco)) where?: Where<Banco>,
  ): Promise<Count> {
    return await this.bancoRepository.updateAll(banco, where);
  }

  @get('/bancos/{id}', {
    responses: {
      '200': {
        description: 'Banco model instance',
        content: {'application/json': {schema: {'x-ts-type': Banco}}},
      },
    },
  })
  async findById(@param.path.number('id') id: number): Promise<Banco> {
    return await this.bancoRepository.findById(id);
  }

  @patch('/bancos/{id}', {
    responses: {
      '204': {
        description: 'Banco PATCH success',
      },
    },
  })
  async updateById(
    @param.path.number('id') id: number,
    @requestBody() banco: Banco,
  ): Promise<void> {
    await this.bancoRepository.updateById(id, banco);
  }

  @put('/bancos/{id}', {
    responses: {
      '204': {
        description: 'Banco PUT success',
      },
    },
  })
  async replaceById(
    @param.path.number('id') id: number,
    @requestBody() banco: Banco,
  ): Promise<void> {
    await this.bancoRepository.replaceById(id, banco);
  }

  @del('/bancos/{id}', {
    responses: {
      '204': {
        description: 'Banco DELETE success',
      },
    },
  })
  async deleteById(@param.path.number('id') id: number): Promise<void> {
    await this.bancoRepository.deleteById(id);
  }
}
