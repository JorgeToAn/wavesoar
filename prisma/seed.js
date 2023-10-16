import prisma from '@prisma/client';

const db = new prisma.PrismaClient();

const GENRES = [
  'ROCK',
  'POP',
  'HIP-HOP',
  'RAP',
  'SHOEGAZE',
  'CLASSICAL',
  'ELECTRONIC',
  'ALTERNATIVE',
  'JAZZ',
  'SOUL',
  'PUNK',
  'GRUNGE',
  'METAL',
  'COUNTRY',
  'REGGAE',
  'EMO',
]

async function main() {
  GENRES.forEach(async (name, index) => {
    await db.genre.upsert({
      where: { id: index+1 },
      update: {},
      create: { name },
    });
  })
}

main()
  .then(async () => {
    await db.$disconnect()
  })
  .catch(async (e) => {
    console.error(e)
    await db.$disconnect()
    process.exit(1)
  })