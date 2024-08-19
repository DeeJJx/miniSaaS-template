// /app/api/favorite/route.ts

import { NextRequest, NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function POST(request: NextRequest) {
  const { gameId, userId } = await request.json();

  const favorite = await prisma.game.update({
    where: { id: gameId },
    data: { user: { connect: { id: userId } } },
  });

  return NextResponse.json(favorite);
}
