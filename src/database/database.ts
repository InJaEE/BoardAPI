import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

// async function main() {
//   await prisma.user.create({
//     data: {
//       email: 'in11202@naver.com',
//       name: 'injae',
//     },
//   });
//   const allUser = await prisma.user.findMany();
//   console.dir(allUser);
// }

// main()
//   .catch((err) => {
//     throw err;
//   })
//   .finally(async () => {
//     await prisma.$disconnect();
//   });

export default prisma;
