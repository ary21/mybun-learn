import express from 'express';
import { PrismaClient } from '@prisma/client';

const app = express()
const port = 3000

app.get('/', async (req, res) => {
  const prisma = new PrismaClient();
  const data = await prisma.user.findMany();
  res.send('Hello World! >' + data.length);
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})