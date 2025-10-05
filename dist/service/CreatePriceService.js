"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreatePriceService = void 0;
//import { Product } from "../generated/prisma";
//import prisma from "../prisma";
const prisma_1 = __importDefault(require("../prisma"));
/*
    const getUser = async (productId: string): Promise<Product | null> => {
        const user = await prisma.product.findUnique({
            where: { id: productId },
        })
        return user
    }
*/
class CreatePriceService {
    async execute({ price, market, id, productRelName, productName, brand }) {
        console.log("ROTA CREATE PRICE FOI CHAMADA");
        if (!price || !market) {
            throw new Error("Preencha todos os campos");
        }
        const prices = await prisma_1.default.price.create({
            data: {
                price,
                market,
                status: false,
                product: {
                    connect: {
                        id: id,
                    },
                },
                productRelation: {
                    connect: {
                        productName: productName,
                        brand: brand
                    }
                }
            }
        });
        return prices;
    }
}
exports.CreatePriceService = CreatePriceService;
