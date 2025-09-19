import { FastifyRequest, FastifyReply } from 'fastify'
import { DeleteProductService } from '../service/DeleteProductService'

class DeleteProductController{
    async handle(request: FastifyRequest, reply: FastifyReply){
        const { id } = request.query as { id: string }
        const productService = new DeleteProductService();
        const products = await productService.execute({ id });
        reply.send(products);
    }
}

export { DeleteProductController }