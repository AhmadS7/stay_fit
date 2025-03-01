import React from 'react';
    import { Settings as SettingsIcon } from 'lucide-react';

    function Settings() {
      return (
        <div className="p-4">
          <h1 className="text-2xl font-bold mb-4 text-center">
            <SettingsIcon className="inline-block mr-2" />
            Settings
          </h1>
          <div className="bg-white rounded-lg shadow-md p-4">
            <div className="mb-4">
              <label htmlFor="dailyCalories" className="block text-gray-700 text-sm font-bold mb-2">
                Daily Calorie Goal
              </label>
              <input
                type="number"
                id="dailyCalories"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                placeholder="e.g., 2000"
              />
            </div>
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              Save Settings
            </button>
          </div>
        </div>
      );
    }

    export default Settings;
