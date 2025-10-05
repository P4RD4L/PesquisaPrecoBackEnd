"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DeleteProductService = void 0;
const prisma_1 = __importDefault(require("../prisma"));
class DeleteProductService {
    async execute({ id }) {
        if (!id) {
            throw new Error("Solicitação inválida.");
        }
        const findProduct = await prisma_1.default.product.findFirst({
            where: {
                id: id
            }
        });
        if (!findProduct) {
            throw new Error("Cliente não existe.");
        }
        await prisma_1.default.product.delete({
            where: {
                id: findProduct.id
            }
        });
        return { message: "Deletado com sucesso." };
    }
}
exports.DeleteProductService = DeleteProductService;
