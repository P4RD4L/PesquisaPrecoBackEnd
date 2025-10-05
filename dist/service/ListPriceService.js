"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListPriceService = void 0;
const prisma_1 = __importDefault(require("../prisma"));
class ListPriceService {
    async execute() {
        const price = await prisma_1.default.price.findMany();
        return price;
    }
}
exports.ListPriceService = ListPriceService;
