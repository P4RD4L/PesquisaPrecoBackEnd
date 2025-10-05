"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const fastify_1 = __importDefault(require("fastify"));
const cors_1 = __importDefault(require("@fastify/cors"));
const routes_1 = require("./routes");
const app = (0, fastify_1.default)({ logger: true });
const PORT = 3333;
app.setErrorHandler((error, request, reply) => {
    reply.code(400).send({ message: error.message });
});
const start = async () => {
    await app.register(cors_1.default, {
        origin: "*"
    });
    await app.register(routes_1.routes);
    try {
        await app.listen({
            port: process.env.PORT ? Number(process.env.PORT) : PORT
        }, () => {
            console.log("Server rodando");
        });
    }
    catch (error) {
        process.exit(1);
    }
};
start();
