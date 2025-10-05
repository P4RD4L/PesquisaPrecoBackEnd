"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListPriceController = void 0;
const ListPriceService_1 = require("../service/ListPriceService");
class ListPriceController {
    async handle(request, reply) {
        const listPriceService = new ListPriceService_1.ListPriceService();
        const prices = await listPriceService.execute();
        reply.send(prices);
    }
}
exports.ListPriceController = ListPriceController;
