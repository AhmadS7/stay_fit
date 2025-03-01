import React from 'react';
    import { List } from 'lucide-react';

    function MealList() {
      // Placeholder data
      const meals = [
        { id: 1, name: 'Breakfast Salad', calories: 350 },
        { id: 2, name: 'Chicken Breast with Rice', calories: 500 },
        { id: 3, name: 'Protein Shake', calories: 200 },
      ];

      return (
        <div className="p-4">
          <h1 className="text-2xl font-bold mb-4 text-center">
            <List className="inline-block mr-2" />
            Meal List
          </h1>
          <div className="bg-white rounded-lg shadow-md">
            {meals.length > 0 ? (
              <ul>
                {meals.map((meal) => (
                  <li
                    key={meal.id}
                    className="flex justify-between items-center border-b p-4"
                  >
                    <span>{meal.name}</span>
                    <span>{meal.calories} kcal</span>
                  </li>
                ))}
              </ul>
            ) : (
              <p className="p-4 text-gray-500">No meals added yet.</p>
            )}
          </div>
        </div>
      );
    }

    export default MealList;
