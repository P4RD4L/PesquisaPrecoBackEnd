//import { Product } from "../generated/prisma";
//import prisma from "../prisma";
import prismaClient from "../prisma";

interface CreatePriceProps {
    market: string;
    price: number;
    id: string;
    productName: string;
    productRelName: string
    brand: string
    brandRelName: string
}

/*
    const getUser = async (productId: string): Promise<Product | null> => {
        const user = await prisma.product.findUnique({
            where: { id: productId },
        })
        return user
    }
*/

class CreatePriceService {
    async execute({ price, market, id, productRelName, productName, brand }: CreatePriceProps) {
        console.log("ROTA CREATE PRICE FOI CHAMADA");
        if (!price || !market) {
            throw new Error("Preencha todos os campos");
        }
        const prices = await prismaClient.price.create({
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
                    }
                },
                brandRelation: {
                    connect: {
                        brand: brand
                    }
                }
            }
        })
        return prices;
    }
}
export { CreatePriceService }