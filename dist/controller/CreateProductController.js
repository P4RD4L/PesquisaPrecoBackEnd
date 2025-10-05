"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateProductController = void 0;
const CreateProductService_1 = require("../service/CreateProductService");
class CreateProductController {
    async handle(request, reply) {
        const { productName, brand, weight } = request.body;
        const productService = new CreateProductService_1.CreateProductService();
        const products = await productService.execute({ productName, brand, weight });
        reply.send(products);
        console.log(products);
    }
}
exports.CreateProductController = CreateProductController;
