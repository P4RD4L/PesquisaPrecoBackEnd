import { FastifyRequest, FastifyReply } from 'fastify'
import { ListPriceService } from '../service/ListPriceService'

class ListPriceController {
    async handle(request: FastifyRequest, reply: FastifyReply) {
        const listPriceService = new ListPriceService();
        const prices = await listPriceService.execute();
        reply.send(prices);
    }
}

export { ListPriceController }