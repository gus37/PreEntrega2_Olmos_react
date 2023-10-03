import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import 'bulma/css/bulma.css'

function App() {
  return (
    <div className="App">
      <NavBar/>
      <ItemListContainer greeting={'🙋‍♀️ Bienvenidos 🙋‍♂️'}/> 
      <ItemDetailContainer/>
    </div>
  );
}

export default App;