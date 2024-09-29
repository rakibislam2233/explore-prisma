import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const main = async () => {
//   const getFiveUser = await prisma.user.findMany({
//     take: 5,
//   });
//   console.log(getFiveUser)

//first 5 user not taken and only 3 user show 

const getUser = await prisma.user.findMany({
    skip:5,
    take: 3,
    orderBy:{
        age:'asc'
        // age:'desc'
    }
})
console.log(getUser)
};

main()