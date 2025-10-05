"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListController = void 0;
const client_1 = require("@prisma/client");
const products_1 = require("../prisma/products"); // Importa os tipos e schema
class ListController {
    constructor() {
        this.prisma = new client_1.PrismaClient();
    }
    // Função que registra a rota (Plugin do Fastify)
    handle(fastify, request, reply) {
        return __awaiter(this, void 0, void 0, function* () {
            // Rota GET /api/produtos
            fastify.get('/produtos', products_1.getProdutosOptions, (request, reply) => __awaiter(this, void 0, void 0, function* () {
                // Fastify já tipou request.query graças ao Generic Type <GetProdutosRoute>
                const { search, mercado } = request.query;
                // 1. Construir o Objeto de Filtro (Where) do Prisma
                const whereConditions = {}; // Usamos 'any' para simplificar, mas você pode tipar com Prisma.SeuModeloWhereInput
                // 1ª Condição: Filtrar por Mercado
                if (mercado && mercado.trim() !== '') {
                    // O Fastify garante que 'mercado' é uma string (se o Schema estiver configurado corretamente)
                    whereConditions.market = {
                        contains: mercado,
                        mode: 'insensitive', // Permite busca sem case-sensitive (para PostgreSQL, SQLite e SQL Server)
                    };
                }
                // 2ª Condição: Busca por Produto/Mercado (Usando OR)
                if (search && search.trim() !== '') {
                    // O Prisma conecta implicitamente esta condição (OR) com a anterior (market) por AND.
                    whereConditions.OR = [
                        // Busca o termo 'search' no nome do produto
                        { productRelName: { contains: search, mode: 'insensitive' } },
                        // Busca o termo 'search' também no nome do mercado
                        { market: { contains: search, mode: 'insensitive' } },
                    ];
                }
                // 2. Executar a Query no Prisma
                try {
                    const produtos = yield this.prisma.produto.findMany({
                        where: whereConditions,
                        // Exemplo de ordenação
                        orderBy: {
                            created_at: 'desc',
                        },
                    });
                    return reply.send(produtos); // Retorna os produtos filtrados
                }
                catch (error) {
                    request.log.error(error);
                    reply.code(500).send({ error: 'Falha interna ao buscar dados.' });
                }
            }));
        });
    }
}
exports.ListController = ListController;
