import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const main = async () => {
  const getUserAndTeam = await prisma.user.findMany({
    include: {
      teams: {
        include: {
          user: true,
          team: true,
        },
      },
    },
  });

  console.dir(getUserAndTeam, { depth: Infinity });
};
main();
