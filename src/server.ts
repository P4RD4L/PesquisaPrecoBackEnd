import Fastify from 'fastify';
import cors from '@fastify/cors';
import { routes } from './routes';

const app = Fastify({ logger: true });
const PORT = 3333;

app.setErrorHandler((error, request, reply) => {
    reply.code(400).send({ message: error.message })
});

const start = async () => {
    await app.register(cors, {
        origin: "*"
    });
    await app.register(routes);

    try {
        await app.listen({
            port: process.env.PORT ? Number(process.env.PORT) : PORT
        },
            () => {
                console.log("Server rodando");
            })
    } catch (error) {
        process.exit(1);
    }
}

start();