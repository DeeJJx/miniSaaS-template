// /app/api/submit-game/route.ts

import { NextRequest, NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function POST(request: NextRequest) {
  // const { title, userId } = await request.json();

  // const game = await prisma.game.create({
  //   data: {
  //     title,
  //     user: { connect: { id: userId } },
  //   },
  // });

  // return NextResponse.json(game);
  return NextResponse.json({ message: 'Submit game route' });

}
