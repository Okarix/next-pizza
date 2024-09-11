import { Api } from '@/services/api-client';
import { Ingredient } from '@prisma/client';
import { useEffect } from 'react';
import { useState } from 'react';

interface ReturnProps {
	ingredients: Ingredient[];
}

export const useFilterIngredients = (): ReturnProps => {
	const [ingredients, setIngredients] = useState<Ingredient[]>([]);

	useEffect(() => {
		async function fetchIngredients() {
			try {
				const ingredients = await Api.ingredients.getAll();
				setIngredients(ingredients);
			} catch (error) {
				console.error(error);
			}
		}

		fetchIngredients();
	}, []);

	return { ingredients };
};
