import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const main  =async()=>{
    const ageGroup = await prisma.user.groupBy({
        by:["age"],
        _count:{
            age:true
        },
        having:{
            age:{gt:30}
        }
    })
    console.log(ageGroup)
}

main()