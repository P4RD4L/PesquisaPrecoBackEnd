"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
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
    execute(_a) {
        return __awaiter(this, arguments, void 0, function* ({ price, market, id, productRelName, productName, brand }) {
            console.log("ROTA CREATE PRICE FOI CHAMADA");
            if (!price || !market) {
                throw new Error("Preencha todos os campos");
            }
            const prices = yield prisma_1.default.price.create({
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
        });
    }
}
exports.CreatePriceService = CreatePriceService;
