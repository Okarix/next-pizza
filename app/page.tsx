import { Container, Title, TopBar, Filters, ProductsGroupList } from '@/components/shared';

export default function Home() {
	return (
		<>
			<Container className='mt-10'>
				<Title
					text='Все пиццы'
					size='lg'
					className='font-extrabold'
				/>
			</Container>
			<TopBar />

			<Container className='mt-10 pb-14'>
				<div className='flex gap-14'>
					<div className='w-[250px]'>
						<Filters />
					</div>

					<div className='flex-1'>
						<div className='flex flex-col gap-16'>
							<ProductsGroupList
								title='Пиццы'
								items={[
									{
										id: 1,
										name: 'Сырный цыпленок',
										price: 2900,
										items: [{ price: 2900 }],
										imageUrl: 'https://media.dodostatic.net/image/r:584x584/11EE7D5FABAED8998CAC0985BFB698FA.avif',
									},
									{
										id: 2,
										name: 'Сырный цыпленок',
										price: 2900,
										items: [{ price: 2900 }],
										imageUrl: 'https://media.dodostatic.net/image/r:584x584/11EE7D5FABAED8998CAC0985BFB698FA.avif',
									},
									{
										id: 3,
										name: 'Сырный цыпленок',
										price: 2900,
										items: [{ price: 2900 }],
										imageUrl: 'https://media.dodostatic.net/image/r:584x584/11EE7D5FABAED8998CAC0985BFB698FA.avif',
									},
									{
										id: 4,
										name: 'Сырный цыпленок',
										price: 2900,
										items: [{ price: 2900 }],
										imageUrl: 'https://media.dodostatic.net/image/r:584x584/11EE7D5FABAED8998CAC0985BFB698FA.avif',
									},
								]}
								categoryId={1}
							/>
							<ProductsGroupList
								title='Комбо'
								items={[
									{
										id: 1,
										name: 'Сырный цыпленок',
										price: 2900,
										items: [{ price: 2900 }],
										imageUrl: 'https://media.dodostatic.net/image/r:584x584/11EE7D5FABAED8998CAC0985BFB698FA.avif',
									},
									{
										id: 2,
										name: 'Сырный цыпленок',
										price: 2900,
										items: [{ price: 2900 }],
										imageUrl: 'https://media.dodostatic.net/image/r:584x584/11EE7D5FABAED8998CAC0985BFB698FA.avif',
									},
									{
										id: 3,
										name: 'Сырный цыпленок',
										price: 2900,
										items: [{ price: 2900 }],
										imageUrl: 'https://media.dodostatic.net/image/r:584x584/11EE7D5FABAED8998CAC0985BFB698FA.avif',
									},
									{
										id: 4,
										name: 'Сырный цыпленок',
										price: 2900,
										items: [{ price: 2900 }],
										imageUrl: 'https://media.dodostatic.net/image/r:584x584/11EE7D5FABAED8998CAC0985BFB698FA.avif',
									},
								]}
								categoryId={2}
							/>
						</div>
					</div>
				</div>
			</Container>
		</>
	);
}
