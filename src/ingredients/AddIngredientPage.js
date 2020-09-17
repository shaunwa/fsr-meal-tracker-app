import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import {
    BackButton,
    Button,
    CenteredContainer,
    Dropdown,
    TextInput,
    NumberInput,
} from '../ui';

const unitOptions = [
    'pounds',
    'cups',
    'tablespoons',
    'teaspoons',
    'count',
];

export const AddIngredientPage = () => {
    const [name, setName] = useState('');
    const [amount, setAmount] = useState(0);
    const [units, setUnits] = useState(unitOptions[0]);
    const history = useHistory();

    const addToIngredients = async () => {
        const newIngredient = { name, amount, units };
        await fetch('/ingredients', {
            method: 'post',
            body: JSON.stringify(newIngredient),
            headers: {
                'Content-Type': 'application/json',
            },
        });
        alert("Successfully added ingredient!");
        history.push('/');
    };

    return (
        <CenteredContainer>
            <h1>Add Ingredient</h1>
            <TextInput
                placeholder="Enter ingredient name here"
                className="space-after space-before full-width"
                value={name}
                onChange={e => setName(e.target.value)} />
            <NumberInput
                className="space-before full-width"
                value={amount}
                onChange={e => setAmount(e.target.value)} />
            <Dropdown
                className="space-before full-width"
                onChange={e => setUnits(e.target.value)}
                options={unitOptions} />
            <Button
                className="space-before full-width"
                onClick={addToIngredients}
            >Add</Button>
        </CenteredContainer>
    );
}