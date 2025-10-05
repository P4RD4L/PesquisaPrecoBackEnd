// src/routes/produtos.ts
import { FastifyBaseLogger, FastifyInstance, FastifyReply, FastifyRequest, FastifySchema, FastifyTypeProviderDefault, RawServerDefault, RouteGenericInterface } from 'fastify';
import { PrismaClient } from '@prisma/client';
import { GetProdutosRoute, getProdutosOptions } from '../prisma/products'; // Importa os tipos e schema
import { ResolveFastifyRequestType } from 'fastify/types/type-provider';
import { IncomingMessage, ServerResponse } from 'http';

class ListController {

    prisma = new PrismaClient();

    // Função que registra a rota (Plugin do Fastify)
    async handle(fastify: FastifyInstance, request: FastifyRequest, reply: FastifyReply) {
        // Rota GET /api/produtos
        fastify.get<GetProdutosRoute>('/produtos', getProdutosOptions, async (
            request: FastifyRequest<GetProdutosRoute>,
            reply: FastifyReply
        ) => {
            // Fastify já tipou request.query graças ao Generic Type <GetProdutosRoute>
            const { search, mercado } = request.query;

            // 1. Construir o Objeto de Filtro (Where) do Prisma
            const whereConditions: any = {}; // Usamos 'any' para simplificar, mas você pode tipar com Prisma.SeuModeloWhereInput

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
                const produtos = await this.prisma.produto.findMany({
                    where: whereConditions,
                    // Exemplo de ordenação
                    orderBy: {
                        created_at: 'desc',
                    },
                });

                return reply.send(produtos); // Retorna os produtos filtrados
            } catch (error) {
                request.log.error(error);
                reply.code(500).send({ error: 'Falha interna ao buscar dados.' });
            }
        });
    }
}

export { ListController }