'use client';

import React from 'react';
import { Title } from './title';
import { FilterCheckbox } from './filter-checkbox';
import { Input } from '../ui';
import { RangeSlider } from '../ui/range-slider';
import { CheckboxFilterGroup } from './checkbox-filter-group';
import { useFilterIngredients } from '@/hooks/useFilterIngredients';

interface Props {
	className?: string;
}

interface PriceProps {
	priceFrom: number;
	priceTo: number;
}

export const Filters: React.FC<Props> = ({ className }) => {
	const { ingredients, loading, selectedIds, onAddId } = useFilterIngredients();
	const [prices, setPrice] = React.useState<PriceProps>({
		priceFrom: 0,
		priceTo: 3499,
	});

	const items = ingredients.map(item => ({
		value: String(item.id),
		text: item.name,
	}));

	const updatePrice = (name: keyof PriceProps, value: number) => {
		setPrice({
			...prices,
			[name]: value,
		});
	};

	return (
		<div className={className}>
			<Title
				size='sm'
				className='mb-5 font-bold'
				text='Фильтрация'
			/>

			<div className='flex flex-col gap-4'>
				<FilterCheckbox
					text='Можно собирать'
					value='1'
					name='awa'
				/>
				<FilterCheckbox
					text='Новинки'
					value='2'
					name='baba'
				/>
			</div>

			<div className='mt-5 border-y border-y-neutral-200 py-6 pb-7'>
				<p className='font-bold mb-3'>Цена от и до:</p>
				<div className='flex gap-3 mb-5'>
					<Input
						type='number'
						placeholder='0'
						min={0}
						maxLength={5000}
						value={String(prices.priceFrom)}
						onChange={e => updatePrice('priceFrom', Number(e.target.value))}
					/>
					<Input
						type='number'
						min={100}
						maxLength={3499}
						placeholder='5000'
						value={String(prices.priceTo)}
						onChange={e => updatePrice('priceTo', Number(e.target.value))}
					/>
				</div>

				<RangeSlider
					min={0}
					max={3499}
					step={10}
					value={[prices.priceFrom, prices.priceTo]}
					onValueChange={([priceFrom, priceTo]) => setPrice({ priceFrom, priceTo })}
				/>
			</div>

			<CheckboxFilterGroup
				name='ingredients'
				className='mt-5'
				title='Ингредиенты'
				limit={6}
				defaultItems={items.slice(0, 6)}
				items={items}
				loading={loading}
				onClickCheckbox={onAddId}
				selectedIds={selectedIds}
			/>
		</div>
	);
};
