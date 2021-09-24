import { PokemonProvider } from './shared/Provider/PokemonProvider';
import { Routes } from './routes/Routes';
import { NavigationDesktop } from './components/navigation/Desktop-Navigation';

function App() {
  return (
    <div className="App">
        <PokemonProvider>
          <Routes>
            <NavigationDesktop/>
          </Routes>
        </PokemonProvider>
    </div>
  );
}

export default App;
