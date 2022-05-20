import Header from "./components/Header";
import 'bootstrap/dist/css/bootstrap.min.css';
import CardsDetails from "./components/CardsDetails";
import Cards from "./components/Cards";
import {Routes, Route} from 'react-router-dom';

function App() {
  return (
    <div>
      <Header />
    
      <Routes>
        <Route path="/" element={<Cards />}/>
        <Route path="/cart/:id" element={<CardsDetails />}/>
      </Routes>
    
    </div>
  );
}

export default App;
