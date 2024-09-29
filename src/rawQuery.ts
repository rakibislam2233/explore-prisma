import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const rawQuery = async ()=>{
    const getAllTeam = await prisma.$queryRaw `SELECT * FROM "teams"`
    const deleteAllUser = await prisma.$queryRaw `TRUNCATE TABLE "users" CASCADE`
}
// rawQuery()