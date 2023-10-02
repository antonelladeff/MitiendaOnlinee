import './App.css';
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import Navbar from './components/navbar/navbar'


function App() {
    return (
        <>
            <Navbar />
            <ItemListContainer texto="Bienvenidos a tienda Online" />
        </>

    );
}
export default App