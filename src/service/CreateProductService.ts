import prismaClient from "../prisma";

interface CreateProductProps {
    productName: string;
    brand: string;
    weight: number;
}

class CreateProductService {
    async execute({ productName, brand, weight }: CreateProductProps) {
        console.log("ROTA CREATE PRODUCT FOI CHAMADA");
        if (!productName || !brand) {
            throw new Error("Preencha todos os campos")
        }
        const product = await prismaClient.product.create({
            data: {
                productName,
                brand,
                weight,
                status: true,
            },
        })
        return product
    }
}

export { CreateProductService }