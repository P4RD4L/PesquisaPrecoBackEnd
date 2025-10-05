import prismaClient from "../prisma";

class ListPriceService{
    async execute() {
        const price = await prismaClient.price.findMany();
        return price;
    }
}

export { ListPriceService }