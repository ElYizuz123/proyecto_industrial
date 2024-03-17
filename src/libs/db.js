import { PrismaClient } from "@prisma/client"

const PrismaClientSigleton = () => {
    return new PrismaClient();
};

const globalForPrisma = globalThis;

const prisma = globalForPrisma.prisma ?? PrismaClientSigleton();

export default prisma;

if(process.env.NODE_ENV != "production") globalForPrisma.prisma = prisma;