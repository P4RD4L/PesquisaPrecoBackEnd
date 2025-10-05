"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListProductController = void 0;
const ListProductService_1 = require("../service/ListProductService");
class ListProductController {
    async handle(request, reply) {
        const listProductService = new ListProductService_1.ListProductService();
        const products = await listProductService.execute();
        reply.send(products);
        //console.log(products);
    }
}
exports.ListProductController = ListProductController;
