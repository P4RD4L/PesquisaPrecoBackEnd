import { FastifyRequest, FastifyReply } from 'fastify'
import { ListProductService } from '../service/ListProductService'

class ListProductController{
    async handle(request: FastifyRequest, reply: FastifyReply){
        const listProductService = new ListProductService();
        const products = await listProductService.execute();
        reply.send(products);
    }
}

export { ListProductController }