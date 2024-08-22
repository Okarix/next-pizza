'use client';

import React, { useEffect } from 'react';
import { Title } from './title';
import { cn } from '@/lib/utils';
import { ProductCard } from './product-card';
import { useIntersection } from 'react-use';
import { useRef } from 'react';
import { useCategoryStore } from '@/store/category';

interface Props {
	title: string;
	items: any[];
	className?: string;
	listClassName?: string;
	categoryId: number;
}

export const ProductsGroupList: React.FC<Props> = ({ title, items, categoryId, listClassName, className }) => {
	const setActiveCategoryId = useCategoryStore(state => state.setActiveId);
	const intersectionRef = useRef(null);

	const intersection = useIntersection(intersectionRef, {
		threshold: 0.3,
	});

	useEffect(() => {
		if (intersection?.isIntersecting) {
			setActiveCategoryId(categoryId);
		}
	}, [intersection?.isIntersecting]);

	return (
		<div
			className={className}
			ref={intersectionRef}
			id={title}
		>
			<Title
				size='lg'
				text={title}
				className='font-extrabold mb-5 '
			/>

			<div className={cn('grid grid-cols-3 gap-[50px]', listClassName)}>
				{items.map((product, index) => {
					return (
						<ProductCard
							key={product.id}
							id={product.id}
							price={product.items[0].price}
							name={product.name}
							imageUrl={product.imageUrl}
						/>
					);
				})}
			</div>
		</div>
	);
};
