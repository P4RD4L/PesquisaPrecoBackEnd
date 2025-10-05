"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.routes = routes;
const CreateProductController_1 = require("./controller/CreateProductController");
const ListProductController_1 = require("./controller/ListProductController");
const DeleteProductController_1 = require("./controller/DeleteProductController");
const CreatePriceController_1 = require("./controller/CreatePriceController");
const ListPriceController_1 = require("./controller/ListPriceController");
const ListController_1 = require("./controller/ListController");
async function routes(fastify, options) {
    fastify.get("/teste", async (request, reply) => {
        return { ok: true };
    });
    fastify.post("/", async (request, reply) => {
        return reply.status(200).send({ message: "Teste situação raiz site" });
    });
    fastify.post("/product", async (request, reply) => {
        return new CreateProductController_1.CreateProductController().handle(request, reply);
    });
    fastify.get("/products", async (request, reply) => {
        return new ListProductController_1.ListProductController().handle(request, reply);
    });
    fastify.delete("/product", async (request, reply) => {
        return new DeleteProductController_1.DeleteProductController().handle(request, reply);
    });
    fastify.post("/price", async (request, reply) => {
        return new CreatePriceController_1.CreatePriceController().handle(request, reply);
    });
    fastify.get("/prices", async (request, reply) => {
        return new ListPriceController_1.ListPriceController().handle(request, reply);
    });
    fastify.get("/produtos", async (request, reply) => {
        return new ListController_1.ListController().handle(fastify, request, reply);
    });
}
