import './App.css';
import ItemListContainer from './components/ItemListContainer/itemListContainer'
import Navbar from './components/navbar/navBar'


function App() {
    return (
        <>
            <Navbar />
            <ItemListContainer texto="Bienvenidos a tienda Online" />
        </>

    );
}
export default App