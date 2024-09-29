import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const main = async()=>{
    //sum
    const totalAgeSum = await prisma.user.aggregate({
        _sum:{
            age:true
        }
    })
    console.log(totalAgeSum)
    //avg
    const totalAgeAvg = await prisma.user.aggregate({
        _avg:{
            age:true
        }
    })
    console.log(totalAgeAvg)
    //count 
    const totalData = await prisma.user.count();
    console.log(totalData)
    const totalAgeData = await prisma.user.aggregate({
        _count:{
            age:true
        }
    })
    console.log(totalAgeData)

    //min
    const minAge = await prisma.user.aggregate({
        _min:{
            age:true
        }
    })
    console.log(minAge)

    //max age
    const maxAge = await prisma.user.aggregate({
        _max:{
            age:true
        }
    })

    console.log(maxAge)
}
main()