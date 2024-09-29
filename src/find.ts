import { PrismaClient } from "@prisma/client";
import { pid } from "process";

const prisma = new PrismaClient();

const main = async ()=>{
    //findMany()
    const getAllUsers = await prisma.user.findMany({});
    console.log('Get All Users form Database', getAllUsers)


    //findFirst()
    const getFirstUsers = await prisma.user.findFirst();
    console.log('Get First User From Database', getFirstUsers)

    //findFirstOrThrow
    const getFirstUsersOrThrow = await prisma.user.findFirstOrThrow({
        where:{
            id:500
        }
    })
    console.log(getFirstUsersOrThrow)

    //findUnique()
    const getUniqueUser = await prisma.user.findUnique({
        where:{
         id:1
        }
    })
    console.log("Get Unique User", getUniqueUser)


    //findUniqueOrThrow()
    const getUniqueUserOrThrow = await prisma.user.findUniqueOrThrow({
        where:{
          email:"rakib"
        }
    })
    console.log(getUniqueUserOrThrow)

}

main()