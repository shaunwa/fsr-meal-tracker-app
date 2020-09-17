import React, { useState } from 'react';
import { BackButton, Button, CenteredContainer, TextInput } from '../ui';
import { useIngredients } from '../ingredients';
import { RecipeSearchResultsList } from './RecipeSearchResultsList';
import { useRecipeSearchResults } from './useRecipeSearchResults';

export const RecipeSearchPage = () => {
    const [searchString, setSearchString] = useState('');
    const [searchInputValue, setSearchInputValue] = useState('');
    const { ingredients, setIngredients } = useIngredients();
    const { isLoading, searchResults } = useRecipeSearchResults(searchString);

    const onSearchClicked = () => {
        setSearchString(searchInputValue);
    }

    return (
        <>
        <BackButton />
        <CenteredContainer>
            <h1>Add Meal to Plan</h1>
            <TextInput
                className="full-width space-before space-after"
                placeholder="Enter keyword here"
                value={searchInputValue}
                onChange={e => setSearchInputValue(e.target.value)} />
            <Button
                className="full-width space-after"
                onClick={onSearchClicked}
            >Search</Button>
            <RecipeSearchResultsList
                recipes={searchResults}
                ingredients={ingredients} />
        </CenteredContainer>
        </>
    );
}
