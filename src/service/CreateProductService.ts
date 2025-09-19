import prismaClient from "../prisma";

interface CreateProductProps{
    productName: string;
    market: string;
    price: string;
}

class CreateProductService{
    async execute({productName, market, price}: CreateProductProps){
        console.log("ROTA FOI CHAMADA");
        if(!productName || !price){
            throw new Error("Preencha todos os campos");
        }
        const product = await prismaClient.product.create({
            data:{
                productName,
                market,
                price,
                status: true
            }
        })
        return product;
    }
}

export { CreateProductService }