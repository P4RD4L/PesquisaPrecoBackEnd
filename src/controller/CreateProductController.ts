import { FastifyRequest, FastifyReply } from 'fastify'
import { CreateProductService } from '../service/CreateProductService'

class CreateProductController{
    async handle(request: FastifyRequest, reply: FastifyReply){
        const { productName, market, price } = request.body as { productName: string, market: string, price: string};
        const productService = new CreateProductService();
        const products = await productService.execute({productName, market, price});
        reply.send(products);
    }
}

export { CreateProductController }