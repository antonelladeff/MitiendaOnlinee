import './App.css';
import ItemListContainer from './components/ItemListContainer/itemlistcontainer'
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