const { PrismaClient } = require('@prisma/client')
const products = require('./products.json')
const prisma = new PrismaClient()

async function main() {
  for (const product of products) {
    await prisma.product.create({
      data: product,
    })
  }
  console.log('✅ Seeding complete.')
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async (e) => {
    console.error('❌ Seeding error:', e)
    await prisma.$disconnect()
    process.exit(1)
  })
