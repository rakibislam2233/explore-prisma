import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const batchTransitions = async () => {
  const createUser = prisma.user.create({
   data:{
    name:"Batch Transitions",
    email:"batch@gmail.com",
    age:20
   }
  });

  const updateUniqueUser = prisma.user.update({
    where: {
      id: 1,
    },
    data: {
      name: "Rakib Islam",
    },
  });

  const [user, updateUser] = await prisma.$transaction([
    createUser,
    updateUniqueUser,
  ]);

  console.log(user,updateUser)
};
// batchTransitions()

const interactiveTranstitions = async()=>{
    const result = await prisma.$transaction(async()=>{
        const getUser = await prisma.user.findMany();
        const createUser = await prisma.user.create({
            data:{
                name:"Interactive",
                email:"interactive@gmail.com",
                age:30
            }
        })
        return {
            getUser,
            createUser
        }
    })
    console.log(result)
} 
// interactiveTranstitions()