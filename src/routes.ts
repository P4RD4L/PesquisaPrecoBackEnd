import { FastifyInstance, FastifyPluginOptions, FastifyRequest, FastifyReply } from "fastify"
import { CreateProductController } from './controller/CreateProductController'
import { ListProductController } from './controller/ListProductController'
import { DeleteProductController } from './controller/DeleteProductController'
import { CreatePriceController } from "./controller/CreatePriceController"
import { ListPriceController } from "./controller/ListPriceController"
import { ListController } from './controller/ListController';


export async function routes(fastify: FastifyInstance, options: FastifyPluginOptions) {
    fastify.get("/teste", async (request: FastifyRequest, reply: FastifyReply) => {
        return { ok: true }
    })

    fastify.post("/", async (request: FastifyRequest, reply: FastifyReply) => {
        return reply.status(200).send({ message: "Teste situação raiz site" })
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

    fastify.post("/price", async (request: FastifyRequest, reply: FastifyReply) => {
        return new CreatePriceController().handle(request, reply)
    })

    fastify.get("/prices", async (request: FastifyRequest, reply: FastifyReply) => {
        return new ListPriceController().handle(request, reply)
    })

    fastify.get("/produtos", async (request: FastifyRequest, reply: FastifyReply) => {
        return new ListController().handle(fastify, request, reply,)
    })
}