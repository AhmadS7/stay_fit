import React, { useState } from 'react';
    import HomePage from './components/HomePage';
    import AddMeal from './components/AddMeal';
    import MealList from './components/MealList';
    import Settings from './components/Settings';
    import { Home, PlusCircle, List, Settings as SettingsIcon } from 'lucide-react';

    function App() {
      const [activeTab, setActiveTab] = useState('home');

      return (
        <div className="flex flex-col h-screen">
          <div className="flex-grow overflow-y-auto">
            {activeTab === 'home' && <HomePage />}
            {activeTab === 'add' && <AddMeal />}
            {activeTab === 'list' && <MealList />}
            {activeTab === 'settings' && <Settings />}
          </div>
          <nav className="bg-white shadow-md p-2">
            <ul className="flex justify-around">
              <li>
                <button
                  onClick={() => setActiveTab('home')}
                  className={`flex flex-col items-center ${
                    activeTab === 'home' ? 'text-blue-500' : 'text-gray-500'
                  }`}
                >
                  <Home size={20} />
                  <span className="text-xs">Home</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => setActiveTab('add')}
                  className={`flex flex-col items-center ${
                    activeTab === 'add' ? 'text-blue-500' : 'text-gray-500'
                  }`}
                >
                  <PlusCircle size={20} />
                  <span className="text-xs">Add</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => setActiveTab('list')}
                  className={`flex flex-col items-center ${
                    activeTab === 'list' ? 'text-blue-500' : 'text-gray-500'
                  }`}
                >
                  <List size={20} />
                  <span className="text-xs">List</span>
                </button>
              </li>
              <li>
                <button
                  onClick={() => setActiveTab('settings')}
                  className={`flex flex-col items-center ${
                    activeTab === 'settings' ? 'text-blue-500' : 'text-gray-500'
                  }`}
                >
                  <SettingsIcon size={20} />
                  <span className="text-xs">Settings</span>
                </button>
              </li>
            </ul>
          </nav>
        </div>
      );
    }

    export default App;
