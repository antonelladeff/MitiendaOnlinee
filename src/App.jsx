import './App.css';
import ItemListContainer from './components/ItemListContainer/ItemListContainer.jsx'
import Navbar from './components/navbar/navbar.jsx'


function App() {
    return (
        <>
            <Navbar />
            <ItemListContainer texto="Bienvenidos a tienda Online" />
        </>

    );
}
export default App;