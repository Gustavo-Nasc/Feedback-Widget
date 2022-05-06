import { PrismaClient } from "@prisma/client";

export const prisma = new PrismaClient({
    //Por meio do codigo abaixo, eu declaro que a cada operação que o prisma realize no banco de dados, o query apareca no log, no console
    log: ['query']
});