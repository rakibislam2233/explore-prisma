import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const main = async()=>{
    // const deleteUser = await prisma.user.delete({
    //     where:{
    //         id: 18
    //     }
    // })
    // console.log('Single user deleted' , deleteUser);

    const deleteManyUser = await prisma.user.deleteMany({
        where:{
            age:31
        }
    })

    console.log("Delete many users" , deleteManyUser)
}
// main()