import { FastifyRequest, FastifyReply } from 'fastify'
import { CreatePriceService } from '../service/CreatePriceService'

class CreatePriceController {
    async handle(request: FastifyRequest, reply: FastifyReply) {
        const { price, market, id, productName, productRelName, brand, brandRelName } = request.body as { price: number, market: string, id: string, productName: string, productRelName: string, brand: string, brandRelName: string };
        const priceService = new CreatePriceService();
        const prices = await priceService.execute({ price, market, id, productName, productRelName, brand, brandRelName });
        reply.send(prices);
    }
}

export { CreatePriceController }