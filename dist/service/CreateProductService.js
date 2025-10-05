"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateProductService = void 0;
const prisma_1 = __importDefault(require("../prisma"));
class CreateProductService {
    async execute({ productName, brand, weight }) {
        console.log("ROTA CREATE PRODUCT FOI CHAMADA");
        if (!productName || !brand) {
            throw new Error("Preencha todos os campos");
        }
        const product = await prisma_1.default.product.create({
            data: {
                productName,
                brand,
                weight,
                status: true,
            },
        });
        return product;
    }
}
exports.CreateProductService = CreateProductService;
