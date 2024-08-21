import React from 'react';
import { Title } from './title';
import { FilterCheckbox } from './filter-checkbox';
import { Input } from '../ui';
import { RangeSlider } from '../ui/range-slider';

interface Props {
	className?: string;
}

export const Filters: React.FC<Props> = ({ className }) => {
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
				/>
				<FilterCheckbox
					text='Новинки'
					value='2'
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
						defaultValue={0}
					/>
					<Input
						type='number'
						min={100}
						maxLength={3499}
						placeholder='5000'
					/>
				</div>

				<RangeSlider
					min={0}
					max={3499}
					step={10}
					value={[0, 3499]}
				/>
			</div>
		</div>
	);
};
