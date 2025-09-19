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
Object.defineProperty(exports, "__esModule", { value: true });
exports.routes = void 0;
const CreateProductController_1 = require("./controller/CreateProductController");
const ListProductController_1 = require("./controller/ListProductController");
const DeleteProductController_1 = require("./controller/DeleteProductController");
function routes(fastify, options) {
    return __awaiter(this, void 0, void 0, function* () {
        fastify.get("/teste", (request, reply) => __awaiter(this, void 0, void 0, function* () {
            return { ok: true };
        }));
        fastify.post("/", (request, reply) => __awaiter(this, void 0, void 0, function* () {
            return reply.status(200).send({ message: "Teste situação raiz site" });
        }));
        fastify.post("/product", (request, reply) => __awaiter(this, void 0, void 0, function* () {
            return new CreateProductController_1.CreateProductController().handle(request, reply);
        }));
        fastify.get("/products", (request, reply) => __awaiter(this, void 0, void 0, function* () {
            return new ListProductController_1.ListProductController().handle(request, reply);
        }));
        fastify.delete("/product", (request, reply) => __awaiter(this, void 0, void 0, function* () {
            return new DeleteProductController_1.DeleteProductController().handle(request, reply);
        }));
    });
}
exports.routes = routes;
