const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function main() {
  await prisma.user.createMany({
    data: [
      { name: 'Vika', email: 'vikadrozhak@.com' },
      { name: 'Dima', email: 'dimadrozhak@.com' },
    ],
  });
  console.log('Seeded!');
}

main()
  .catch(e => console.error(e))
  .finally(() => prisma.$disconnect());