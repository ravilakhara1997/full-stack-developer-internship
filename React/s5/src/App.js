import logo from './logo.svg';
import './App.css';
import ProductList from './components/productList';
import FetchData from './components/fetchData';

function App() {
  return (
    <div className="container">
      <FetchData/>
      <ProductList/>
    </div>
  );
}

export default App;
