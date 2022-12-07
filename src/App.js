import './App.css';
import Header from './components/Header/Header';
import MealsSummary from './components/Meals/MealsSummary';
import Meals from './components/Meals/Meals';

function App() {
  return (
    <div>
      <Header />

      <main>
        <Meals />
      </main>
    </div>
  );
}

export default App;
