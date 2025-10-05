// src/schemas/produtos.ts (ou onde você centraliza seus schemas)
import { RouteShorthandOptions } from 'fastify';

// 1. Definição da Interface (para o TypeScript)
interface QueryParams {
    search?: string;
    mercado?: string;
}

// 2. Definição do Schema (para o Fastify - validação e tipagem)
const getProdutosSchema = {
    querystring: {
        type: 'object',
        properties: {
            search: { type: 'string', description: 'Busca por nome do produto ou mercado' },
            mercado: { type: 'string', description: 'Filtrar por nome exato ou parcial do mercado' },
        },
    },
    // Opcional: para tipar a resposta (melhora a performance e documentação)
    // response: {
    //   200: {
    //     type: 'array',
    //     items: {
    //        type: 'object',
    //        properties: { ... } // Propriedades do seu objeto Produto
    //     }
    //   }
    // }
};

// 3. Tipagem da Rota
export interface GetProdutosRoute {
    Querystring: QueryParams;
}

// 4. Opções da Rota
export const getProdutosOptions: RouteShorthandOptions = {
    schema: getProdutosSchema,
};