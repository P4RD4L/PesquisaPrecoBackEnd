import { FastifyRequest, FastifyReply } from 'fastify'
import { CreateProductService } from '../service/CreateProductService'

class CreateProductController {
    async handle(request: FastifyRequest, reply: FastifyReply) {
        const { productName, brand, weight } = request.body as { productName: string, brand: string, weight: number };
        const productService = new CreateProductService();
        const products = await productService.execute({ productName, brand, weight });
        reply.send(products);
        console.log(products);
    }
}

export { CreateProductController }