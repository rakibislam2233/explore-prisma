import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const main = async () => {
  //And , endsWith
  const findAgeAndEmail = await prisma.user.findMany({
      where:{
          AND:[
              {
                  age: {gt:20}
              },
              {
                  email:{
                   endsWith: ".com",
                //    startsWith:"rakib"
                // equals:'update@gmail.com'
                  }
              }
          ]
      }
  })
  console.log(findAgeAndEmail)

  //Or,constaint
  const findNameOrAge = await prisma.user.findMany({
    where: {
      OR: [
        {
          age: { gte: 30 },
        },
        {
          name: {
            contains: "Jack",
            mode: "insensitive",
          },
        },
      ],
    },
  });

  console.log(findNameOrAge);
};
main();
