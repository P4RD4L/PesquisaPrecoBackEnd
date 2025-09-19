import { FastifyInstance, FastifyPluginOptions, FastifyRequest, FastifyReply } from "fastify"
import { CreateProductController } from './controller/CreateProductController'
import { ListProductController } from './controller/ListProductController'
import { DeleteProductController } from './controller/DeleteProductController'


export async function routes(fastify: FastifyInstance, options: FastifyPluginOptions) {
    fastify.get("/teste", async (request: FastifyRequest, reply:FastifyReply) => {
        return {ok: true}
    })

    fastify.post("/", async (request: FastifyRequest, reply: FastifyReply) => {
        return reply.status(200).send({message: "Teste situação raiz site"})
    })

    fastify.post("/product", async (request: FastifyRequest, reply: FastifyReply) => {
        return new CreateProductController().handle(request, reply)
    })

    fastify.get("/products", async (request: FastifyRequest, reply: FastifyReply) => {
        return new ListProductController().handle(request, reply)
    })

    fastify.delete("/product", async (request: FastifyRequest, reply: FastifyReply) => {
        return new DeleteProductController().handle(request, reply)
    })
}