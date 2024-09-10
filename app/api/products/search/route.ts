import { prisma } from '@/prisma/prisma-client';
import { NextRequest, NextResponse } from 'next/server';

export async function GET(req: NextRequest) {
	const query = req.nextUrl.searchParams.get('query') || '';

	// const products = await prisma.product.findMany({
	// 	where: {
	// 		name: {
	// 			contains: query,
	// 			mode: 'insensitive',
	// 		},
	// 	},
	// 	take: 5,
	// });

	const products = await prisma.product.findMany();

	const filteredProducts = query ? products.filter(product => product.name.toLocaleLowerCase().includes(query)).slice(0, 5) : products.slice(0, 5);

	return NextResponse.json(filteredProducts);
}
