import { prisma } from './prisma-client';
import { hashSync } from 'bcrypt';

async function up() {
	await prisma.user.createMany({
		data: [
			{
				fullName: 'Test User',
				email: 'testuser@gamil.com',
				password: hashSync('12345678', 10),
				verified: new Date(),
				role: 'USER',
			},
			{
				fullName: 'Admin',
				email: 'admin@gamil.com',
				password: hashSync('12345678', 10),
				verified: new Date(),
				role: 'ADMIN',
			},
		],
	});
}

async function down() {
	await prisma.$executeRaw`TRUNCATE TABLE "User" RESTART IDENTITY CASCADE`;
}

async function main() {
	try {
		await down();
		await up();
	} catch (e) {
		console.error(e);
	}
}

main().then(async () => {
	await prisma.$disconnect();
});
