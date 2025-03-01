import React from 'react';
    import { Apple, Carrot, Soup, UtensilsCrossed } from 'lucide-react';

    function HomePage() {
      return (
        <div className="p-4">
          <h1 className="text-2xl font-bold mb-4 text-center">
            <UtensilsCrossed className="inline-block mr-2" />
            Daily Diet Tracker
          </h1>

          <div className="bg-white rounded-lg shadow-md p-4 mb-4">
            <h2 className="text-xl font-semibold mb-2">Today's Summary</h2>
            <p>
              <Carrot className="inline-block mr-2" />
              Calories: 2000 / 2500
            </p>
            <p>
              <Apple className="inline-block mr-2" />
              Macros: P: 150g, C: 200g, F: 70g
            </p>
          </div>

          <div className="bg-white rounded-lg shadow-md p-4">
            <h2 className="text-xl font-semibold mb-2">
              <Soup className="inline-block mr-2" />
              Recent Meals
            </h2>
            {/* Placeholder for meal list */}
            <p className="text-gray-500">No meals added yet.</p>
          </div>
        </div>
      );
    }

    export default HomePage;
