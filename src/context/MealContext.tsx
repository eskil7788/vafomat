import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { initialMeals } from '@/data/meals';

interface MealContextType {
  meals: string[];
  addMeal: (meal: string) => void;
  removeMeal: (index: number) => void;
  getRandomMeal: () => string;
  getWeeklyMenu: () => string[];
}

const MealContext = createContext<MealContextType | undefined>(undefined);

export const useMeals = () => {
  const context = useContext(MealContext);
  if (!context) {
    throw new Error('useMeals must be used within a MealProvider');
  }
  return context;
};

interface MealProviderProps {
  children: ReactNode;
}

export const MealProvider: React.FC<MealProviderProps> = ({ children }) => {
  const [meals, setMeals] = useState<string[]>(() => {
    const saved = localStorage.getItem('vafomat-meals');
    return saved ? JSON.parse(saved) : initialMeals;
  });

  useEffect(() => {
    localStorage.setItem('vafomat-meals', JSON.stringify(meals));
  }, [meals]);

  const addMeal = (meal: string) => {
    if (meal.trim() && !meals.includes(meal.trim())) {
      setMeals(prev => [...prev, meal.trim()]);
    }
  };

  const removeMeal = (index: number) => {
    setMeals(prev => prev.filter((_, i) => i !== index));
  };

  const getRandomMeal = (): string => {
    if (meals.length === 0) return 'Ingen maträtt tillgänglig';
    const randomIndex = Math.floor(Math.random() * meals.length);
    return meals[randomIndex];
  };

  const getWeeklyMenu = (): string[] => {
    if (meals.length === 0) return [];
    
    // Select 7 independently random meals (can repeat if needed)
    const weeklyMeals: string[] = [];
    for (let i = 0; i < 7; i++) {
      const randomIndex = Math.floor(Math.random() * meals.length);
      weeklyMeals.push(meals[randomIndex]);
    }
    return weeklyMeals;
  };

  return (
    <MealContext.Provider value={{ meals, addMeal, removeMeal, getRandomMeal, getWeeklyMenu }}>
      {children}
    </MealContext.Provider>
  );
};
