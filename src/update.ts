import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const main = async()=>{

    //update
    // const updateSingleUser = await prisma.user.update({
    //     where:{
    //         id:5
    //     },
    //     data:{
    //         name:"Rakibul Islam"
    //     }
    // })
    // console.log('Update Single User' , updateSingleUser)

    //updateMany 
    // const updateManyUser = await prisma.user.updateMany({
    //     where:{
    //         age: 30
    //     },
    //     data:{
    //         name:"Age Updated"
    //     }

    // const updateManyUser = await prisma.user.updateMany({
    //     where:{
    //         name:"Age Updated"
    //     },
    //     data:{
    //         age: {
    //             increment: 1,
    //             // decrement:2
    //         }
    //     }
    // })
    // console.log(updateManyUser)


    //upsert
    // const upsertUser = await prisma.user.upsert({
    //     where: {
    //         id: 18, // Unique identifier for the user
    //     },
    //     create: {
    //         name: "Age 30 Created",
    //         age: 30,
    //         email: "age30@gmail.com"
    //     },
    //     update: {
    //         name: "Updated Age 30",
    //         email: "update@gmail.com"
    //     }
    // });
    // console.log(upsertUser);
    

}

main()