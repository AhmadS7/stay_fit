import React from 'react';
    import { PlusCircle } from 'lucide-react';

    function AddMeal() {
      return (
        <div className="p-4">
          <h1 className="text-2xl font-bold mb-4 text-center">
            <PlusCircle className="inline-block mr-2" />
            Add Meal
          </h1>
          <div className="bg-white rounded-lg shadow-md p-4">
            <form>
              <div className="mb-4">
                <label htmlFor="mealName" className="block text-gray-700 text-sm font-bold mb-2">
                  Meal Name
                </label>
                <input
                  type="text"
                  id="mealName"
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  placeholder="e.g., Salad"
                />
              </div>
              <div className="mb-4">
                <label htmlFor="calories" className="block text-gray-700 text-sm font-bold mb-2">
                  Calories
                </label>
                <input
                  type="number"
                  id="calories"
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                  placeholder="e.g., 500"
                />
              </div>
              <button
                type="submit"
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              >
                Add Meal
              </button>
            </form>
          </div>
        </div>
      );
    }

    export default AddMeal;
