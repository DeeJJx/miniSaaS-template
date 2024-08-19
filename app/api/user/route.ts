import { NextRequest, NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export async function POST(req: NextRequest) {
  const { email, name } = await req.json();

      // Check if email or name is missing (basic validation)
      if (!email || !name) {
        return NextResponse.json({ error: 'Email and name are required' }, { status: 400 });
      }

  try {
    const newUser = await prisma.user.create({
      data: {
        email,
        name,
      },
    });

    return NextResponse.json(newUser, { status: 201 });
  } catch (error) {
    console.error('Error creating user:', error); // Log the error for debugging

    return NextResponse.json({ error: 'An error occurred while creating the user' }, { status: 500 });
  }
}
