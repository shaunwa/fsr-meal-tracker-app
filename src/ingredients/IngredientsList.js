import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../ui';
import { IngredientsListItem } from './IngredientsListItem';

export const IngredientsList = ({ ingredients, onDelete }) => {
    return (
        <div className="list-container">
            <h1>Ingredients</h1>
            {ingredients.map(ingredient => (
                <IngredientsListItem
                    key={ingredient.name}
                    ingredient={ingredient}
                    onDelete={onDelete} />
            ))}
            <Link to='/add-ingredient'>
                <Button className="space-before">+ Add Ingredient</Button>
            </Link>
        </div>
    );
}