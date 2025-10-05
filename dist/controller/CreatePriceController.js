"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreatePriceController = void 0;
const CreatePriceService_1 = require("../service/CreatePriceService");
class CreatePriceController {
    async handle(request, reply) {
        const { price, market, id, productName, productRelName, brand, brandRelName } = request.body;
        const priceService = new CreatePriceService_1.CreatePriceService();
        const prices = await priceService.execute({ price, market, id, productName, productRelName, brand, brandRelName });
        reply.send(prices);
    }
}
exports.CreatePriceController = CreatePriceController;
