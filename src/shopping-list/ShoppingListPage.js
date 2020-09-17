import React from 'react';
import { CenteredContainer, BackButton } from '../ui';
import { useShoppingList } from './useShoppingList';

export const ShoppingListPage = () => {
    const items = useShoppingList();

    return (
        <CenteredContainer>
            <h1>Here's Your Shopping List:</h1>
            {items.map(item => (
                <p key={item}>{item}</p>
            ))}
        </CenteredContainer>
    );
}