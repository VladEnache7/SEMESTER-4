import { useState } from 'react';

function MyComponent() {
    const [foods, setFoods] = useState(['apple', 'banana', 'carrot']);

    function handleAddFood() {
        // get the food from the input tag
        let newFood = document.getElementById('foodInput').value;
        // reset the text of the input tag
        document.getElementById('foodInput').value = '';

        setFoods((f) => [...f, newFood]);
    }

    function handleRemoveFood(index) {
        // using the _ to indicate that we are not using the value of the array
        setFoods(foods.filter((_, i) => i !== index));
    }

    return (
        <div>
            <h2>My favorite foods</h2>
            <ul>
                {foods.map((food, index) => (
                    <li key={index} onClick={() => handleRemoveFood(index)}>
                        {food}
                    </li>
                ))}
            </ul>
            <input
                id="foodInput"
                type="text"
                placeholder="Enter your favorite food"
            />
            <button onClick={handleAddFood}>Add food</button>
        </div>
    );
}

export default MyComponent;
