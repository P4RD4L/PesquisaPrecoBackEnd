"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteProductController = void 0;
const DeleteProductService_1 = require("../service/DeleteProductService");
class DeleteProductController {
    async handle(request, reply) {
        const { id } = request.query;
        const productService = new DeleteProductService_1.DeleteProductService();
        const products = await productService.execute({ id });
        reply.send(products);
    }
}
exports.DeleteProductController = DeleteProductController;
