"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getProdutosOptions = void 0;
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
// 4. Opções da Rota
exports.getProdutosOptions = {
    schema: getProdutosSchema,
};
