import type { NextApiRequest, NextApiResponse } from 'next';
import prisma from '~/app/lib/prisma';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const users = await prisma.user.findMany();
  res.status(200).json(users);
}
